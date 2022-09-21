let $ = function (selectName) {
    return document.querySelector(selectName)
}

let $a = function (selectNames) {
    return document.querySelectorAll(selectNames)
}


// dynamic create element


const createElement=function(tagName,className,content){
    const newElement=document.createElement(tagName);
   if(className){
    newElement.setAttribute("class", className);
   }
    if(content){
       newElement.innerHTML=content;
    }
 
    return newElement
 }

