// function launching programs
function bindLaunch(key, modifiers, appName) {
    Key.on(key, modifiers, function() {
        App.launch(appName).focus()
    });
  }


// Center Main Window
Key.on('z', ['ctrl', 'shift'], () => {
  const screen = Screen.main().flippedVisibleFrame();
  const window = Window.focused();

  if (window) {
    window.setTopLeft({
      x: screen.x + (screen.width / 2) - (window.frame().width / 2),
      y: screen.y + (screen.height / 2) - (window.frame().height / 2)
    });
  }
});

 bindLaunch("t", ['ctrl', 'shift'], "Terminal");
 bindLaunch("w", ['ctrl', 'shift'], "Webcam Plus");
 bindLaunch("c", ['ctrl', 'shift'], "CamTwist");

Key.on('v', ['ctrl', 'shift'], () => {
  App.launch("Webcam Plus").focus();
  App.launch("CamTwist").focus();
});
