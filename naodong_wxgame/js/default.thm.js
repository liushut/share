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
		this.skinParts = ["label_answer"];
		
		this.height = 112;
		this.width = 101;
		this.elementsContent = [this._Image1_i(),this.label_answer_i()];
	}
	var _proto = AnswerWordSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.source = "daandi_png";
		t.width = 101;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label_answer_i = function () {
		var t = new eui.Label();
		this.label_answer = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 80;
		t.horizontalCenter = 0;
		t.size = 55;
		t.text = "答";
		t.textAlign = "center";
		t.textColor = 0x070000;
		t.verticalAlign = "middle";
		t.width = 80;
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
			t.source = "surebtn_png";
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
		return BingoSkin$Skin4;
	})(eui.Skin);

	function BingoSkin() {
		_super.call(this);
		this.skinParts = ["bg","btn_share","btn_next","ditu","bingoGroup","daandi","labelresult","labelExplain","trueGroup","imgErro","shareFail","erroBtn","erroGroup","imgdizi","imgDengji","imgTouxiang","star0","star1","star2","star3","star4","starsGroup","tiaozhanBtn","upgradeGroup","groupAll"];
		
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
		t.elementsContent = [this.bg_i(),this.bingoGroup_i(),this.trueGroup_i(),this.imgErro_i(),this.erroGroup_i(),this.upgradeGroup_i()];
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
		t.y = 540;
		t.elementsContent = [this.btn_share_i(),this.btn_next_i(),this.ditu_i(),this._Image1_i()];
		return t;
	};
	_proto.btn_share_i = function () {
		var t = new eui.Button();
		this.btn_share = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 43;
		t.enabled = true;
		t.height = 96;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 230;
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
		t.height = 96;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 230;
		t.x = -60;
		t.y = 400;
		t.skinName = BingoSkin$Skin2;
		return t;
	};
	_proto.ditu_i = function () {
		var t = new eui.Image();
		this.ditu = t;
		t.height = 447;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "daduidi_png";
		t.verticalCenter = 0;
		t.width = 561;
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
		t.y = 567;
		t.elementsContent = [this.daandi_i(),this.labelresult_i(),this.labelExplain_i()];
		return t;
	};
	_proto.daandi_i = function () {
		var t = new eui.Image();
		this.daandi = t;
		t.height = 290;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tanchuandaandi_png";
		t.width = 494;
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
	_proto.imgErro_i = function () {
		var t = new eui.Image();
		this.imgErro = t;
		t.height = 243;
		t.horizontalCenter = 0;
		t.source = "dacuole_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 243;
		return t;
	};
	_proto.erroGroup_i = function () {
		var t = new eui.Group();
		this.erroGroup = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 200;
		t.elementsContent = [this.shareFail_i(),this.erroBtn_i()];
		return t;
	};
	_proto.shareFail_i = function () {
		var t = new eui.Image();
		this.shareFail = t;
		t.height = 306;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shareFail_png";
		t.verticalCenter = 0;
		t.width = 434;
		t.x = -117;
		t.y = -53;
		return t;
	};
	_proto.erroBtn_i = function () {
		var t = new eui.Button();
		this.erroBtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 6;
		t.y = 147;
		t.skinName = BingoSkin$Skin3;
		return t;
	};
	_proto.upgradeGroup_i = function () {
		var t = new eui.Group();
		this.upgradeGroup = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 200;
		t.y = 540;
		t.elementsContent = [this.imgdizi_i(),this.imgDengji_i(),this.imgTouxiang_i(),this.starsGroup_i(),this.tiaozhanBtn_i()];
		return t;
	};
	_proto.imgdizi_i = function () {
		var t = new eui.Image();
		this.imgdizi = t;
		t.height = 720;
		t.source = "dizi_png";
		t.width = 720;
		t.x = -260;
		t.y = -260;
		return t;
	};
	_proto.imgDengji_i = function () {
		var t = new eui.Image();
		this.imgDengji = t;
		t.height = 212;
		t.source = "zhizhezi_png";
		t.width = 155;
		t.x = 30;
		t.y = 54;
		return t;
	};
	_proto.imgTouxiang_i = function () {
		var t = new eui.Image();
		this.imgTouxiang = t;
		t.height = 244;
		t.source = "zhizhe_png";
		t.width = 226;
		t.x = 139;
		t.y = 41;
		return t;
	};
	_proto.starsGroup_i = function () {
		var t = new eui.Group();
		this.starsGroup = t;
		t.height = 306;
		t.width = 58;
		t.x = 313;
		t.y = 46;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.star0_i(),this.star1_i(),this.star2_i(),this.star3_i(),this.star4_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.star0_i = function () {
		var t = new eui.Image();
		this.star0 = t;
		t.height = 57;
		t.source = "star_png";
		t.visible = false;
		t.width = 58;
		t.x = 172;
		t.y = 112;
		return t;
	};
	_proto.star1_i = function () {
		var t = new eui.Image();
		this.star1 = t;
		t.height = 57;
		t.source = "star_png";
		t.visible = false;
		t.width = 58;
		t.x = 172;
		t.y = 112;
		return t;
	};
	_proto.star2_i = function () {
		var t = new eui.Image();
		this.star2 = t;
		t.height = 57;
		t.source = "star_png";
		t.visible = false;
		t.width = 58;
		t.x = 182;
		t.y = 122;
		return t;
	};
	_proto.star3_i = function () {
		var t = new eui.Image();
		this.star3 = t;
		t.height = 57;
		t.source = "star_png";
		t.visible = false;
		t.width = 58;
		t.x = 192;
		t.y = 132;
		return t;
	};
	_proto.star4_i = function () {
		var t = new eui.Image();
		this.star4 = t;
		t.height = 57;
		t.source = "star_png";
		t.visible = false;
		t.width = 58;
		t.x = 202;
		t.y = 142;
		return t;
	};
	_proto.tiaozhanBtn_i = function () {
		var t = new eui.Button();
		this.tiaozhanBtn = t;
		t.enabled = true;
		t.height = 96;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 230;
		t.y = 331;
		t.skinName = BingoSkin$Skin4;
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
		this.skinParts = ["imgGuankadi","bitlabel_levelIndex","imgLock"];
		
		this.height = 109;
		this.width = 99;
		this.elementsContent = [this.imgGuankadi_i(),this.bitlabel_levelIndex_i(),this.imgLock_i()];
	}
	var _proto = LevelIconSkin.prototype;

	_proto.imgGuankadi_i = function () {
		var t = new eui.Image();
		this.imgGuankadi = t;
		t.height = 109;
		t.source = "guankadi_png";
		t.width = 99;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bitlabel_levelIndex_i = function () {
		var t = new eui.BitmapLabel();
		this.bitlabel_levelIndex = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "number_fnt";
		t.height = 46;
		t.horizontalCenter = 0;
		t.text = "999";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.visible = false;
		t.width = 123;
		return t;
	};
	_proto.imgLock_i = function () {
		var t = new eui.Image();
		this.imgLock = t;
		t.alpha = 1;
		t.height = 109;
		t.source = "huilock_png";
		t.width = 99;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return LevelIconSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LevelScene.exml'] = window.LevelSceneSkin = (function (_super) {
	__extends(LevelSceneSkin, _super);
	var LevelSceneSkin$Skin5 = 	(function (_super) {
		__extends(LevelSceneSkin$Skin5, _super);
		function LevelSceneSkin$Skin5() {
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
		var _proto = LevelSceneSkin$Skin5.prototype;

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
		return LevelSceneSkin$Skin5;
	})(eui.Skin);

	var LevelSceneSkin$Skin6 = 	(function (_super) {
		__extends(LevelSceneSkin$Skin6, _super);
		function LevelSceneSkin$Skin6() {
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
		var _proto = LevelSceneSkin$Skin6.prototype;

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
		return LevelSceneSkin$Skin6;
	})(eui.Skin);

	function LevelSceneSkin() {
		_super.call(this);
		this.skinParts = ["levelBg","ditu","btn_next","btn_before","imgHead","imgHeadBlack","imageGrade","labelGrade","imagehuiGrade","star0","star1","star2","star3","star4","groupStars","groupHead","groupLevel"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = LevelSceneSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 360;
		t.anchorOffsetY = 640;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 360;
		t.anchorOffsetY = 640;
		t.height = 1280;
		t.width = 720;
		t.x = 360;
		t.y = 640;
		t.elementsContent = [this.levelBg_i(),this.ditu_i(),this.btn_next_i(),this.btn_before_i(),this.groupHead_i(),this.groupLevel_i()];
		return t;
	};
	_proto.levelBg_i = function () {
		var t = new eui.Image();
		this.levelBg = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 360;
		t.anchorOffsetY = 640;
		t.height = 1280;
		t.source = "levelBg_png";
		t.width = 720;
		t.x = 360;
		t.y = 640;
		return t;
	};
	_proto.ditu_i = function () {
		var t = new eui.Image();
		this.ditu = t;
		t.height = 846;
		t.source = "ditu_png";
		t.width = 648;
		t.x = 36;
		t.y = 217;
		return t;
	};
	_proto.btn_next_i = function () {
		var t = new eui.Button();
		this.btn_next = t;
		t.enabled = true;
		t.label = "";
		t.width = 54;
		t.x = 594;
		t.y = 327;
		t.skinName = LevelSceneSkin$Skin5;
		return t;
	};
	_proto.btn_before_i = function () {
		var t = new eui.Button();
		this.btn_before = t;
		t.alpha = 1;
		t.enabled = true;
		t.label = "";
		t.scaleX = -1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 54;
		t.x = 136;
		t.y = 327;
		t.skinName = LevelSceneSkin$Skin6;
		return t;
	};
	_proto.groupHead_i = function () {
		var t = new eui.Group();
		this.groupHead = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.width = 200;
		t.y = 61;
		t.elementsContent = [this.imgHead_i(),this.imgHeadBlack_i(),this.imageGrade_i(),this.labelGrade_i(),this.imagehuiGrade_i(),this.groupStars_i()];
		return t;
	};
	_proto.imgHead_i = function () {
		var t = new eui.Image();
		this.imgHead = t;
		t.height = 221;
		t.source = "xinshou_png";
		t.width = 226;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgHeadBlack_i = function () {
		var t = new eui.Image();
		this.imgHeadBlack = t;
		t.height = 241;
		t.source = "huixinshou_png";
		t.width = 226;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imageGrade_i = function () {
		var t = new eui.Image();
		this.imageGrade = t;
		t.height = 101;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hengfu_png";
		t.width = 389;
		t.y = 241;
		return t;
	};
	_proto.labelGrade_i = function () {
		var t = new eui.Label();
		this.labelGrade = t;
		t.fontFamily = "SimHei";
		t.height = 60;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "新手";
		t.textAlign = "center";
		t.textColor = 0x020000;
		t.verticalAlign = "middle";
		t.width = 311;
		t.y = 252;
		return t;
	};
	_proto.imagehuiGrade_i = function () {
		var t = new eui.Image();
		this.imagehuiGrade = t;
		t.height = 101;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "huihengfu_png";
		t.visible = false;
		t.width = 389;
		t.y = 241;
		return t;
	};
	_proto.groupStars_i = function () {
		var t = new eui.Group();
		this.groupStars = t;
		t.height = 200;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.star0_i(),this.star1_i(),this.star2_i(),this.star3_i(),this.star4_i()];
		return t;
	};
	_proto.star0_i = function () {
		var t = new eui.Image();
		this.star0 = t;
		t.alpha = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "star_png";
		t.width = 58;
		t.x = -47;
		t.y = 80;
		return t;
	};
	_proto.star1_i = function () {
		var t = new eui.Image();
		this.star1 = t;
		t.alpha = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "star_png";
		t.width = 58;
		t.x = -9;
		t.y = 0;
		return t;
	};
	_proto.star2_i = function () {
		var t = new eui.Image();
		this.star2 = t;
		t.alpha = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "star_png";
		t.width = 58;
		t.x = 85;
		t.y = -61;
		return t;
	};
	_proto.star3_i = function () {
		var t = new eui.Image();
		this.star3 = t;
		t.alpha = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "star_png";
		t.width = 58;
		t.x = 179;
		t.y = 0;
		return t;
	};
	_proto.star4_i = function () {
		var t = new eui.Image();
		this.star4 = t;
		t.alpha = 0;
		t.height = 57;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "star_png";
		t.width = 58;
		t.x = 215;
		t.y = 80;
		return t;
	};
	_proto.groupLevel_i = function () {
		var t = new eui.Group();
		this.groupLevel = t;
		t.anchorOffsetX = 0;
		t.height = 680;
		t.width = 580;
		t.x = 62;
		t.y = 418;
		return t;
	};
	return LevelSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list.exml'] = window.$exmlClass7 = (function (_super) {
	__extends($exmlClass7, _super);
	function $exmlClass7() {
		_super.call(this);
		this.skinParts = ["testlist"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Scroller1_i()];
	}
	var _proto = $exmlClass7.prototype;

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
	return $exmlClass7;
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
	var SceneGameSkin$Skin8 = 	(function (_super) {
		__extends(SceneGameSkin$Skin8, _super);
		function SceneGameSkin$Skin8() {
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
		var _proto = SceneGameSkin$Skin8.prototype;

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
		return SceneGameSkin$Skin8;
	})(eui.Skin);

	var SceneGameSkin$Skin9 = 	(function (_super) {
		__extends(SceneGameSkin$Skin9, _super);
		function SceneGameSkin$Skin9() {
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
		var _proto = SceneGameSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "danan_png";
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
		return SceneGameSkin$Skin9;
	})(eui.Skin);

	var SceneGameSkin$Skin10 = 	(function (_super) {
		__extends(SceneGameSkin$Skin10, _super);
		function SceneGameSkin$Skin10() {
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
		var _proto = SceneGameSkin$Skin10.prototype;

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
		return SceneGameSkin$Skin10;
	})(eui.Skin);

	var SceneGameSkin$Skin11 = 	(function (_super) {
		__extends(SceneGameSkin$Skin11, _super);
		function SceneGameSkin$Skin11() {
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
		var _proto = SceneGameSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
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
		return SceneGameSkin$Skin11;
	})(eui.Skin);

	function SceneGameSkin() {
		_super.call(this);
		this.skinParts = ["gameBg","btn_Level","btn_result","btn_paihang","group_Help","label_Question","group_Result","group_Chaotic","labelLevel","bingoLayer","levelScene","imgDibang","openGroup","closeBtn"];
		
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
		t.elementsContent = [this.gameBg_i(),this.group_Help_i(),this.label_Question_i(),this.group_Result_i(),this.group_Chaotic_i(),this.labelLevel_i(),this.bingoLayer_i(),this.levelScene_i(),this.openGroup_i(),this.closeBtn_i()];
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
	_proto.group_Help_i = function () {
		var t = new eui.Group();
		this.group_Help = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.horizontalCenter = 0;
		t.width = 720;
		t.y = 0;
		t.elementsContent = [this.btn_Level_i(),this.btn_result_i(),this.btn_paihang_i()];
		return t;
	};
	_proto.btn_Level_i = function () {
		var t = new eui.Button();
		this.btn_Level = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 111;
		t.label = "";
		t.width = 109;
		t.x = 10;
		t.y = 150;
		t.skinName = SceneGameSkin$Skin8;
		return t;
	};
	_proto.btn_result_i = function () {
		var t = new eui.Button();
		this.btn_result = t;
		t.anchorOffsetX = 103;
		t.anchorOffsetY = 38;
		t.enabled = true;
		t.height = 76;
		t.label = "";
		t.width = 207;
		t.x = 360;
		t.y = 506;
		t.skinName = SceneGameSkin$Skin9;
		return t;
	};
	_proto.btn_paihang_i = function () {
		var t = new eui.Button();
		this.btn_paihang = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 600;
		t.y = 150;
		t.skinName = SceneGameSkin$Skin10;
		return t;
	};
	_proto.label_Question_i = function () {
		var t = new eui.Label();
		this.label_Question = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 146;
		t.size = 35;
		t.text = "      小明的爷爷七十岁小明的爷                爷七十岁小明的爷爷七十岁小明的爷爷七十岁小明的爷爷七十岁";
		t.textAlign = "left";
		t.textColor = 0xf7f7f7;
		t.verticalAlign = "top";
		t.width = 550;
		t.x = 85;
		t.y = 303;
		return t;
	};
	_proto.group_Result_i = function () {
		var t = new eui.Group();
		this.group_Result = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116.42;
		t.width = 624;
		t.x = 53;
		t.y = 565;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._AnswerWord1_i(),this._AnswerWord2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto._AnswerWord1_i = function () {
		var t = new AnswerWord();
		t.height = 117;
		t.width = 113;
		t.x = 0;
		t.y = 37;
		return t;
	};
	_proto._AnswerWord2_i = function () {
		var t = new AnswerWord();
		t.height = 117;
		t.width = 113;
		t.x = 10;
		t.y = 47;
		return t;
	};
	_proto.group_Chaotic_i = function () {
		var t = new eui.Group();
		this.group_Chaotic = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.width = 636;
		t.x = 65;
		t.y = 680;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._Word1_i(),this._Word2_i(),this._Word3_i(),this._Word4_i(),this._Word5_i(),this._Word6_i(),this._Word7_i(),this._Word8_i(),this._Word9_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingGap";
		t.horizontalAlign = "left";
		t.horizontalGap = 3;
		t.orientation = "rows";
		t.paddingBottom = 0;
		t.paddingLeft = 0;
		t.paddingTop = 0;
		t.rowAlign = "top";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Word1_i = function () {
		var t = new Word();
		t.height = 117;
		t.width = 113;
		t.x = 203;
		t.y = 349;
		return t;
	};
	_proto._Word2_i = function () {
		var t = new Word();
		t.height = 135;
		t.width = 123;
		t.x = 283;
		t.y = 429;
		return t;
	};
	_proto._Word3_i = function () {
		var t = new Word();
		t.height = 135;
		t.width = 123;
		t.x = 293;
		t.y = 439;
		return t;
	};
	_proto._Word4_i = function () {
		var t = new Word();
		t.height = 135;
		t.width = 123;
		t.x = 213;
		t.y = 359;
		return t;
	};
	_proto._Word5_i = function () {
		var t = new Word();
		t.height = 135;
		t.width = 123;
		t.x = 223;
		t.y = 369;
		return t;
	};
	_proto._Word6_i = function () {
		var t = new Word();
		t.height = 135;
		t.width = 123;
		t.x = 233;
		t.y = 379;
		return t;
	};
	_proto._Word7_i = function () {
		var t = new Word();
		t.height = 135;
		t.width = 123;
		t.x = 243;
		t.y = 389;
		return t;
	};
	_proto._Word8_i = function () {
		var t = new Word();
		t.height = 135;
		t.width = 123;
		t.x = 253;
		t.y = 399;
		return t;
	};
	_proto._Word9_i = function () {
		var t = new Word();
		t.height = 135;
		t.width = 123;
		t.x = 323;
		t.y = 469;
		return t;
	};
	_proto.labelLevel_i = function () {
		var t = new eui.Label();
		this.labelLevel = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.fontFamily = "Microsoft YaHei";
		t.height = 100;
		t.size = 30;
		t.text = "999";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 353;
		t.y = 267;
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
	_proto.openGroup_i = function () {
		var t = new eui.Group();
		this.openGroup = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 200;
		t.elementsContent = [this.imgDibang_i()];
		return t;
	};
	_proto.imgDibang_i = function () {
		var t = new eui.Image();
		this.imgDibang = t;
		t.height = 893;
		t.horizontalCenter = 0;
		t.source = "dibang_png";
		t.verticalCenter = 0;
		t.width = 648;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 32.5;
		t.enabled = true;
		t.height = 75;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 80;
		t.x = 669;
		t.y = 243;
		t.skinName = SceneGameSkin$Skin11;
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
		
		this.height = 103;
		this.width = 95;
		this.elementsContent = [this._Image1_i(),this.label_answer_i()];
	}
	var _proto = WordSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.fillMode = "scale";
		t.height = 103;
		t.source = "zidi_png";
		t.width = 95;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.label_answer_i = function () {
		var t = new eui.Label();
		this.label_answer = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 103;
		t.size = 50;
		t.text = "字";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 95;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return WordSkin;
})(eui.Skin);