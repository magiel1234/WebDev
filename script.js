var cartnum=0;
var sort=0;  // 0: default, 1: price, 2: recent, 3: popular
var sorted = ["120W UV LED", "Mexican Taco Maker", "Moscow Mule Mugs", "Dryer", "Weighted Blanket"];
var sortedprice = [3,1,2,4,5];
var totalprice=0;
var cartnumoccupied = [0,0,0,0,0,0,0];

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
        target.width = 100;
	}
	else {
		target.classList.add("expanded");
        target.width = 200;
	}
}


function mOver(obj) {
    obj.width = 350;
}

function mOut(obj) {
    obj.width = 250;
}


function mOverh(obj) {
    obj.style.fontSize="30px";
}

function mOuth(obj) {
    obj.style.fontSize="20px";
}

function additem(num)
{
    cartnum++;
    var a = document.getElementById('cartlist');
    a.options[cartnum].innerText = sorted[num-1];
    totalprice = totalprice + sortedprice[num-1];
    cartnumoccupied[cartnum]=num;
    console.log(cartnumoccupied);
}

function removeitem(num)
{
    
    for(let aa=1;aa<7;aa++)
    {
        if(cartnumoccupied[aa]==num)
        {
            if(cartnum>0) 
            {
                cartnum--;
                var a = document.getElementById('cartlist');
                a.options[cartnum+1].innerText = "";
                totalprice = totalprice - sortedprice[num-1];
                cartnumoccupied[aa]=0;
            }
        }
    }
}

function checkout(){
    alert("Your total is "+totalprice+" $");
}