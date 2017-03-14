// JavaScript Document
var shownum = 0, //第几个问题
	allnum = 0, //通关数
	allnumshow = 0,
	time_num = 600, //翻页延迟
	clock = null,
	losequestion = '';
	loseanswer = '';
	sec = 100000, //倒计时
	show = 
	[{
		"question":{
				"question": '假如女朋友大姨妈来了,你会怎么做？',
				"answerlist": ["A、 让她多喝点热水","B、 红糖姜茶","C、 早点休息","D、 开门","D、 开门"]
		},
	}, 
	{
		"question":{
				"question": '当女朋友说："那个女生好漂亮啊"的含义',
				"answerlist": ["A、 嗯，挺漂亮的","B、 瞟一眼,好凶","C、还行，不如苍老师","D、 看都不看，四海八荒你最美","D、 看都不看，四海八荒你最美"]
		},
	}, 
	{
		"question":{
				"question": '当女生说："我睡咯"的含义。',
				"answerlist": ["A、 晚安~","B、 早睡早起身体好","C、 拜拜，老娘不理你了","D、 舍不得挂电话，爱你么么哒","D、 舍不得挂电话，爱你么么哒"]
		},
	}, 
	{
		"question":{
				"question": '星辰是以下哪个口红品牌的系列？',
				"answerlist": ["A、 YSL（圣罗兰）","B、 ARMANI(阿玛尼)","C、 CHANEL（香奈儿）","D、 Dior（迪奥）","A、 YSL（圣罗兰）"]
		},
	}, 
	{
		"question":{
				"question": '101朵玫瑰象征什么？',
				"answerlist": ["A、 求婚","B、 誓死不渝的爱情","C、 最爱","D、 心中只有你","C、 最爱"]
		},
	}, 
	{
		"question":{
				"question": '女生姨妈巾夜用款一般多长mm？',
				"answerlist": ["A、 360mm","B、 420mm","C、 510mm","D、 550mm","B、 420mm"]
		},
	}, 
	{
		"question":{
				"question": '男生运动后，女生心里是怎么想的？',
				"answerlist": ["A、 欧巴，好帅","B、 一身臭汗","C、 关我屁事","D、 一见钟情","B、 一身臭汗"]
		},
	}, 
	{
		"question":{
				"question": '当女生说："好吧，你去玩吧"的含义？',
				"answerlist": ["A、 你TM和游戏过日子吧","B、 只准玩一会，不陪我你死定了","C、 你去玩吧，你最棒！","D、 带我一起玩游戏","A、 你TM和游戏过日子吧"]
		},
	}, 
	{
		"question":{
				"question": '女生一般都在寝室干嘛？',
				"answerlist": ["A、 抠脚！","B、 睡觉！","C、 谈论男生！","D、 化妆!","C、 谈论男生！"]
		},
	}, 
	{
		"question":{
				"question": '女生对爱情动作片的看法',
				"answerlist": ["A、 恶心，好难受","B、 没感觉，和正常电影一样","C、 小脸红扑扑，羞羞哒","D、 没新意，看腻了","D、 没新意，看腻了"]
		},
	}, 
	{
		"question":{
				"question": '以下不是女生买高跟鞋原因的是？',
				"answerlist": ["A、 增高","B、 身姿挺拔增魅力","C、 搭配衣服","D、 就想买，你管我","A、 增高"]
		},
	}, 
	{
		"question":{
				"question": '当女生穿连体背带裤时怎么上厕所？',
				"answerlist": ["A、 从上往下脱衣服","B、 从下往上脱衣服","C、 全脱","D、 憋着回家再上","A、 从上往下脱衣服"]
		},
	}, 
	{
		"question":{
				"question": '当女生看见男朋友第一次就能单手拖BRA的想法？',
				"answerlist": ["A、 死变态","B、 一个大嘴巴并且分手","C、 他有多少前女友，发生了什么","D、 好幸福","C、 他有多少前女友，发生了什么"]
		},
	}, 
	{
		"question":{
				"question": '女生对很污的男生有什么看法？',
				"answerlist": ["A、 同道中人，相见恨晚","B、 死变态，分分钟抽死","C、 适可而止就很可爱","D、 关我屁事","A、 同道中人，相见恨晚"]
		},
	},
	{
		"question":{
				"question": '对于各种节日送礼物，女生怎么看？',
				"answerlist": ["A、 越贵越好","B、 心意到就好","C、 心中想要的","D、 有就行，我不挑","C、 心中想要的"]
		},
	},
	{
		"question":{
				"question": '女生觉得男生的外貌重要吗？',
				"answerlist": ["A、 只要是自己男朋友都好","B、 就要帅的","C、 更看重内在","D、 顺我意就行","B、 就要帅的"]
		},
	}],
	urllist=
	[{
		"url":{
				"head": 'url(images/web_game/head_bk_1.png) no-repeat center',
				"body": 'url(images/web_game/body_bk_1.png) no-repeat center'
		},
	}, 
	{
		"url":{
				"head": 'url(images/web_game/head_bk_1.png) no-repeat center',
				"body": 'url(images/web_game/body_bk_1.png) no-repeat center'
		},
	},
	{
		"url":{
				"head": 'url(images/web_game/head_bk_2.png) no-repeat center',
				"body": 'url(images/web_game/body_bk_2.png) no-repeat center'
		},
	},
	{
		"url":{
				"head": 'url(images/web_game/head_bk_2.png) no-repeat center',
				"body": 'url(images/web_game/body_bk_2.png) no-repeat center'
		},
	},
	{
		"url":{
				"head": 'url(images/web_game/head_bk_3.png) no-repeat center',
				"body": 'url(images/web_game/body_bk_3.png) no-repeat center'
		},
	},
	{
		"url":{
				"head": 'url(images/web_game/head_bk_3.png) no-repeat center',
				"body": 'url(images/web_game/body_bk_3.png) no-repeat center'
		},
	},
	{
		"url":{
				"head": 'url(images/web_game/head_bk_4.png) no-repeat center',
				"body": 'url(images/web_game/body_bk_4.png) no-repeat center'
		},
	},
	{
		"url":{
				"head": 'url(images/web_game/head_bk_4.png) no-repeat center',
				"body": 'url(images/web_game/body_bk_4.png) no-repeat center'
		},
	}],
	question_id=[["壹"],["贰"],["叁"],["肆"],["伍"],["陆"],["柒"],["捌"],],
	isfirst = true,
	$d = function(id) {
		return document.getElementById(id);
	};


//EVENTS
$("#start").on('touchend', function() {
	$d('wbegin').style.display = "none";
	$d('main').style.display = "block";
	init();
});

$("#start").on('click', function() {
	$d('wbegin').style.display = "none";
	$d('main').style.display = "block";
	init();
});

//开始游戏
function init() {	
	//time();
	$('#selects_box').off('touchend');
	newpage();
}

//猜迷倒计时
// function time() {
	// var time = $('.time').text();
	// var second = parseInt(time);
	// if (second <= 0) {
		// losequestion = show[shownum]['question']['question'];
		// loseanswer += show[shownum]['question']['answerlist'][0];
		// loseanswer += " "+show[shownum]['question']['answerlist'][1];
		// loseanswer += " "+show[shownum]['question']['answerlist'][2];
		// loseanswer += " "+show[shownum]['question']['answerlist'][3];
		// $('#selects_box').off('touchend');
		// allnumshow = allnum;
		// result();
		// setTimeout("gameover()", time_num);
	// } else {
		// second--;
		// time = second + 's';
		// $('.time span').text(second);
	// }
	// clock = setTimeout('time()', 1000);
// }

function newpage() {
	shownum = 0;
	//$('.time span').text(sec);
	show = randArray(show);
	randPic= randPic(urllist);
	shows(shownum);
}

//随机灯谜列表
function randArray(data) {
	var randomArr = [],
		copy = data.slice(0);
	for (var i = 0, l = copy.length; l--; i++) {
		randomArr[i] = copy.splice(Math.floor(Math.random() * l), 1)[0];
	}
	return randomArr;
}
//随机背景图片
function randPic(data) {
	var randPic = [],
		copy = data.slice(0);
	for (var i = 0, l = copy.length; l--; i++) {
		randPic[i] = copy.splice(Math.floor(Math.random() * l), 1)[0];
	}
	return randPic;
}
//
function shows(shownum) {
	$('#tips').text("");
	$("#question").text(show[shownum]['question']['question']);
	for (var i = 0; i < 4; i++) {
		$("#s_" + i).text(show[shownum]['question']['answerlist'][i]);
	}
	//背景更换
	$('.picture_head').css("background",randPic[shownum]['url']['head']);
	$('.picture_head').css("background-size","cover");
	$('.box02').css("background",randPic[shownum]['url']['body']);
	$('.box02').css("background-size","cover");
	isWin(shownum);
}

function update() {
	//$('.time span').text(sec);
	//clock = setTimeout('time()', time_num);
	allnum++;
	if (shownum < 7) {
		//题号显示
		$('.question_id').html(question_id[shownum+1][0]);
		shownum++;
		shows(shownum);
	} else {
		allnumshow = allnum;
		result();
		setTimeout("gameover()", time_num);
	}

}

//是否答对
function testt(){
	$('.answer li').css({'color':'#fff'})
}
function isWin(shownum) {
	$("#selects_box").on('touchend', '.cell', function() {
		if ($(this).text() == show[shownum]['question']['answerlist'][4]) {
			$('#selects_box').off('touchend');
			//$d('tips').innerHTML = '正解！';
			$(this).css({'color':'#fff000'});
			var t=setTimeout("testt()",600)
			clearInterval(clock);
			setTimeout("update()", time_num);
		} else {
			losequestion = show[shownum]['question']['question'] ;
			loseanswer += " "+show[shownum]['question']['answerlist'][0];
			loseanswer += " "+show[shownum]['question']['answerlist'][1];
			loseanswer += " "+show[shownum]['question']['answerlist'][2];
			loseanswer += " "+show[shownum]['question']['answerlist'][3];
			$('#selects_box').off('touchend');
			allnumshow = allnum;
			//$d('tips').innerHTML = '错误！' ;
			result();
			setTimeout("gameover()", time_num);
		}
	});
}

function gameover() {
	clearInterval(clock);
	//updateShare(losequestion+loseanswer,allnumshow);
	if(allnumshow > 0) 
	{
		//Play68.setRankingScoreDesc(allnumshow);
	}
	if (isfirst) {
		isfirst = false;
		$d('wend').style.display = "block";
		$d('main').style.display = "none";
	}
}

function result() {
	if (allnumshow < 5 && allnumshow >= 0) {
		/* $d('text_top').innerHTML = '一个灯谜都没有猜出来！';
		$d('text_bottom').innerHTML = "\""+losequestion+'\"<br>这个不会？！'; */
		$('.end_des').css({'background':'url(images/web_game/des_1.png) no-repeat center bottom'});
		$('.end_des').css({'background-size':'cover'});
	} else if (allnumshow < 8 && allnumshow >= 5) {
	/* 	$d('text_top').innerHTML = '猜对 <span id="shownum">' + allnumshow + '</span> 个灯谜';
		$d('text_bottom').innerHTML = "\""+losequestion+'\"<br>这个不知道选什么？！'; */
		$('.end_des').css({'background':'url(images/web_game/des_2.png) no-repeat center bottom'});
		$('.end_des').css({'background-size':'cover'});
	}else if (allnumshow <= 8) {
		/* $d('text_top').innerHTML = '猜对 <span id="shownum">' + allnumshow + '</span> 个灯谜';
		$d('text_bottom').innerHTML = "\""+losequestion+'\"<br>这个不知道选什么？！'; */
		$('.end_des').css({'background':'url(images/web_game/des_3.png) no-repeat center bottom'});
		$('.end_des').css({'background-size':'cover'});
	}
}

//预加载图片
$(function(){
	preloadImg(['images/web_game/blood_1.png','images/web_game/circle.gif','images/web_game/head_bk.png','images/web_game/body_bk.png','images/web_game/head_bk_1.png','images/web_game/body_bk_1.png','images/web_game/head_bk_2.png','images/web_game/body_bk_2.png','images/web_game/head_bk_3.png','images/web_game/body_bk_3.png','images/web_game/head_bk_4.png','images/web_game/body_bk_4.png','images/web_game/des_1.png','images/web_game/des_2.png','images/web_game/des_3.png',])
	function preloadImg(srcArr){
	    if(srcArr instanceof Array){
	        for(var i=0; i<srcArr.length; i++){
	            var oImg = new Image();
	            oImg.src = srcArr[i];
	        }
		$('.loading').animate({'width':'2.27rem'})
	    }
	 document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法. 
		function subSomething() 
		{ 
		if(document.readyState == "complete"){
			$('.loading').animate({'width':'3.27rem'},1000,'swing',function(){
				$('.loading_spe').css({'background':'url(images/web_game/blood_3.png) no-repeat center bottom'})
				$('.loading_spe').css({'background-size':'cover'});
				setTimeout("time1()",500);
			}); 
		} //当页面加载状态 
		//表单提交 
		} 
	}

})

//预加载图片
function time1(){
				$('.loading_spe').hide();
				$('.wrap').show();
				$('.box_spe').hide();
				$('.box_circle_spe').hide();
			}
			
function share() {
	$(".weui_dialog_alert").show()
}
function dis(){
	$('.weui_dialog_alert').hide();
}
function tt(){	
	//window.location.href ='http://wx.qingcaohuzhu.com/index.php?s=/home/index/web_game.html';
	window.location.reload()
}
function ttt(){
	window.location.href = 'http://wx.qingcaohuzhu.com';
}
/* 手机屏幕高度 */
var isDesktop = navigator['userAgent'].match(/(ipad|iphone|ipod|android|windows phone)/i) ? false : true;

function scr() {
	var height = isDesktop ? 1000 : ((window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight));
	height = height + 'px';
	$(".wrap").css('height', height);
}
setTimeout('scr()', 100);