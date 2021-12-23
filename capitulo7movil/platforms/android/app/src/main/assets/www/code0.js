gdjs.PlatformPainterCode = {};
gdjs.PlatformPainterCode.GDPlatformFieldObjects1= [];
gdjs.PlatformPainterCode.GDPlatformFieldObjects2= [];
gdjs.PlatformPainterCode.GDPlatformFieldObjects3= [];
gdjs.PlatformPainterCode.GDWoodBackgroundObjects1= [];
gdjs.PlatformPainterCode.GDWoodBackgroundObjects2= [];
gdjs.PlatformPainterCode.GDWoodBackgroundObjects3= [];
gdjs.PlatformPainterCode.GDTargetObjects1= [];
gdjs.PlatformPainterCode.GDTargetObjects2= [];
gdjs.PlatformPainterCode.GDTargetObjects3= [];
gdjs.PlatformPainterCode.GDPlayerObjects1= [];
gdjs.PlatformPainterCode.GDPlayerObjects2= [];
gdjs.PlatformPainterCode.GDPlayerObjects3= [];
gdjs.PlatformPainterCode.GDDirectionsObjects1= [];
gdjs.PlatformPainterCode.GDDirectionsObjects2= [];
gdjs.PlatformPainterCode.GDDirectionsObjects3= [];
gdjs.PlatformPainterCode.GDSummerBackgroundObjects1= [];
gdjs.PlatformPainterCode.GDSummerBackgroundObjects2= [];
gdjs.PlatformPainterCode.GDSummerBackgroundObjects3= [];
gdjs.PlatformPainterCode.GDBorderObjects1= [];
gdjs.PlatformPainterCode.GDBorderObjects2= [];
gdjs.PlatformPainterCode.GDBorderObjects3= [];

gdjs.PlatformPainterCode.conditionTrue_0 = {val:false};
gdjs.PlatformPainterCode.condition0IsTrue_0 = {val:false};
gdjs.PlatformPainterCode.condition1IsTrue_0 = {val:false};
gdjs.PlatformPainterCode.condition2IsTrue_0 = {val:false};
gdjs.PlatformPainterCode.conditionTrue_1 = {val:false};
gdjs.PlatformPainterCode.condition0IsTrue_1 = {val:false};
gdjs.PlatformPainterCode.condition1IsTrue_1 = {val:false};
gdjs.PlatformPainterCode.condition2IsTrue_1 = {val:false};


gdjs.PlatformPainterCode.mapOfGDgdjs_46PlatformPainterCode_46GDWoodBackgroundObjects1Objects = Hashtable.newFrom({"WoodBackground": gdjs.PlatformPainterCode.GDWoodBackgroundObjects1});gdjs.PlatformPainterCode.mapOfGDgdjs_46PlatformPainterCode_46GDPlatformFieldObjects1Objects = Hashtable.newFrom({"PlatformField": gdjs.PlatformPainterCode.GDPlatformFieldObjects1});gdjs.PlatformPainterCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.PlatformPainterCode.GDTargetObjects2);
{for(var i = 0, len = gdjs.PlatformPainterCode.GDTargetObjects2.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDTargetObjects2[i].drawCircle(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.PlatformPainterCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformPainterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if (gdjs.PlatformPainterCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(Math.max(32, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) - 16));
}}

}


{


gdjs.PlatformPainterCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformPainterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if (gdjs.PlatformPainterCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(Math.min(128, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + 16));
}}

}


{



}


{


gdjs.PlatformPainterCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformPainterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.PlatformPainterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlatformField"), gdjs.PlatformPainterCode.GDPlatformFieldObjects2);
{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlatformFieldObjects2.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlatformFieldObjects2[i].getBehavior("MarchingSquaresBehavior").AddDisk(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 2, "Maximum", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlatformFieldObjects2.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlatformFieldObjects2[i].clear();
}
}{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlatformFieldObjects2.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlatformFieldObjects2[i].getBehavior("MarchingSquaresBehavior").DrawField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlatformFieldObjects2.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlatformFieldObjects2[i].getBehavior("MarchingSquaresBehavior").UpdateHitboxes((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


gdjs.PlatformPainterCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformPainterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if (gdjs.PlatformPainterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlatformField"), gdjs.PlatformPainterCode.GDPlatformFieldObjects1);
{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlatformFieldObjects1.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlatformFieldObjects1[i].getBehavior("MarchingSquaresBehavior").MaskDisk(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlatformFieldObjects1.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlatformFieldObjects1[i].clear();
}
}{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlatformFieldObjects1.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlatformFieldObjects1[i].getBehavior("MarchingSquaresBehavior").DrawField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlatformFieldObjects1.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlatformFieldObjects1[i].getBehavior("MarchingSquaresBehavior").UpdateHitboxes((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.PlatformPainterCode.eventsList1 = function(runtimeScene) {

{


gdjs.PlatformPainterCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformPainterCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("debug"), true);
}if (gdjs.PlatformPainterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.debuggerTools.enableDebugDraw(runtimeScene, true, true, false, false);
}}

}


{


gdjs.PlatformPainterCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformPainterCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("debug"), false);
}if (gdjs.PlatformPainterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.debuggerTools.enableDebugDraw(runtimeScene, false, true, false, false);
}}

}


};gdjs.PlatformPainterCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.PlatformPainterCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformPainterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlatformPainterCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlatformField"), gdjs.PlatformPainterCode.GDPlatformFieldObjects1);
gdjs.copyArray(runtimeScene.getObjects("WoodBackground"), gdjs.PlatformPainterCode.GDWoodBackgroundObjects1);
{gdjs.evtsExt__SpriteMasking__MaskWithShapePainter.func(runtimeScene, gdjs.PlatformPainterCode.mapOfGDgdjs_46PlatformPainterCode_46GDWoodBackgroundObjects1Objects, gdjs.PlatformPainterCode.mapOfGDgdjs_46PlatformPainterCode_46GDPlatformFieldObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlatformFieldObjects1.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlatformFieldObjects1[i].getBehavior("MarchingSquaresBehavior").AddLine(200, 300, 600, 300, 32, 2, "Maximum", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlatformFieldObjects1.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlatformFieldObjects1[i].getBehavior("MarchingSquaresBehavior").DrawField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlatformFieldObjects1.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlatformFieldObjects1[i].getBehavior("MarchingSquaresBehavior").UpdateHitboxes((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.PlatformPainterCode.eventsList0(runtimeScene);
}


{


gdjs.PlatformPainterCode.condition0IsTrue_0.val = false;
gdjs.PlatformPainterCode.condition1IsTrue_0.val = false;
{
gdjs.PlatformPainterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.PlatformPainterCode.condition0IsTrue_0.val ) {
{
{gdjs.PlatformPainterCode.conditionTrue_1 = gdjs.PlatformPainterCode.condition1IsTrue_0;
gdjs.PlatformPainterCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8243652);
}
}}
if (gdjs.PlatformPainterCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlatformPainterCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.PlatformPainterCode.condition0IsTrue_0.val = false;
gdjs.PlatformPainterCode.condition1IsTrue_0.val = false;
{
gdjs.PlatformPainterCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.PlatformPainterCode.condition0IsTrue_0.val ) {
{
{gdjs.PlatformPainterCode.conditionTrue_1 = gdjs.PlatformPainterCode.condition1IsTrue_0;
gdjs.PlatformPainterCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8246212);
}
}}
if (gdjs.PlatformPainterCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PlatformPainterCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PlatformPainterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PlatformPainterCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.PlatformPainterCode.condition0IsTrue_0.val = false;
{
gdjs.PlatformPainterCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
}if (gdjs.PlatformPainterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getVariables().get("debug"));
}
{ //Subevents
gdjs.PlatformPainterCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.PlatformPainterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlatformPainterCode.GDPlatformFieldObjects1.length = 0;
gdjs.PlatformPainterCode.GDPlatformFieldObjects2.length = 0;
gdjs.PlatformPainterCode.GDPlatformFieldObjects3.length = 0;
gdjs.PlatformPainterCode.GDWoodBackgroundObjects1.length = 0;
gdjs.PlatformPainterCode.GDWoodBackgroundObjects2.length = 0;
gdjs.PlatformPainterCode.GDWoodBackgroundObjects3.length = 0;
gdjs.PlatformPainterCode.GDTargetObjects1.length = 0;
gdjs.PlatformPainterCode.GDTargetObjects2.length = 0;
gdjs.PlatformPainterCode.GDTargetObjects3.length = 0;
gdjs.PlatformPainterCode.GDPlayerObjects1.length = 0;
gdjs.PlatformPainterCode.GDPlayerObjects2.length = 0;
gdjs.PlatformPainterCode.GDPlayerObjects3.length = 0;
gdjs.PlatformPainterCode.GDDirectionsObjects1.length = 0;
gdjs.PlatformPainterCode.GDDirectionsObjects2.length = 0;
gdjs.PlatformPainterCode.GDDirectionsObjects3.length = 0;
gdjs.PlatformPainterCode.GDSummerBackgroundObjects1.length = 0;
gdjs.PlatformPainterCode.GDSummerBackgroundObjects2.length = 0;
gdjs.PlatformPainterCode.GDSummerBackgroundObjects3.length = 0;
gdjs.PlatformPainterCode.GDBorderObjects1.length = 0;
gdjs.PlatformPainterCode.GDBorderObjects2.length = 0;
gdjs.PlatformPainterCode.GDBorderObjects3.length = 0;

gdjs.PlatformPainterCode.eventsList2(runtimeScene);
return;

}

gdjs['PlatformPainterCode'] = gdjs.PlatformPainterCode;
