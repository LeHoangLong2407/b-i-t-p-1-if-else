function chiso(){
var w = document.getElementById('weight').value;
var h = document.getElementById('height').value;
var chiso = parseInt(w) / ( parseFloat(h) * parseFloat(h) );
document.getElementById('ketqua').innerHTML = "Chỉ số là: "+chiso;
if (chiso < 18) {
	document.write('Underweight');
}else if (chiso < 25.0) {
	document.write('Normal');
}else if (chiso < 30.0) {
	document.write('Overweight');
}else{
	document.write('Obese');
}
}