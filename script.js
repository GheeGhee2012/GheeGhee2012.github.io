const passwdinput = document.getElementById("passwdinput");
const pass = document.getElementById("pass");
const web = document.getElementById("web");

function get_pass(){  
  var passwdValue = passwdinput.value;
  if (passwdValue == "turkey1636?"){
    pass.classList.add("hidden");
    web.classList.remove("hidden");
  }
  if (passwdValue != "turkey1636?"){
    console.log("Incorrect");
  }
}