var gdjs;(function(a){let c;(function(g){let d;(function(o){o.lastTouchId=0,o.lastEndedTouchId=0,o.keysNameToCode={a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,Num0:48,Num1:49,Num2:50,Num3:51,Num4:52,Num5:53,Num6:54,Num7:55,Num8:56,Num9:57,Numpad0:96,Numpad1:97,Numpad2:98,Numpad3:99,Numpad4:100,Numpad5:101,Numpad6:102,Numpad7:103,Numpad8:104,Numpad9:105,LShift:1016,RShift:2016,LControl:1017,RControl:2017,LAlt:1018,RAlt:2018,LSystem:1091,RSystem:2091,Space:32,Back:8,Tab:9,Delete:46,Insert:45,Escape:27,PageUp:33,PageDown:34,End:35,Home:36,Return:13,NumpadPageUp:3033,NumpadPageDown:3034,NumpadEnd:3035,NumpadHome:3036,NumpadReturn:3013,Add:107,Subtract:109,Multiply:106,Divide:111,NumpadAdd:3107,NumpadSubtract:3109,NumpadMultiply:3106,NumpadDivide:3111,Left:37,Up:38,Right:39,Down:40,NumpadLeft:3037,NumpadUp:3038,NumpadRight:3039,NumpadDown:3040,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,Pause:19};const s={};for(const e in o.keysNameToCode)o.keysNameToCode.hasOwnProperty(e)&&(s[o.keysNameToCode[e]]=e);o.isKeyPressed=function(e,t){return a.evtTools.input.keysNameToCode.hasOwnProperty(t)?e.getGame().getInputManager().isKeyPressed(a.evtTools.input.keysNameToCode[t]):!1},o.wasKeyReleased=function(e,t){return a.evtTools.input.keysNameToCode.hasOwnProperty(t)?e.getGame().getInputManager().wasKeyReleased(a.evtTools.input.keysNameToCode[t]):!1},o.lastPressedKey=function(e){const t=e.getGame().getInputManager().getLastPressedKey();return s.hasOwnProperty(t)?s[t]:""},o.anyKeyPressed=function(e){return e.getGame().getInputManager().anyKeyPressed()},o.anyKeyReleased=function(e){return e.getGame().getInputManager().anyKeyReleased()},o.isMouseButtonPressed=function(e,t){return t==="Left"?e.getGame().getInputManager().isMouseButtonPressed(0):t==="Right"?e.getGame().getInputManager().isMouseButtonPressed(1):t==="Middle"?e.getGame().getInputManager().isMouseButtonPressed(2):!1},o.isMouseButtonReleased=function(e,t){return t==="Left"?e.getGame().getInputManager().isMouseButtonReleased(0):t==="Right"?e.getGame().getInputManager().isMouseButtonReleased(1):t==="Middle"?e.getGame().getInputManager().isMouseButtonReleased(2):!1},o.hideCursor=function(e){e.getRenderer().hideCursor()},o.showCursor=function(e){e.getRenderer().showCursor()},o.getMouseWheelDelta=function(e){return e.getGame().getInputManager().getMouseWheelDelta()},o.isScrollingUp=function(e){return e.getGame().getInputManager().isScrollingUp()},o.isScrollingDown=function(e){return e.getGame().getInputManager().isScrollingDown()},o.getMouseX=function(e,t,r){return e.getLayer(t).convertCoords(e.getGame().getInputManager().getMouseX(),e.getGame().getInputManager().getMouseY())[0]},o.getMouseY=function(e,t,r){return e.getLayer(t).convertCoords(e.getGame().getInputManager().getMouseX(),e.getGame().getInputManager().getMouseY())[1]},o._cursorIsOnObject=function(e,t){return e.cursorOnObject(t)},o.cursorOnObject=function(e,t,r,u){return a.evtTools.object.pickObjectsIf(a.evtTools.input._cursorIsOnObject,e,u,t)},o.getTouchX=function(e,t,r,u){return e.getLayer(r).convertCoords(e.getGame().getInputManager().getTouchX(t),e.getGame().getInputManager().getTouchY(t))[0]},o.getTouchY=function(e,t,r,u){return e.getLayer(r).convertCoords(e.getGame().getInputManager().getTouchX(t),e.getGame().getInputManager().getTouchY(t))[1]},o.getLastTouchId=function(){return a.evtTools.input.lastTouchId||0},o.getLastEndedTouchId=function(){return a.evtTools.input.lastEndedTouchId||0},o.popStartedTouch=function(e){const t=e.getGame().getInputManager().popStartedTouch();return t!==void 0?(a.evtTools.input.lastTouchId=t,!0):!1},o.popEndedTouch=function(e){const t=e.getGame().getInputManager().popEndedTouch();return t!==void 0?(a.evtTools.input.lastEndedTouchId=t,!0):!1},o.touchSimulateMouse=function(e,t){e.getGame().getInputManager().touchSimulateMouse(t)}})(d=g.input||(g.input={}))})(c=a.evtTools||(a.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=inputtools.js.map
