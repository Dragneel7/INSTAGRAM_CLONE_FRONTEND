console.log("hello");
var check=0;
function fun(y){
	
	var x = "like"+y;
	check=check+1;
	var z=document.getElementById(x);
	if(check%2==1){
		z.src="../images/heart.png";
	}
	if(check%2==0){
		z.src="../images/love.png";
	}
	}

function fun2(y){

	var x = "textbox"+y;
	var z = document.getElementById(x);
	
	if(z.style.display=="none"){
		z.style.display="block";
	}
	else{
		z.style.display="none";
	}
}
function fun3(){
	console.log("yes");
	document.getElementById('overlay').style.display="block"
	document.getElementById('pop').style.display="block";
	document.getElementById('dots').style.display="none";
	
}
function close1(){
	document.getElementById('pop').style.display="none";
	document.getElementById('dots').style.display="block";
	document.getElementById('overlay').style.display="none"
}
