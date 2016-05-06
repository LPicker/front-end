var topone = "top-level"; 

(function outter(){
	var middle = "mid-level";

	(function inner(){
		var bottom = "bot-level";

		print(topone+">"+middle+">"+bottom); 
	})();
})();



var global = this;
var tom = {
	name : "Tom",
	home : "desine", 
	getInfo : function(){
		print(this.name + ", from "+this.home); 
	}
};
tom.getInfo();
// Tom,from desine

var jerry = {
	name : "Jerry", 
	getInfo : tom.getInfo
}

jerry.getInfo();
// Jerry,form undefined
global.getInfo = tom.getInfo; 
global.getInfo();
// undefined,from undefined


var obj1 = {
	name : 'juntao',
	last : 'qiu',
};
var obj2 = {
	addr : 'unknown',
	title : 'unknown'
};
var obj3 = {
	addr : 'KunMing, Yunnan, China'
};
result = $.extend({}, obj1, obj2, obj3);
$.each(result, function(name, value){ 
	var li = $("<li></li>"); 
	li.html("["+name+"]=["+value+"]"); 
	li.appendTo(base);
});


var list = $("div#itemlist");

$.ajax({
	url : 'queryitems.php', 
	type : 'GET',
	error : function(xhr){
		alert(xhr);
	},
	success : function(obj){
		obj = eval('('+obj+')');
		var dataset = obj.dataset;
		for(var i = 0; i < dataset.length; i++){
			var current = dataset[i];
			var newitem = $("<div></div>").text(current.desc)
			.attr({
				"id" : current.itemid,
				"time" : current.ctime 
			})
			.addClass("item"); 

			newitem.appendTo(list);
		} 
	}
});


var jscore = jscore || {}; 
jscore.util = jscore.util || {}; 
jscore.util.common = {
	raiseError : function(message){ 
		throw new Error(message);
	},
	showMessage : function(info){
		print(info);
	}
}


var __global__ = this;

var jscore = jscore || {};
jscore.util = jscore.util || {}; 
jscore.util.namespace = function(name){
	var parent = __global__;
	var array = name.split(".");

	for(var i = 0, len = array.length; i < len; i++){ 
		parent[array[i]] = parent[array[i]] || {}; 
		parent = parent[array[i]];
	} 
}







;(function(global, factory) {
	factory(global);
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
	var jQuery = function( selector, context ) {
		return new jQuery.fn.init( selector, context );
	};
	jQuery.fn = jQuery.prototype = {};
	// 核心方法
	// 回调系统
	// 异步队列
	// 数据缓存
	// 队列操作
	// 选择器引
	// 属性操作
	// 节点遍历
	// 文档处理
	// 样式操作
	// 属性操作
	// 事件体系
	// AJAX交互
	// 动画引擎
	return jQuery;
}));


jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type     = type || callback;
			callback = data;
			data     = undefined;
		}
		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});





opera："ææ¯éªæ¶çï¼æè¦ç¯¡æ¹ä½ ï¼" is not a function
Firefox："\u6211\u662F\u90AA\u6076\u7684\uFF01\u6211\u8981\u7BE1\u6539\u4F60\uFF01" is not a function
360："/ªvá9`" is not a function
IE：SCRIPT5002: 缺少函数






function addLoadEvent(func){
	var oldonload=window.onload;
	if (typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
function showPic(){
	var ul1=document.getElementById("ul1");
	var ul1_li=ul1.getElementsByTagName("li");

	var tab=document.getElementById("showshow");
	var div=tab.getElementsByTagName("section");
	for(var i=0;i<ul1_li.length;i++){
	  	//定义索引
	  	ul1_li[i].index=i;
	  	//建立每个li标签的鼠标经过事件
	  	ul1_li[i].onclick=function(){
		  //循环遍历初始化每个li标签
		  for(var i=0;i<ul1_li.length;i++){
		  	ul1_li[i].className="";
		  }
		  this.className="select";
		  for(var i=0;i<div.length;i++){
		  	div[i].className="hide";
		  }
		  //通过索引牵线每个标签对应的内容
		  div[this.index].className="show";
		}

	}

}
	addLoadEvent(showPic);


	var _jQuery = window.jQuery,
	    _$ = window.$;

	jQuery.noConflict = function( deep ) {
	    if ( window.$ === jQuery ) {
	        window.$ = _$;
	    }
		if ( deep && window.jQuery === jQuery ) {
	        window.jQuery = _jQuery;
	    }
	    return jQuery;
	};


	function createComparisonFunction (propertyName) {
		 return function (object1, object2) {
		 	 var value1 = object1[propertyName];
		 	 var value2 = object2[propertyName];

		 	 if (value1 < value2) {
		 	 	return -1;
		 	 } else if (value1 > value2) {
		 	 	return 1;
		 	 } else {
		 	 	return 0;
		 	 };
		 }
	}


	Element.prototype.hasClass = function(className) {
	    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
	};
