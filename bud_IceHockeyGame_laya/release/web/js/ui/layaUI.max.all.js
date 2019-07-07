var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var endDialogUI=(function(_super){
		function endDialogUI(){
			
		    this.againBtn=null;
		    this.rankBtn=null;
		    this.scoreD=null;
		    this.score=null;

			endDialogUI.__super.call(this);
		}

		CLASS$(endDialogUI,'ui.endDialogUI',_super);
		var __proto__=endDialogUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(endDialogUI.uiView);

		}

		endDialogUI.uiView={"type":"Dialog","props":{"width":673,"height":1076},"child":[{"type":"Image","props":{"y":0,"x":3,"skin":"endDialog/bg.png"}},{"type":"Sprite","props":{"y":887,"x":131,"width":425,"var":"againBtn","height":120}},{"type":"Sprite","props":{"y":724,"x":132,"width":423,"var":"rankBtn","height":122}},{"type":"Text","props":{"y":542,"x":-5,"width":673,"var":"scoreD","text":"0","strokeColor":"#ff0000","stroke":2,"skewX":-6,"height":120,"fontSize":120,"font":"Microsoft YaHei","color":"#000000","bold":true,"align":"center"}},{"type":"Text","props":{"y":545,"x":0,"width":673,"var":"score","text":"0","skewX":-6,"height":120,"fontSize":120,"font":"Microsoft YaHei","color":"#ff0000","bold":true,"align":"center"}}]};
		return endDialogUI;
	})(Dialog);
var gameBoxUI=(function(_super){
		function gameBoxUI(){
			
		    this.ice=null;
		    this.cont=null;
		    this.arL=null;
		    this.arR=null;
		    this.ball=null;
		    this.bar=null;
		    this.blocks=null;

			gameBoxUI.__super.call(this);
		}

		CLASS$(gameBoxUI,'ui.gameBoxUI',_super);
		var __proto__=gameBoxUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gameBoxUI.uiView);

		}

		gameBoxUI.uiView={"type":"View","props":{"width":750,"height":1634},"child":[{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"cont","height":990},"child":[{"type":"Image","props":{"y":-80,"x":0,"skin":"gameBox/q.png","alpha":0.58},"compId":9},{"type":"Image","props":{"y":172,"x":216,"skin":"gameBox/k.png"}},{"type":"Image","props":{"y":860,"x":30,"var":"arL","skin":"gameBox/arL.png"}},{"type":"Image","props":{"y":860,"x":720,"width":69,"var":"arR","skin":"gameBox/arR.png","pivotX":69,"height":59}},{"type":"Image","props":{"y":870,"x":260,"width":32,"var":"ball","skin":"gameBox/ball.png","pivotY":16,"pivotX":16,"height":32}},{"type":"Sprite","props":{"y":960,"x":375,"width":324,"var":"bar","pivotY":7,"pivotX":162,"height":14},"child":[{"type":"Image","props":{"y":7,"x":162,"skin":"gameBox/c.png","pivotY":21,"pivotX":175}}]},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"blocks","height":990},"child":[{"type":"Sprite","props":{"y":40,"x":185,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":40,"x":260,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":40,"x":335,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":40,"x":410,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":40,"x":485,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":40,"x":560,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":111,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":111,"x":259,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":111,"x":334,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":111,"x":409,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":111,"x":484,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":111,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":366,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":366,"x":259,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":366,"x":334,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":366,"x":409,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":366,"x":484,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":366,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":446,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":446,"x":259,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":446,"x":334,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":446,"x":409,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":446,"x":484,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":446,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":526,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":524,"x":372,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":526,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":606,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":604,"x":372,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":606,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":686,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":684,"x":372,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":686,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":766,"x":184,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":766,"x":259,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":766,"x":334,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":766,"x":409,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":766,"x":484,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":766,"x":559,"width":58,"pivotY":26,"pivotX":29,"name":"block","height":52},"child":[{"type":"Image","props":{"skin":"gameBox/b.png"}}]},{"type":"Sprite","props":{"y":609,"x":277,"width":58,"pivotY":115,"pivotX":29,"name":"beer","height":230},"child":[{"type":"Image","props":{"y":0,"x":0,"width":58,"skin":"gameBox/beer.png","height":231}}]},{"type":"Sprite","props":{"y":609,"x":465,"width":58,"pivotY":115,"pivotX":29,"name":"beer","height":230},"child":[{"type":"Image","props":{"y":0,"x":0,"width":58,"skin":"gameBox/beer.png","height":231}}]},{"type":"Sprite","props":{"y":263,"x":395,"width":110,"rotation":11,"pivotY":1,"pivotX":55,"name":"logo","height":2}},{"type":"Sprite","props":{"y":261,"x":286,"width":110,"rotation":-9,"pivotY":1,"pivotX":55,"name":"logo","height":2}},{"type":"Sprite","props":{"y":203,"x":321,"width":76,"rotation":21,"pivotY":1,"pivotX":38,"name":"logo","height":2}},{"type":"Sprite","props":{"y":202,"x":432,"width":150,"rotation":-11,"pivotY":1,"pivotX":75,"name":"logo","height":2}},{"type":"Sprite","props":{"y":231,"x":477,"width":100,"rotation":-57,"pivotY":1,"pivotX":50,"name":"logo","height":2}},{"type":"Sprite","props":{"y":229,"x":259,"width":90,"rotation":-57,"pivotY":1,"pivotX":45,"name":"logo","height":2}},{"type":"Sprite","props":{"y":1,"x":375,"width":750,"pivotY":1,"pivotX":375,"name":"side","height":2}},{"type":"Sprite","props":{"y":250,"x":0,"width":2,"pivotY":700,"pivotX":1,"name":"side","height":1400}},{"type":"Sprite","props":{"y":250,"x":748,"width":2,"pivotY":700,"pivotX":1,"name":"side","height":1400}}]}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"alpha":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":20},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":40}]}}],"name":"ice","id":1,"frameRate":24,"action":0}]};
		return gameBoxUI;
	})(View);
var indexBoxUI=(function(_super){
		function indexBoxUI(){
			
		    this.ice=null;
		    this.cont=null;
		    this.beginBtn=null;
		    this.rankBtn=null;

			indexBoxUI.__super.call(this);
		}

		CLASS$(indexBoxUI,'ui.indexBoxUI',_super);
		var __proto__=indexBoxUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(indexBoxUI.uiView);

		}

		indexBoxUI.uiView={"type":"View","props":{"width":750,"height":1634},"child":[{"type":"Image","props":{"y":33,"x":240,"skin":"public/logo.png","name":"logo"}},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":800},"child":[{"type":"Image","props":{"y":137,"x":375,"skin":"indexBox/t1.png","scaleY":1.085,"scaleX":1.085,"pivotY":287,"pivotX":373,"alpha":0.85},"compId":4},{"type":"Image","props":{"y":-150,"x":2,"skin":"indexBox/t2.png"}},{"type":"Image","props":{"y":-150,"x":2,"skin":"indexBox/t3.png","alpha":0.85},"compId":6},{"type":"Image","props":{"y":510,"x":159,"var":"beginBtn","skin":"indexBox/b1.png"}},{"type":"Image","props":{"y":670,"x":159,"var":"rankBtn","skin":"indexBox/b2.png"}}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":40}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":40}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":40}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":40}]}}],"name":"ice","id":1,"frameRate":24,"action":0}]};
		return indexBoxUI;
	})(View);
var loadBoxUI=(function(_super){
		function loadBoxUI(){
			
		    this.loadW=null;
		    this.ice=null;
		    this.cont=null;
		    this.pos=null;
		    this.bar=null;
		    this.light=null;
		    this.t1=null;
		    this.t2=null;
		    this.t3=null;

			loadBoxUI.__super.call(this);
		}

		CLASS$(loadBoxUI,'ui.loadBoxUI',_super);
		var __proto__=loadBoxUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loadBoxUI.uiView);

		}

		loadBoxUI.uiView={"type":"View","props":{"width":750,"height":1634},"child":[{"type":"Image","props":{"y":33,"x":240,"skin":"public/logo.png","name":"logo"}},{"type":"Box","props":{"y":200,"x":0,"width":750,"var":"cont","height":930},"child":[{"type":"Image","props":{"y":652,"x":54,"var":"pos","skin":"loadBox/b.png"}},{"type":"Image","props":{"y":800,"x":70,"width":0,"var":"bar","skin":"loadBox/b1.png"}},{"type":"Image","props":{"y":800,"x":70,"var":"light","skin":"loadBox/b2.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"t1","skin":"loadBox/t3.png","alpha":0},"compId":8},{"type":"Image","props":{"var":"t2","skin":"loadBox/t2.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"t3","skin":"loadBox/t1.png","alpha":0},"compId":6},{"type":"Image","props":{"y":840,"x":275,"skin":"loadBox/w.png","name":"word"},"compId":9}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"alpha":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":10},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":20}]}}],"name":"loadW","id":1,"frameRate":24,"action":0},{"nodes":[{"target":8,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":40}]}},{"target":6,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":40}]}}],"name":"ice","id":2,"frameRate":24,"action":0}]};
		return loadBoxUI;
	})(View);