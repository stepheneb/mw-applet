    var applet;

    function getApplet(id) {
	applet = document.getElementById(id);
    }

    function runScript(id, script) {
        getApplet(id);
        return applet.runMwScript(script);
    }

  