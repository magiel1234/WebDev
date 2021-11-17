function alert_button(str) {
    alert(str);
}

window.onload = function(){
	var images = document.getElementsByTagName("img")
	for(let image of images){
		image.addEventListener("click", imageClicked);    //imageClicked will be defined function
	}
}

function imageClicked(event){
	let target = event.currentTarget;  
	
	event.stopPropagation();     // IMPORTANT!! STOPPING BUBBLING AND CAPTURING EITHER.
	if(target.classList.contains("expanded")){
		target.classList.remove("expanded");
        target.width = 500;
	}
	else {
		target.classList.add("expanded");
        target.width = 600;
	}
}


function mOver(obj) {
    obj.width = 600;
}

function mOut(obj) {
    obj.width = 500;
}


function mOverh(obj) {
    obj.style.fontSize="30px";
}

function mOuth(obj) {
    obj.style.fontSize="20px";
}