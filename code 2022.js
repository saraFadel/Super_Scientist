var Password = document.getElementById("P.W");
var Ans1 = document.getElementById ("ans1"); 
var form1 = document.getElementById ("form1");
var Ans2 = document.getElementById ("ans2"); 
var form2 = document.getElementById ("form2");
var Ans3 = document.getElementById ("ans3"); 
var form3 = document.getElementById ("form3");
var Ans4 = document.getElementById ("ans4"); 
var form4 = document.getElementById ("form4");

function Login (){
	if(Password.value == "2222"){
		window.open ("Lerning.html");
	} else{
		alert ("invalid password");
	}
}

function ans_1(){
	if(Ans1.value == "4"){
		form1.innerHTML = "&#10004;  Correct Answer";
		form1.style.backgroundColor = "#d7ffa9";

	}else{
		form1.innerHTML = "&#10060;  Wrong Answer";
		form1.style.backgroundColor = "#ffb6a9";

	}
}

function ans_2(){
	if(Ans2.value.toLowerCase() == "atrium"){
		form2.innerHTML = "&#10004;  Correct Answer";
		form2.style.backgroundColor = "#d7ffa9";

	}else{
		form2.innerHTML = "&#10060;  Wrong Answer";
		form2.style.backgroundColor = "#ffb6a9";
	}

}

function ans_3(){
	if(Ans3.value.toLowerCase() == "pumps"){
		form3.innerHTML = "&#10004;  Correct Answer";
		form3.style.backgroundColor = "#d7ffa9";

	}else{
		form3.innerHTML = "&#10060;  Wrong Answer";
		form3.style.backgroundColor = "#ffb6a9";
	}

}		
		
function ans_4(){
	if(Ans4.value.toLowerCase() == "right"){
		form4.innerHTML = "&#10004;  Correct Answer";
		form4.style.backgroundColor = "#d7ffa9";

	}else{
		form4.innerHTML = "&#10060;  Wrong Answer";
		form4.style.backgroundColor = "#ffb6a9";
	}

}	