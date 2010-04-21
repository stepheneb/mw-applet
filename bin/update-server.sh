#!/usr/bin/env ruby
require 'net/ssh'
require 'yaml'
begin
  config = YAML.load_file(File.join(File.dirname(__FILE__), 'config.yml'))
  Net::SSH.start(config[:host], config[:username]) do |ssh|
    puts ssh.exec!("cd #{config[:dir]}; git pull")
  end
rescue Errno::ENOENT
  msg = <<-HEREDOC


*** missing bin/config.yml

  cp bin/config_sample.yml bin/config.yml

  and edit ...
  
  HEREDOC
  raise msg
rescue Net::SSH::AuthenticationFailed
  msg = <<-HEREDOC


*** SSH authentication failed connecting to: #{config[:host]}"

  check the configuration: bin/config.yml

  HEREDOC
  raise msg
rescue SocketError
  msg = <<-HEREDOC


*** unable to connect to: #{config[:host]}"

  Are you connected to the network?

  HEREDOC
  raise msg
end

