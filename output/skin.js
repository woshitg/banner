// Garden Gnome Software - Skin
// Pano2VR pro 4.5.3/10717
// Filename: lala.ggsk
// Generated 周三 3月 29 17:13:37 2017

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this.__=document.createElement('div');
		this.__.ggId="\u7f29\u7565\u56fe";
		this.__.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__.ggVisible=true;
		this.__.className='ggskin ggskin_rectangle';
		this.__.ggType='rectangle';
		this.__.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-317 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-215 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -317px;';
		hs+='top:  -215px;';
		hs+='width: 238px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this.__.setAttribute('style',hs);
		this._a2=document.createElement('div');
		this._a2.ggId="a2";
		this._a2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._a2.ggVisible=true;
		this._a2.className='ggskin ggskin_mark';
		this._a2.ggType='mark';
		this._a2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(9 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-112 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  -111px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		this._a2.setAttribute('style',hs);
		this._a2.ggMarkerNodeId='{node2}';
		nodeMarker.push(this._a2);
		this._a2.onclick=function () {
			me.player.openNext('{node2}');
		}
		this._a2.ggActivate=function () {
			if (me.player.transitionsDisabled) {
				me._a2.style[domTransition]='none';
			} else {
				me._a2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._a2.style.opacity='1';
			me._a2.style.visibility=me._a2.ggVisible?'inherit':'hidden';
		}
		this._a2.ggDeactivate=function () {
			if (me.player.transitionsDisabled) {
				me._a2.style[domTransition]='none';
			} else {
				me._a2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._a2.style.opacity='0.5';
			me._a2.style.visibility=me._a2.ggVisible?'inherit':'hidden';
		}
		this._rectangle_2=document.createElement('div');
		this._rectangle_2.ggId="Rectangle 2";
		this._rectangle_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_2.ggVisible=true;
		this._rectangle_2.className='ggskin ggskin_rectangle';
		this._rectangle_2.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -7px;';
		hs+='top:  -9px;';
		hs+='width: 110px;';
		hs+='height: 109px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this._rectangle_2.setAttribute('style',hs);
		this._a2.appendChild(this._rectangle_2);
		this._image_2=document.createElement('div');
		this._image_2.ggId="Image 2";
		this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_2.ggVisible=true;
		this._image_2.className='ggskin ggskin_image';
		this._image_2.ggType='image';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -4px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_2.setAttribute('style',hs);
		this._image_2__img=document.createElement('img');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
		this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_2__img);
		this._image_2.appendChild(this._image_2__img);
		this._image_2.ggActivate=function () {
			if (me.player.transitionsDisabled) {
				me._image_2.style[domTransition]='none';
			} else {
				me._image_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_2.style.opacity='1';
			me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
		}
		this._image_2.ggDeactivate=function () {
			if (me.player.transitionsDisabled) {
				me._image_2.style[domTransition]='none';
			} else {
				me._image_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_2.style.opacity='0.5';
			me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
		}
		this._a2.appendChild(this._image_2);
		this.__.appendChild(this._a2);
		this._a1=document.createElement('div');
		this._a1.ggId="a1";
		this._a1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._a1.ggVisible=true;
		this._a1.className='ggskin ggskin_mark';
		this._a1.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  18px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		this._a1.setAttribute('style',hs);
		this._a1.ggMarkerNodeId='{node1}';
		nodeMarker.push(this._a1);
		this._a1.onclick=function () {
			me.player.openNext('{node1}');
		}
		this._a1.ggActivate=function () {
			if (me.player.transitionsDisabled) {
				me._a1.style[domTransition]='none';
			} else {
				me._a1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._a1.style.opacity='1';
			me._a1.style.visibility=me._a1.ggVisible?'inherit':'hidden';
		}
		this._a1.ggDeactivate=function () {
			if (me.player.transitionsDisabled) {
				me._a1.style[domTransition]='none';
			} else {
				me._a1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._a1.style.opacity='0.5';
			me._a1.style.visibility=me._a1.ggVisible?'inherit':'hidden';
		}
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle';
		this._rectangle_1.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -6px;';
		hs+='top:  -8px;';
		hs+='width: 107px;';
		hs+='height: 109px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this._rectangle_1.setAttribute('style',hs);
		this._a1.appendChild(this._rectangle_1);
		this._image_1=document.createElement('div');
		this._image_1.ggId="Image 1";
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_image';
		this._image_1.ggType='image';
		hs ='position:absolute;';
		hs+='left: -2px;';
		hs+='top:  -2px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_1.setAttribute('style',hs);
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.ggActivate=function () {
			if (me.player.transitionsDisabled) {
				me._image_1.style[domTransition]='none';
			} else {
				me._image_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_1.style.opacity='1';
			me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
		}
		this._image_1.ggDeactivate=function () {
			me._image_1.style[domTransition]='none';
			me._image_1.style.opacity='0.5';
			me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
		}
		this._a1.appendChild(this._image_1);
		this.__.appendChild(this._a1);
		this.divSkin.appendChild(this.__);
		this._button_1=document.createElement('div');
		this._button_1.ggId="Button 1";
		this._button_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1.ggVisible=true;
		this._button_1.className='ggskin ggskin_button';
		this._button_1.ggType='button';
		this._button_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-320 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-80 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -320px;';
		hs+='top:  -80px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_1.setAttribute('style',hs);
		this._button_1__img=document.createElement('img');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img.setAttribute('src',basePath + 'images/button_1.png');
		this._button_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1__img);
		this._button_1.appendChild(this._button_1__img);
		this._button_1.onclick=function () {
			flag=me.__.ggOpacitiyActive;
			if (me.player.transitionsDisabled) {
				me.__.style[domTransition]='none';
			} else {
				me.__.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me.__.style.opacity='1';
				me.__.style.visibility=me.__.ggVisible?'inherit':'hidden';
			} else {
				me.__.style.opacity='0';
				me.__.style.visibility='hidden';
			}
			me.__.ggOpacitiyActive=!flag;
		}
		this.divSkin.appendChild(this._button_1);
		this._a2.ggMarkerNormal=null;
		this._a2.ggMarkerActive=null;
		this._a1.ggMarkerNormal=null;
		this._a1.ggMarkerActive=null;
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
	};
	this.addSkin();
};