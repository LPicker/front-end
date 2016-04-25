// 可在同一个页面重用的 文档完全加载函数
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func();
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

// insertAfter 函数，与 insertBefore 方法对应
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSilbing);
    }
}

// addClass 函数
function addClass(ele,value){
    if(!ele.className){
        ele.className = value;
    }else{
        ele.className += " "+value;
    }
}

// getById 函数
function getById(id){
	return document.getElementById(id);
}

// getByClass 函数
function getByClass(obj, sClass){
    var aTargs = [];
    var aEle = obj.getElementsByTagName("*");

    for(var i=0;i<aEle.length;i++){
        if(aEle[i].className==sClass){
            aTargs.push(aEle[i]);
        }
    }
    return aTargs;
}

//css 函数
function css(obj,name,value){
    if(arguments.length==2){    // 获取
        if(obj.currentStyle){
            return obj.currentStyle[name];
        }else{
            return getComputedStyle(obj,null)[name];
        }
        
    }else if(arguments.length==3){  // 设置
        obj.style[name] = value;
    }
}

//$ 函数
function $(id){
	return document.getElementById(id);
}