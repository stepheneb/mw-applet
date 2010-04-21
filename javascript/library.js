
function report (applet_id) {
  var applet = getApplet(applet_id);
  var otmp = applet.getOTObject();
  var report = document.getElementById("report-container");
  var variables = otmp.getVariables();
  var variables_size = variables.size();
  report.innerHTML = "<h3>Variables: " + variables_size + "</h3><hr>"
  for (var i=0; i < variables_size; i++) {
  
  }
  var events = otmp.getEvents();
  var events_size = events.size();  
  report.innerHTML += "<h3>ActionItems: " + events_size + "</h3><hr>"
  for (var i=0; i < events_size; i++) {
    var e1 = events.get(i);
    var p1 = e1.getProperties();
    var ai_name = p1.get('name');
    var ai_event = p1.get('event');
    var ai_script = p1.get('script');
    var ai_timestamp = p1.get('timestamp');
    var ai_description = p1.get('description');
    var ai_source = p1.get('source');
    var ai_target = p1.get('target');
    report.innerHTML += 
      "<p>" +
      "<b>ActionItem: " + "</b><i>" + i            + "</i>" + "<br/>" +
      "<b>Name: "       + "</b><i>" + ai_name      + "</i>" + "<br/>" +
      "<b>Event: "      + "</b><i>" + ai_event     + "</i>" + "<br/>" +
      "<b>Script: "     + "</b><i>" + ai_script    + "</i>" + "<br/>" +
      "<b>Timestamp: "  + "</b><i>" + ai_timestamp + "</i>" + "<br/>" +
      "<b>Source: "     + "</b><i>" + ai_source    + "</i>" + "<br/>" +
      "<b>Target: "     + "</b><i>" + ai_target;   + "</i>" + "<br/>" + 
      "</p>";    
  };
}


function javaClassName(java_obj) {
  return String(java_obj.getClass().getName());
}

function runOTrunkAppletMWScript(applet_id, script) {
  var mw_page = getMWPage(applet_id);
  return mw_page.executeMwScripts(script);
}

function getMWPage(applet_id) {
  var view = getOTViewforApplet(applet_id);
  return view.getPage();
}

function getOTViewforApplet(applet_id) {
  var applet = getApplet(applet_id);
  return applet.getOTContainer().getView();
}

function getApplet(applet_id) {
  return document.getElementById(applet_id);
}

function componentForAppletObject(applet_id, ot_local_id) {
  var applet = getApplet(applet_id);
  var obj = getAppletLocalOTObject(applet, ot_local_id);
  return applet.getOTContainer().getView().getJComponentService().getJComponentViewContext().getComponentByObject(obj);
}

function getAppletLocalOTObject(applet, ot_local_id) {
  return applet.getOTrunk().getOTObject(applet.getID(ot_local_id));
}

function reloadOTApplet(applet_id) {
  var applet = getApplet(applet_id);
  applet.getOTContainer().reloadView();
}
