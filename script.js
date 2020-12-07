//generate random password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //possible password values
    
 var upper = document.getElementById("upper");
 var lower = document.getElementById("lower");
 var symbol = document.getElementById("symbol");
 var number = document.getElementById("number");
 
 
 if (upper.checked ==true&& lower.checked==true && number.checked==true && symbol.checked==true){ 
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 }
 else if (lower.checked==true && number.checked==true && symbol.checked==true){ 
let values1 = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 }
 else if (upper.checked==true&&lower.checked==true && number.checked==true ){ 
let values1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 }
 else if (upper.checked==true&&lower.checked==true && symbol.checked==true ){ 
let values1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 }
 else if (lower.checked==true && symbol.checked==true ){ 
let values1 = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 }
else if (lower.checked==true && number.checked==true ){ 
let values1 = "abcdefghijklmnopqrstuvwxyz1234567890";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 }

else if (upper.checked==true && number.checked==true && symbol.checked==true){ 
let values1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 }
 
 else if (upper.checked==true&&lower.checked==true && symbol.checked==true ){ 
let values1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 }
 else if (upper.checked==true && symbol.checked==true ){ 
let values1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 }
else if (upper.checked==true && number.checked==true ){ 
let values1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 } 
 //
else if (lower.checked==true && upper.checked==true ){ 
let values1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 } 
 else if (number.checked==true && symbol.checked==true ){ 
let values1 = "1234567890!@#$%^&*()_+";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 } 
 else if (number.checked==true ){ 
let values1 = "1234567890";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 } 
 
 
 else if (symbol.checked==true){ 
let values1 = "!@#$%^&*()_+";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 } 
else if (lower.checked==true  ){ 
let values1 = "abcdefghijklmnopqrstuvwxyz";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 }   
 else if (upper.checked==true  ){ 
let values1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 }   
 else if (number.checked==true){ 
let values1 = "1234567890";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
 

 
 
 }  
else if (symbol.checked==true  ){ 
let values1 = "!@#$%^&*()_+";
    let password = "";

    //create for loop to choose password characters
    for(var i = 0; i <= complexity; i++){
        password = password + values1.charAt(Math.floor(Math.random() * Math.floor(values1.length - 1)));
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";

 
 }   
 else{
	alert("One Field is Compuslory"); 
 } 
}

//set default length display of 25
document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}

//function to copy password to clipboard
function copyPassword(){

  var  copyText=  document.getElementById("display");
copyText.select();
    document.execCommand("Copy");

    alert("Copied the text: " + copyText.value);

}