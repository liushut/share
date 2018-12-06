var egret = window.egret;window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"Word":"resource/eui_skins/Word.exml","testWord":"resource/eui_skins/testWord.exml","AnswerWord":"resource/eui_skins/AnswerWord.exml","SceneGame":"resource/eui_skins/SceneGame.exml","Bingo":"resource/eui_skins/Bingo.exml","LevelIcon":"resource/eui_skins/LevelIcon.exml","LevelScene":"resource/eui_skins/LevelScene.exml"};generateEUI.paths['resource/eui_skins/AnswerWord.exml'] = window.AnswerWordSkin = (function (_super) {
	__extends(AnswerWordSkin, _super);
	function AnswerWordSkin() {
		_super.call(this);
		this.skinParts = ["label_answer","daanImg"];
		
		this.height = 90;
		this.width = 90;
		this.elementsContent = [this._Image1_i(),this.label_answer_i(),this.daanImg_i()];
	}
	var _proto = AnswerWordSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.source = "daandi_png";
		t.x = 45;
		t.y = 45;
		return t;
	};
	_proto.label_answer_i = function () {
		var t = new eui.Label();
		this.label_answer = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 90;
		t.size = 42;
		t.text = "答";
		t.textAlign = "center";
		t.textColor = 0xfffefd;
		t.verticalAlign = "middle";
		t.width = 90;
		t.x = 45;
		t.y = 45;
		return t;
	};
	_proto.daanImg_i = function () {
		var t = new eui.Image();
		this.daanImg = t;
		t.source = "kongge_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return AnswerWordSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Bingo.exml'] = window.BingoSkin = (function (_super) {
	__extends(BingoSkin, _super);
	var BingoSkin$Skin1 = 	(function (_super) {
		__extends(BingoSkin$Skin1, _super);
		function BingoSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "share_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin1;
	})(eui.Skin);

	var BingoSkin$Skin2 = 	(function (_super) {
		__extends(BingoSkin$Skin2, _super);
		function BingoSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "next_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin2;
	})(eui.Skin);

	var BingoSkin$Skin3 = 	(function (_super) {
		__extends(BingoSkin$Skin3, _super);
		function BingoSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tiaozhan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin3;
	})(eui.Skin);

	var BingoSkin$Skin4 = 	(function (_super) {
		__extends(BingoSkin$Skin4, _super);
		function BingoSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chacha_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin4;
	})(eui.Skin);

	var BingoSkin$Skin5 = 	(function (_super) {
		__extends(BingoSkin$Skin5, _super);
		function BingoSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jixu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin5;
	})(eui.Skin);

	var BingoSkin$Skin6 = 	(function (_super) {
		__extends(BingoSkin$Skin6, _super);
		function BingoSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "chongwan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin6;
	})(eui.Skin);

	var BingoSkin$Skin7 = 	(function (_super) {
		__extends(BingoSkin$Skin7, _super);
		function BingoSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hongbaocha_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin7;
	})(eui.Skin);

	var BingoSkin$Skin8 = 	(function (_super) {
		__extends(BingoSkin$Skin8, _super);
		function BingoSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "qutixian_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin8;
	})(eui.Skin);

	var BingoSkin$Skin9 = 	(function (_super) {
		__extends(BingoSkin$Skin9, _super);
		function BingoSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","yilingqu_png")
					])
			];
		}
		var _proto = BingoSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "lingqu_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin9;
	})(eui.Skin);

	var BingoSkin$Skin10 = 	(function (_super) {
		__extends(BingoSkin$Skin10, _super);
		function BingoSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","hongbaotixian_png")
					])
			];
		}
		var _proto = BingoSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "meitixian_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin10;
	})(eui.Skin);

	var BingoSkin$Skin11 = 	(function (_super) {
		__extends(BingoSkin$Skin11, _super);
		function BingoSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hongbaocha_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin11;
	})(eui.Skin);

	var BingoSkin$Skin12 = 	(function (_super) {
		__extends(BingoSkin$Skin12, _super);
		function BingoSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kai_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin12;
	})(eui.Skin);

	var BingoSkin$Skin13 = 	(function (_super) {
		__extends(BingoSkin$Skin13, _super);
		function BingoSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cunruyue_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin13;
	})(eui.Skin);

	var BingoSkin$Skin14 = 	(function (_super) {
		__extends(BingoSkin$Skin14, _super);
		function BingoSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "x2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin14;
	})(eui.Skin);

	var BingoSkin$Skin15 = 	(function (_super) {
		__extends(BingoSkin$Skin15, _super);
		function BingoSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "x1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin15;
	})(eui.Skin);

	var BingoSkin$Skin16 = 	(function (_super) {
		__extends(BingoSkin$Skin16, _super);
		function BingoSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BingoSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "querentixian_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BingoSkin$Skin16;
	})(eui.Skin);

	function BingoSkin() {
		_super.call(this);
		this.skinParts = ["bg","btn_share","btn_next","ditu","bingoGroup","daandi","labelresult","labelExplain","trueGroup","diImg","tenImg","Btntiaozhan","guanLabel","chachaBtn","comboGroup","imgErrodi","jixuBtn","chongwanBtn","errGroup","hongbaochaBtn","moneyLabel","yueLabel","tixianBtn","lingquBtn","tanchuanImg","hongbaoGroup","btnTixian","tanImg","chaHongbao","showYUELabel","showhongbaoGroup","kaihongbaoBtn","tixianGroup","cunruLabel","cunruBtn","cunruChaBtn","cunruGroup","querenChaBtn","querenLabel","querenTixianBtn","zanqianImg","querentixianGroup","groupAll"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.groupAll_i()];
	}
	var _proto = BingoSkin.prototype;

	_proto.groupAll_i = function () {
		var t = new eui.Group();
		this.groupAll = t;
		t.anchorOffsetX = 360;
		t.anchorOffsetY = 640;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.bg_i(),this.bingoGroup_i(),this.trueGroup_i(),this.comboGroup_i(),this.errGroup_i(),this.hongbaoGroup_i(),this.showhongbaoGroup_i(),this.tixianGroup_i(),this.cunruGroup_i(),this.querentixianGroup_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "levelBg_png";
		t.top = 0;
		t.x = -260;
		t.y = -540;
		return t;
	};
	_proto.bingoGroup_i = function () {
		var t = new eui.Group();
		this.bingoGroup = t;
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = 260;
		t.y = 326;
		t.elementsContent = [this.btn_share_i(),this.btn_next_i(),this.ditu_i(),this._Image1_i()];
		return t;
	};
	_proto.btn_share_i = function () {
		var t = new eui.Button();
		this.btn_share = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 43;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 260;
		t.y = 400;
		t.skinName = BingoSkin$Skin1;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 46;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -60;
		t.y = 400;
		t.skinName = BingoSkin$Skin2;
		return t;
	};
	_proto.ditu_i = function () {
		var t = new eui.Image();
		this.ditu = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "daduidi_png";
		t.verticalCenter = 0;
		t.x = -180;
		t.y = -122.99999999999994;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 53;
		t.horizontalCenter = 0;
		t.source = "daduile_png";
		t.width = 151;
		t.y = 145;
		return t;
	};
	_proto.trueGroup_i = function () {
		var t = new eui.Group();
		this.trueGroup = t;
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = 260;
		t.y = 450;
		t.elementsContent = [this.daandi_i(),this.labelresult_i(),this.labelExplain_i()];
		return t;
	};
	_proto.daandi_i = function () {
		var t = new eui.Image();
		this.daandi = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tanchuandaandi_png";
		t.y = -45;
		return t;
	};
	_proto.labelresult_i = function () {
		var t = new eui.Label();
		this.labelresult = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 211.21;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 55;
		t.text = "小蚊子";
		t.textAlign = "center";
		t.textColor = 0x584e4e;
		t.verticalAlign = "middle";
		t.width = 460;
		t.y = -24;
		return t;
	};
	_proto.labelExplain_i = function () {
		var t = new eui.Label();
		this.labelExplain = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 125.33;
		t.size = 30;
		t.text = "解释解释解释解释解释解释解释解释解释解释解释解释解释解释";
		t.textColor = 0x584e4e;
		t.verticalAlign = "top";
		t.width = 350;
		t.x = -72;
		t.y = 119;
		return t;
	};
	_proto.comboGroup_i = function () {
		var t = new eui.Group();
		this.comboGroup = t;
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = 260;
		t.y = 360;
		t.elementsContent = [this.diImg_i(),this.tenImg_i(),this.Btntiaozhan_i(),this.guanLabel_i(),this.chachaBtn_i()];
		return t;
	};
	_proto.diImg_i = function () {
		var t = new eui.Image();
		this.diImg = t;
		t.horizontalCenter = 0;
		t.source = "daduidi_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tenImg_i = function () {
		var t = new eui.Image();
		this.tenImg = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "ten_png";
		t.y = 127;
		return t;
	};
	_proto.Btntiaozhan_i = function () {
		var t = new eui.Button();
		this.Btntiaozhan = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -15;
		t.y = 358;
		t.skinName = BingoSkin$Skin3;
		return t;
	};
	_proto.guanLabel_i = function () {
		var t = new eui.Label();
		this.guanLabel = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 55;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 35;
		t.text = "当前解锁第111关";
		t.textAlign = "center";
		t.textColor = 0x0a0909;
		t.verticalAlign = "middle";
		t.width = 300;
		t.y = 221;
		return t;
	};
	_proto.chachaBtn_i = function () {
		var t = new eui.Button();
		this.chachaBtn = t;
		t.height = 32;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 32;
		t.x = 355;
		t.y = -66;
		t.skinName = BingoSkin$Skin4;
		return t;
	};
	_proto.errGroup_i = function () {
		var t = new eui.Group();
		this.errGroup = t;
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = 260;
		t.y = 315;
		t.elementsContent = [this.imgErrodi_i(),this.jixuBtn_i(),this.chongwanBtn_i()];
		return t;
	};
	_proto.imgErrodi_i = function () {
		var t = new eui.Image();
		this.imgErrodi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cuoledi_png";
		t.x = -180;
		t.y = -138;
		return t;
	};
	_proto.jixuBtn_i = function () {
		var t = new eui.Button();
		this.jixuBtn = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 148;
		t.y = 358;
		t.skinName = BingoSkin$Skin5;
		return t;
	};
	_proto.chongwanBtn_i = function () {
		var t = new eui.Button();
		this.chongwanBtn = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -167;
		t.y = 358;
		t.skinName = BingoSkin$Skin6;
		return t;
	};
	_proto.hongbaoGroup_i = function () {
		var t = new eui.Group();
		this.hongbaoGroup = t;
		t.visible = false;
		t.x = 68;
		t.y = 111;
		t.elementsContent = [this._Image2_i(),this.hongbaochaBtn_i(),this.moneyLabel_i(),this._Image3_i(),this._Label1_i(),this.yueLabel_i(),this._Image4_i(),this.tixianBtn_i(),this.lingquBtn_i(),this.tanchuanImg_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "hongbaodi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hongbaochaBtn_i = function () {
		var t = new eui.Button();
		this.hongbaochaBtn = t;
		t.label = "";
		t.x = 491.5;
		t.y = 11;
		t.skinName = BingoSkin$Skin7;
		return t;
	};
	_proto.moneyLabel_i = function () {
		var t = new eui.Label();
		this.moneyLabel = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 50;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xffe295;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 242;
		t.y = 192;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "yuan_png";
		t.x = 327;
		t.y = 194;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 45;
		t.text = "余额:";
		t.textAlign = "center";
		t.textColor = 0xffe295;
		t.verticalAlign = "middle";
		t.x = 148;
		t.y = 328;
		return t;
	};
	_proto.yueLabel_i = function () {
		var t = new eui.Label();
		this.yueLabel = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 44;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xffe295;
		t.verticalAlign = "middle";
		t.width = 70;
		t.x = 268;
		t.y = 328;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "yuan_png";
		t.x = 344;
		t.y = 330;
		return t;
	};
	_proto.tixianBtn_i = function () {
		var t = new eui.Button();
		this.tixianBtn = t;
		t.label = "";
		t.x = 349;
		t.y = 427;
		t.skinName = BingoSkin$Skin8;
		return t;
	};
	_proto.lingquBtn_i = function () {
		var t = new eui.Button();
		this.lingquBtn = t;
		t.label = "";
		t.x = 161;
		t.y = 510;
		t.skinName = BingoSkin$Skin9;
		return t;
	};
	_proto.tanchuanImg_i = function () {
		var t = new eui.Image();
		this.tanchuanImg = t;
		t.source = "tanchuang_png";
		t.visible = false;
		t.x = 0;
		t.y = 356;
		return t;
	};
	_proto.showhongbaoGroup_i = function () {
		var t = new eui.Group();
		this.showhongbaoGroup = t;
		t.height = 200;
		t.visible = false;
		t.width = 200;
		t.x = 260;
		t.y = 540;
		t.elementsContent = [this._Image5_i(),this.btnTixian_i(),this.tanImg_i(),this.chaHongbao_i(),this._Image6_i(),this.showYUELabel_i(),this._Image7_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "hongbaodi1_png";
		t.x = -197;
		t.y = -437;
		return t;
	};
	_proto.btnTixian_i = function () {
		var t = new eui.Button();
		this.btnTixian = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -23.99999999999997;
		t.y = 77;
		t.skinName = BingoSkin$Skin10;
		return t;
	};
	_proto.tanImg_i = function () {
		var t = new eui.Image();
		this.tanImg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tanchuang_png";
		t.visible = false;
		t.x = -217;
		t.y = -107;
		return t;
	};
	_proto.chaHongbao_i = function () {
		var t = new eui.Button();
		this.chaHongbao = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 301;
		t.y = -431.5;
		t.skinName = BingoSkin$Skin11;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hongbaoyue_png";
		t.x = -40;
		t.y = -208;
		return t;
	};
	_proto.showYUELabel_i = function () {
		var t = new eui.Label();
		this.showYUELabel = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0xffe295;
		t.verticalAlign = "middle";
		t.width = 78;
		t.x = 96;
		t.y = -209;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yuan_png";
		t.x = 186;
		t.y = -202;
		return t;
	};
	_proto.tixianGroup_i = function () {
		var t = new eui.Group();
		this.tixianGroup = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 200;
		t.y = 295;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this.kaihongbaoBtn_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tixianhongbaodi_png";
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xiehouyu_png";
		t.width = 150;
		t.y = 42;
		return t;
	};
	_proto.kaihongbaoBtn_i = function () {
		var t = new eui.Button();
		this.kaihongbaoBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 5;
		t.y = 422;
		t.skinName = BingoSkin$Skin12;
		return t;
	};
	_proto.cunruGroup_i = function () {
		var t = new eui.Group();
		this.cunruGroup = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 200;
		t.y = 540;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Label2_i(),this.cunruLabel_i(),this._Label3_i(),this._Image12_i(),this.cunruBtn_i(),this.cunruChaBtn_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "tixianhongbao2_png";
		t.x = -180;
		t.y = -324;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.source = "xiehouyu_png";
		t.width = 150;
		t.x = 25;
		t.y = -264;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 37;
		t.text = "歇后语正版的红包";
		t.textColor = 0x070000;
		t.x = -51;
		t.y = -87;
		return t;
	};
	_proto.cunruLabel_i = function () {
		var t = new eui.Label();
		this.cunruLabel = t;
		t.size = 68;
		t.text = "0.61";
		t.textColor = 0x070707;
		t.x = 8;
		t.y = 49;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 51;
		t.text = "元";
		t.textColor = 0x0c0000;
		t.x = 152;
		t.y = 59;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "man20_png";
		t.y = 221;
		return t;
	};
	_proto.cunruBtn_i = function () {
		var t = new eui.Button();
		this.cunruBtn = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -118;
		t.y = 296;
		t.skinName = BingoSkin$Skin13;
		return t;
	};
	_proto.cunruChaBtn_i = function () {
		var t = new eui.Button();
		this.cunruChaBtn = t;
		t.label = "";
		t.x = -157.5;
		t.y = -311;
		t.skinName = BingoSkin$Skin14;
		return t;
	};
	_proto.querentixianGroup_i = function () {
		var t = new eui.Group();
		this.querentixianGroup = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 200;
		t.y = 428;
		t.elementsContent = [this._Image13_i(),this.querenChaBtn_i(),this._Image14_i(),this.querenLabel_i(),this.querenTixianBtn_i(),this.zanqianImg_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tixianhongbaotixian_png";
		t.y = -267;
		return t;
	};
	_proto.querenChaBtn_i = function () {
		var t = new eui.Button();
		this.querenChaBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -167;
		t.y = -235;
		t.skinName = BingoSkin$Skin15;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "fuhao_png";
		t.x = 57;
		t.y = 111;
		return t;
	};
	_proto.querenLabel_i = function () {
		var t = new eui.Label();
		this.querenLabel = t;
		t.text = "0";
		t.textColor = 0x050000;
		t.x = 92;
		t.y = 109;
		return t;
	};
	_proto.querenTixianBtn_i = function () {
		var t = new eui.Button();
		this.querenTixianBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -118;
		t.y = 259;
		t.skinName = BingoSkin$Skin16;
		return t;
	};
	_proto.zanqianImg_i = function () {
		var t = new eui.Image();
		this.zanqianImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zanqian_png";
		t.visible = false;
		t.y = 412;
		return t;
	};
	return BingoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LevelIcon.exml'] = window.LevelIconSkin = (function (_super) {
	__extends(LevelIconSkin, _super);
	function LevelIconSkin() {
		_super.call(this);
		this.skinParts = ["imgGuankadi","levelLabel","imgLock"];
		
		this.height = 179;
		this.width = 152;
		this.elementsContent = [this.imgGuankadi_i(),this.levelLabel_i(),this.imgLock_i()];
	}
	var _proto = LevelIconSkin.prototype;

	_proto.imgGuankadi_i = function () {
		var t = new eui.Image();
		this.imgGuankadi = t;
		t.source = "guankadi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.levelLabel_i = function () {
		var t = new eui.Label();
		this.levelLabel = t;
		t.bold = true;
		t.fontFamily = "Arial";
		t.size = 48;
		t.text = "999";
		t.textAlign = "center";
		t.textColor = 0x010000;
		t.verticalAlign = "middle";
		t.x = 56;
		t.y = 71;
		return t;
	};
	_proto.imgLock_i = function () {
		var t = new eui.Image();
		this.imgLock = t;
		t.alpha = 1;
		t.source = "suo_png";
		t.x = 0;
		t.y = 18;
		return t;
	};
	return LevelIconSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LevelScene.exml'] = window.LevelSceneSkin = (function (_super) {
	__extends(LevelSceneSkin, _super);
	var LevelSceneSkin$Skin17 = 	(function (_super) {
		__extends(LevelSceneSkin$Skin17, _super);
		function LevelSceneSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LevelSceneSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiantou_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LevelSceneSkin$Skin17;
	})(eui.Skin);

	var LevelSceneSkin$Skin18 = 	(function (_super) {
		__extends(LevelSceneSkin$Skin18, _super);
		function LevelSceneSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LevelSceneSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiantou_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LevelSceneSkin$Skin18;
	})(eui.Skin);

	var LevelSceneSkin$Skin19 = 	(function (_super) {
		__extends(LevelSceneSkin$Skin19, _super);
		function LevelSceneSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LevelSceneSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cha_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LevelSceneSkin$Skin19;
	})(eui.Skin);

	var LevelSceneSkin$Skin20 = 	(function (_super) {
		__extends(LevelSceneSkin$Skin20, _super);
		function LevelSceneSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","xing2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LevelSceneSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xing1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LevelSceneSkin$Skin20;
	})(eui.Skin);

	var LevelSceneSkin$Skin21 = 	(function (_super) {
		__extends(LevelSceneSkin$Skin21, _super);
		function LevelSceneSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","xing2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LevelSceneSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xing1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LevelSceneSkin$Skin21;
	})(eui.Skin);

	var LevelSceneSkin$Skin22 = 	(function (_super) {
		__extends(LevelSceneSkin$Skin22, _super);
		function LevelSceneSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","xing2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LevelSceneSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "xing1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LevelSceneSkin$Skin22;
	})(eui.Skin);

	function LevelSceneSkin() {
		_super.call(this);
		this.skinParts = ["levelBg","ditu","btn_next","btn_before","closeBtn","ImgName","groupLevel","xingBtn1","xingBtn2","xingBtn3"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = LevelSceneSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 360;
		t.anchorOffsetY = 640;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 360;
		t.anchorOffsetY = 640;
		t.height = 1280;
		t.width = 720;
		t.x = 360;
		t.y = 640;
		t.elementsContent = [this.levelBg_i(),this.ditu_i(),this.btn_next_i(),this.btn_before_i(),this.closeBtn_i(),this.ImgName_i(),this.groupLevel_i(),this._Group1_i()];
		return t;
	};
	_proto.levelBg_i = function () {
		var t = new eui.Image();
		this.levelBg = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 360;
		t.anchorOffsetY = 640;
		t.source = "levelBg_png";
		t.x = 360;
		t.y = 640;
		return t;
	};
	_proto.ditu_i = function () {
		var t = new eui.Image();
		this.ditu = t;
		t.anchorOffsetX = 324;
		t.anchorOffsetY = 423;
		t.source = "ditu_png";
		t.x = 313;
		t.y = 540;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.enabled = true;
		t.label = "";
		t.width = 54;
		t.x = 644;
		t.y = 614;
		t.skinName = LevelSceneSkin$Skin17;
		return t;
	};
	_proto.btn_before_i = function () {
		var t = new eui.Button();
		this.btn_before = t;
		t.alpha = 1;
		t.enabled = true;
		t.height = 77;
		t.label = "";
		t.scaleX = -1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 54;
		t.x = 58;
		t.y = 614;
		t.skinName = LevelSceneSkin$Skin18;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.enabled = true;
		t.label = "";
		t.x = 580;
		t.y = 129;
		t.skinName = LevelSceneSkin$Skin19;
		return t;
	};
	_proto.ImgName_i = function () {
		var t = new eui.Image();
		this.ImgName = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.horizontalCenter = 0;
		t.source = "1_png";
		t.width = 180;
		t.y = 146;
		return t;
	};
	_proto.groupLevel_i = function () {
		var t = new eui.Group();
		this.groupLevel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 578;
		t.width = 580;
		t.x = 80;
		t.y = 352;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._LevelIcon1_i(),this._LevelIcon2_i(),this._LevelIcon3_i(),this._LevelIcon4_i(),this._LevelIcon5_i(),this._LevelIcon6_i(),this._LevelIcon7_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.horizontalGap = 27;
		t.paddingLeft = 0;
		t.verticalGap = 15;
		return t;
	};
	_proto._LevelIcon1_i = function () {
		var t = new LevelIcon();
		t.height = 185;
		t.width = 175;
		t.x = 192;
		t.y = 114;
		return t;
	};
	_proto._LevelIcon2_i = function () {
		var t = new LevelIcon();
		t.height = 185;
		t.width = 175;
		t.x = 202;
		t.y = 124;
		return t;
	};
	_proto._LevelIcon3_i = function () {
		var t = new LevelIcon();
		t.height = 185;
		t.width = 175;
		t.x = 212;
		t.y = 134;
		return t;
	};
	_proto._LevelIcon4_i = function () {
		var t = new LevelIcon();
		t.height = 185;
		t.width = 175;
		t.x = 222;
		t.y = 144;
		return t;
	};
	_proto._LevelIcon5_i = function () {
		var t = new LevelIcon();
		t.height = 185;
		t.width = 175;
		t.x = 232;
		t.y = 154;
		return t;
	};
	_proto._LevelIcon6_i = function () {
		var t = new LevelIcon();
		t.height = 185;
		t.width = 175;
		t.x = 242;
		t.y = 164;
		return t;
	};
	_proto._LevelIcon7_i = function () {
		var t = new LevelIcon();
		t.height = 185;
		t.width = 175;
		t.x = 252;
		t.y = 174;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.x = 269;
		t.y = 251;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.xingBtn1_i(),this.xingBtn2_i(),this.xingBtn3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.xingBtn1_i = function () {
		var t = new eui.Button();
		this.xingBtn1 = t;
		t.label = "";
		t.x = 17;
		t.y = 20;
		t.skinName = LevelSceneSkin$Skin20;
		return t;
	};
	_proto.xingBtn2_i = function () {
		var t = new eui.Button();
		this.xingBtn2 = t;
		t.label = "";
		t.x = 27;
		t.y = 30;
		t.skinName = LevelSceneSkin$Skin21;
		return t;
	};
	_proto.xingBtn3_i = function () {
		var t = new eui.Button();
		this.xingBtn3 = t;
		t.label = "";
		t.x = 37;
		t.y = 40;
		t.skinName = LevelSceneSkin$Skin22;
		return t;
	};
	return LevelSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list.exml'] = window.$exmlClass23 = (function (_super) {
	__extends($exmlClass23, _super);
	function $exmlClass23() {
		_super.call(this);
		this.skinParts = ["testlist"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Scroller1_i()];
	}
	var _proto = $exmlClass23.prototype;

	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 300;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		t.viewport = this.testlist_i();
		return t;
	};
	_proto.testlist_i = function () {
		var t = new eui.List();
		this.testlist = t;
		return t;
	};
	return $exmlClass23;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/profileSkillListIRSkin.exml'] = window.profileSkillListIRSkin = (function (_super) {
	__extends(profileSkillListIRSkin, _super);
	function profileSkillListIRSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 120;
		this.width = 87;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
	}
	var _proto = profileSkillListIRSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 88;
		t.source = "skillItemFrame_png";
		t.width = 87;
		t.x = 1;
		t.y = 5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 71;
		t.width = 65;
		t.x = 11;
		t.y = 14;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "微软雅黑";
		t.height = 38;
		t.size = 18;
		t.stroke = 1;
		t.strokeColor = 0;
		t.textAlign = "center";
		t.textColor = 0xFFAC1C;
		t.verticalAlign = "middle";
		t.width = 76;
		t.x = 5.5;
		t.y = 85;
		return t;
	};
	return profileSkillListIRSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/SceneGame.exml'] = window.SceneGameSkin = (function (_super) {
	__extends(SceneGameSkin, _super);
	var SceneGameSkin$Skin24 = 	(function (_super) {
		__extends(SceneGameSkin$Skin24, _super);
		function SceneGameSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "tixian_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin24;
	})(eui.Skin);

	var SceneGameSkin$Skin25 = 	(function (_super) {
		__extends(SceneGameSkin$Skin25, _super);
		function SceneGameSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "guanka_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin25;
	})(eui.Skin);

	var SceneGameSkin$Skin26 = 	(function (_super) {
		__extends(SceneGameSkin$Skin26, _super);
		function SceneGameSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "daan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin26;
	})(eui.Skin);

	var SceneGameSkin$Skin27 = 	(function (_super) {
		__extends(SceneGameSkin$Skin27, _super);
		function SceneGameSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "paihangbang_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin27;
	})(eui.Skin);

	var SceneGameSkin$Skin28 = 	(function (_super) {
		__extends(SceneGameSkin$Skin28, _super);
		function SceneGameSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hongbaoicon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin28;
	})(eui.Skin);

	var SceneGameSkin$Skin29 = 	(function (_super) {
		__extends(SceneGameSkin$Skin29, _super);
		function SceneGameSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xuanyao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin29;
	})(eui.Skin);

	var SceneGameSkin$Skin30 = 	(function (_super) {
		__extends(SceneGameSkin$Skin30, _super);
		function SceneGameSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "xiaoren_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin30;
	})(eui.Skin);

	var SceneGameSkin$Skin31 = 	(function (_super) {
		__extends(SceneGameSkin$Skin31, _super);
		function SceneGameSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SceneGameSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cha_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SceneGameSkin$Skin31;
	})(eui.Skin);

	function SceneGameSkin() {
		_super.call(this);
		this.skinParts = ["gameBg","labelLevel","zhuhongbaoLabel","zhuTiXianBtn","hongbaoShowGroup","label_Question","group_Help","group_Result","group_Chaotic","caiziBtn","btn_Level","btn_result","btn_paihang","hongbaoBtn","xuanyaoBtn","xiaorenBtn","dianImg","levelScene","bingoLayer","imgDibang","closeBtn","openGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = SceneGameSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1280;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this.gameBg_i(),this.hongbaoShowGroup_i(),this.group_Help_i(),this.group_Result_i(),this.group_Chaotic_i(),this.caiziBtn_i(),this.btn_Level_i(),this.btn_result_i(),this.btn_paihang_i(),this.hongbaoBtn_i(),this.xuanyaoBtn_i(),this.xiaorenBtn_i(),this.dianImg_i(),this.levelScene_i(),this.bingoLayer_i(),this.openGroup_i()];
		return t;
	};
	_proto.gameBg_i = function () {
		var t = new eui.Image();
		this.gameBg = t;
		t.height = 1280;
		t.horizontalCenter = 0;
		t.source = "gameBg_jpg";
		t.width = 720;
		t.y = 0;
		return t;
	};
	_proto.hongbaoShowGroup_i = function () {
		var t = new eui.Group();
		this.hongbaoShowGroup = t;
		t.x = 148;
		t.y = 18;
		t.elementsContent = [this.labelLevel_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.zhuhongbaoLabel_i(),this.zhuTiXianBtn_i()];
		return t;
	};
	_proto.labelLevel_i = function () {
		var t = new eui.Label();
		this.labelLevel = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "999";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = -65;
		t.y = 104.5;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 37;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huisedi_png";
		t.width = 223;
		t.x = -1.5;
		t.y = 35;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "xiaohongbao_png";
		t.x = -5;
		t.y = 28;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.rotation = -90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rmb_png";
		t.x = 44;
		t.y = 71;
		return t;
	};
	_proto.zhuhongbaoLabel_i = function () {
		var t = new eui.Label();
		this.zhuhongbaoLabel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "0.00";
		t.textColor = 0xffffff;
		t.x = 73;
		t.y = 39;
		return t;
	};
	_proto.zhuTiXianBtn_i = function () {
		var t = new eui.Button();
		this.zhuTiXianBtn = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 143;
		t.y = 32;
		t.skinName = SceneGameSkin$Skin24;
		return t;
	};
	_proto.group_Help_i = function () {
		var t = new eui.Group();
		this.group_Help = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.horizontalCenter = 0;
		t.width = 720;
		t.y = 0;
		t.elementsContent = [this.label_Question_i()];
		return t;
	};
	_proto.label_Question_i = function () {
		var t = new eui.Label();
		this.label_Question = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 141.33;
		t.horizontalCenter = 1;
		t.lineSpacing = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 42;
		t.text = "泥菩萨过江，_________泥菩萨过江，_________";
		t.textAlign = "left";
		t.textColor = 0x060407;
		t.verticalAlign = "middle";
		t.width = 488;
		t.x = 117;
		t.y = 252;
		return t;
	};
	_proto.group_Result_i = function () {
		var t = new eui.Group();
		this.group_Result = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.width = 482;
		t.x = 119;
		t.y = 410;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._AnswerWord1_i(),this._AnswerWord2_i(),this._AnswerWord3_i(),this._AnswerWord4_i(),this._AnswerWord5_i(),this._AnswerWord6_i(),this._AnswerWord7_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 34;
		t.verticalGap = 24;
		return t;
	};
	_proto._AnswerWord1_i = function () {
		var t = new AnswerWord();
		t.x = 0;
		t.y = 37;
		return t;
	};
	_proto._AnswerWord2_i = function () {
		var t = new AnswerWord();
		t.x = 40;
		t.y = 77;
		return t;
	};
	_proto._AnswerWord3_i = function () {
		var t = new AnswerWord();
		t.x = 50;
		t.y = 87;
		return t;
	};
	_proto._AnswerWord4_i = function () {
		var t = new AnswerWord();
		t.x = 60;
		t.y = 97;
		return t;
	};
	_proto._AnswerWord5_i = function () {
		var t = new AnswerWord();
		t.x = 70;
		t.y = 107;
		return t;
	};
	_proto._AnswerWord6_i = function () {
		var t = new AnswerWord();
		t.x = 10;
		t.y = 47;
		return t;
	};
	_proto._AnswerWord7_i = function () {
		var t = new AnswerWord();
		t.x = 30;
		t.y = 67;
		return t;
	};
	_proto.group_Chaotic_i = function () {
		var t = new eui.Group();
		this.group_Chaotic = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 256;
		t.horizontalCenter = 0;
		t.width = 555;
		t.y = 794;
		t.layout = this._TileLayout2_i();
		t.elementsContent = [this._Word1_i(),this._Word2_i(),this._Word3_i(),this._Word4_i(),this._Word5_i(),this._Word6_i(),this._Word7_i(),this._Word8_i()];
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 20;
		t.verticalGap = 10;
		return t;
	};
	_proto._Word1_i = function () {
		var t = new Word();
		t.x = 59;
		t.y = 61;
		return t;
	};
	_proto._Word2_i = function () {
		var t = new Word();
		t.x = 69;
		t.y = 71;
		return t;
	};
	_proto._Word3_i = function () {
		var t = new Word();
		t.x = 79;
		t.y = 81;
		return t;
	};
	_proto._Word4_i = function () {
		var t = new Word();
		t.x = 89;
		t.y = 91;
		return t;
	};
	_proto._Word5_i = function () {
		var t = new Word();
		t.x = 99;
		t.y = 101;
		return t;
	};
	_proto._Word6_i = function () {
		var t = new Word();
		t.x = 109;
		t.y = 111;
		return t;
	};
	_proto._Word7_i = function () {
		var t = new Word();
		t.x = 119;
		t.y = 121;
		return t;
	};
	_proto._Word8_i = function () {
		var t = new Word();
		t.x = 129;
		t.y = 131;
		return t;
	};
	_proto.caiziBtn_i = function () {
		var t = new eui.Image();
		this.caiziBtn = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 60;
		t.height = 100;
		t.width = 100;
		t.x = 72;
		t.y = 580;
		return t;
	};
	_proto.btn_Level_i = function () {
		var t = new eui.Button();
		this.btn_Level = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.label = "";
		t.x = 536;
		t.y = 696;
		t.skinName = SceneGameSkin$Skin25;
		return t;
	};
	_proto.btn_result_i = function () {
		var t = new eui.Button();
		this.btn_result = t;
		t.anchorOffsetX = 125;
		t.anchorOffsetY = 38;
		t.enabled = true;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 720;
		t.skinName = SceneGameSkin$Skin26;
		return t;
	};
	_proto.btn_paihang_i = function () {
		var t = new eui.Button();
		this.btn_paihang = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 696;
		t.skinName = SceneGameSkin$Skin27;
		return t;
	};
	_proto.hongbaoBtn_i = function () {
		var t = new eui.Button();
		this.hongbaoBtn = t;
		t.anchorOffsetX = 36;
		t.anchorOffsetY = 40;
		t.label = "";
		t.visible = false;
		t.x = 644;
		t.y = 413.15;
		t.skinName = SceneGameSkin$Skin28;
		return t;
	};
	_proto.xuanyaoBtn_i = function () {
		var t = new eui.Button();
		this.xuanyaoBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = 16;
		t.y = 266.15;
		t.skinName = SceneGameSkin$Skin29;
		return t;
	};
	_proto.xiaorenBtn_i = function () {
		var t = new eui.Button();
		this.xiaorenBtn = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 48;
		t.enabled = true;
		t.label = "";
		t.visible = false;
		t.x = 656;
		t.y = 567;
		t.skinName = SceneGameSkin$Skin30;
		return t;
	};
	_proto.dianImg_i = function () {
		var t = new eui.Image();
		this.dianImg = t;
		t.height = 30;
		t.source = "dian_png";
		t.visible = false;
		t.width = 30;
		t.x = 665;
		t.y = 512;
		return t;
	};
	_proto.levelScene_i = function () {
		var t = new LevelScene();
		this.levelScene = t;
		t.enabled = true;
		t.height = 1280;
		t.visible = false;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bingoLayer_i = function () {
		var t = new Bingo();
		this.bingoLayer = t;
		t.alpha = 1;
		t.enabled = true;
		t.height = 1280;
		t.visible = false;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.openGroup_i = function () {
		var t = new eui.Group();
		this.openGroup = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 200;
		t.elementsContent = [this.imgDibang_i(),this.closeBtn_i()];
		return t;
	};
	_proto.imgDibang_i = function () {
		var t = new eui.Image();
		this.imgDibang = t;
		t.horizontalCenter = 0;
		t.source = "dibang_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 32.5;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 369;
		t.y = -277.5;
		t.skinName = SceneGameSkin$Skin31;
		return t;
	};
	return SceneGameSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/testWord.exml'] = window.testWordSkin = (function (_super) {
	__extends(testWordSkin, _super);
	function testWordSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 117;
		this.width = 113;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = testWordSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 117;
		t.source = "daandi_png";
		t.width = 113;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return testWordSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Word.exml'] = window.WordSkin = (function (_super) {
	__extends(WordSkin, _super);
	function WordSkin() {
		_super.call(this);
		this.skinParts = ["label_answer"];
		
		this.height = 121;
		this.width = 121;
		this.elementsContent = [this._Image1_i(),this.label_answer_i()];
	}
	var _proto = WordSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.fillMode = "scale";
		t.height = 121;
		t.source = "zidi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label_answer_i = function () {
		var t = new eui.Label();
		this.label_answer = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 121;
		t.size = 50;
		t.text = "字";
		t.textAlign = "center";
		t.textColor = 0x817054;
		t.verticalAlign = "middle";
		t.width = 121;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return WordSkin;
})(eui.Skin);