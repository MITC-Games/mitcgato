var gdjs;(function(s){const t=GlobalPIXIModule.PIXI;class o{constructor(e,i){this._renderTexture=null;this._lightingSprite=null;this._oldWidth=null;this._oldHeight=null;this._pixiContainer=new t.Container,this._layer=e,this._runtimeSceneRenderer=i,this._pixiRenderer=i.getPIXIRenderer(),this._isLightingLayer=e.isLightingLayer(),this._clearColor=e.getClearColor(),i.getPIXIContainer().addChild(this._pixiContainer),this._pixiContainer.filters=[],this._isLightingLayer&&this._replaceContainerWithSprite()}getRendererObject(){return this._pixiContainer}getLightingSprite(){return this._lightingSprite}updatePosition(){const e=-s.toRad(this._layer.getCameraRotation()),i=this._layer.getCameraZoom();this._pixiContainer.rotation=e,this._pixiContainer.scale.x=i,this._pixiContainer.scale.y=i;const r=Math.cos(e),n=Math.sin(e),h=this._layer.getCameraX()*i*r-this._layer.getCameraY()*i*n,d=this._layer.getCameraX()*i*n+this._layer.getCameraY()*i*r;this._pixiContainer.position.x=-h,this._pixiContainer.position.y=-d,this._pixiContainer.position.x+=this._layer.getWidth()/2,this._pixiContainer.position.y+=this._layer.getHeight()/2}updateVisibility(e){this._pixiContainer.visible=!!e}updatePreRender(){this._renderTexture&&this._updateRenderTexture()}addRendererObject(e,i){e.zOrder=i;for(let r=0,n=this._pixiContainer.children.length;r<n;++r)if(this._pixiContainer.children[r].zOrder>=i){this._pixiContainer.addChildAt(e,r);return}this._pixiContainer.addChild(e)}changeRendererObjectZOrder(e,i){this._pixiContainer.removeChild(e),this.addRendererObject(e,i)}removeRendererObject(e){this._pixiContainer.removeChild(e)}updateClearColor(){this._clearColor=this._layer.getClearColor(),this._updateRenderTexture()}_updateRenderTexture(){if(!this._pixiRenderer||this._pixiRenderer.type!==t.RENDERER_TYPE.WEBGL)return;if(!this._renderTexture){this._oldWidth=this._pixiRenderer.screen.width,this._oldHeight=this._pixiRenderer.screen.height;const r=this._oldWidth,n=this._oldHeight,h=this._pixiRenderer.resolution;this._renderTexture=t.RenderTexture.create({width:r,height:n,resolution:h}),this._renderTexture.baseTexture.scaleMode=t.SCALE_MODES.LINEAR}(this._oldWidth!==this._pixiRenderer.screen.width||this._oldHeight!==this._pixiRenderer.screen.height)&&(this._renderTexture.resize(this._pixiRenderer.screen.width,this._pixiRenderer.screen.height),this._oldWidth=this._pixiRenderer.screen.width,this._oldHeight=this._pixiRenderer.screen.height);const e=this._pixiRenderer.renderTexture.current,i=this._pixiRenderer.renderTexture.sourceFrame;this._pixiRenderer.renderTexture.bind(this._renderTexture),this._pixiRenderer.renderTexture.clear(this._clearColor),this._pixiRenderer.render(this._pixiContainer,this._renderTexture,!1),this._pixiRenderer.renderTexture.bind(e,i,void 0)}_replaceContainerWithSprite(){if(!this._pixiRenderer||this._pixiRenderer.type!==t.RENDERER_TYPE.WEBGL||(this._updateRenderTexture(),!this._renderTexture))return;this._lightingSprite=new t.Sprite(this._renderTexture),this._lightingSprite.blendMode=t.BLEND_MODES.MULTIPLY;const e=this._runtimeSceneRenderer.getPIXIContainer(),i=e.getChildIndex(this._pixiContainer);e.addChildAt(this._lightingSprite,i),e.removeChild(this._pixiContainer)}}s.LayerPixiRenderer=o,s.LayerRenderer=s.LayerPixiRenderer})(gdjs||(gdjs={}));
//# sourceMappingURL=layer-pixi-renderer.js.map
