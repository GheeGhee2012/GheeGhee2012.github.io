const passwdinput = document.getElementById("passwdinput");
const passwdtext = document.getElementById("passwdtext");
const pass = document.getElementById("pass");
const web = document.getElementById("web");

function get_pass(){  
  var passwdValue = passwdinput.value;
  if (passwdValue == "gec-312"){
    pass.classList.add("hidden");
    web.classList.remove("hidden");
  }
  if (passwdValue != "gec-312"){
    window.setTimeout(window.close, 2000)
  }
}