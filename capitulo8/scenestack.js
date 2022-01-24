var gdjs;(function(s){const r=new s.Logger("Scene stack");class a{constructor(e){this._stack=[];this._wasFirstSceneLoaded=!1;if(!e)throw"SceneStack must be constructed with a gdjs.RuntimeGame.";this._runtimeGame=e}onGameResolutionResized(){for(let e=0;e<this._stack.length;++e)this._stack[e].onGameResolutionResized()}step(e){if(this._stack.length===0)return!1;const n=this._stack[this._stack.length-1];if(n.renderAndStep(e)){const t=n.getRequestedChange();if(t===s.SceneChangeRequest.STOP_GAME)return this._runtimeGame.getRenderer().stopGame(),!0;if(t===s.SceneChangeRequest.POP_SCENE)this.pop();else if(t===s.SceneChangeRequest.PUSH_SCENE)this.push(n.getRequestedScene());else if(t===s.SceneChangeRequest.REPLACE_SCENE)this.replace(n.getRequestedScene());else if(t===s.SceneChangeRequest.CLEAR_SCENES)this.replace(n.getRequestedScene(),!0);else return r.error("Unrecognized change in scene stack: "+t),!1}return!0}renderWithoutStep(){return this._stack.length===0?!1:(this._stack[this._stack.length-1].render(),!0)}pop(){if(this._stack.length<=1)return null;const e=this._stack.pop();if(!e)return null;e.unloadScene();const n=this._stack[this._stack.length-1];return n&&n.onResume(),e}push(e,n){const t=this._stack[this._stack.length-1];t&&t.onPause();const c=new s.RuntimeScene(this._runtimeGame);if(c.loadFromScene(this._runtimeGame.getSceneData(e)),this._wasFirstSceneLoaded=!0,n){const i=this._runtimeGame.getExternalLayoutData(n);i&&c.createObjectsFrom(i.instances,0,0,!0)}return this._stack.push(c),c}replace(e,n){if(n)for(;this._stack.length!==0;){let t=this._stack.pop();t&&t.unloadScene()}else if(this._stack.length!==0){let t=this._stack.pop();t&&t.unloadScene()}return this.push(e)}getCurrentScene(){return this._stack.length===0?null:this._stack[this._stack.length-1]}wasFirstSceneLoaded(){return this._wasFirstSceneLoaded}}s.SceneStack=a})(gdjs||(gdjs={}));
//# sourceMappingURL=scenestack.js.map
