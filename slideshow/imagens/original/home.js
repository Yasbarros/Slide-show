window.load = slide(1);

var bgNumber = 1;

function slide(n){
	var allBgs = 3;
	document.getElementById('imageBg').style.backgroundImage = "url('imagens/"+n+".jpg')";
	botoes(n,allBgs);
	bgNumber=n;
}
function anterior(){
	if (bgNumber>1) {
		bgNumber--;
		slide(bgNumber);
	}
}
function proximo(){
	if (bgNumber<3) {
		bgNumber++;
		slide(bgNumber);
	}
}
function botoes(n,m) {
	document.getElementById('botoes').innerHTML="";
	for(a=1;a<=m;a++){
		if(a==n){
			document.getElementById('botoes').innerHTML += "<li class='selected' onclick='slide("+a+")'></li>";
		} else{
			document.getElementById('botoes').innerHTML += "<li onclick='slide("+a+")'></li>";
		}
	}
}