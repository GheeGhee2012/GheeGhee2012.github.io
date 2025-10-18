const MANAGEACCDIV = document.getElementById("manageAcc");
const CREATEACCDIV = document.getElementById("createAcc");

function setCookie(name, value) {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    const expires = "expires=" + d.toDateString();

    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, val] = c.split('=');
    if (key === name) return val;
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

if (getCookie("username")) {
    window.onload = function() {
        document.getElementById("title").innerText = "Manage Account";
        MANAGEACCDIV.classList.remove("hide");     
};
} else {
    console.log("User has not created a account");
    window.onload = function() {
        document.getElementById("title").innerText = "Create Account";
        CREATEACCDIV.classList.remove("hide");  
    };
}

function createAccount() {
    const usernameInputBox = document.getElementById("usernameInputBox");
    const passwordInputBox = document.getElementById("passwordInputBox");
    if (usernameInputBox.value.length && passwordInputBox.value.length > 5) {
        setCookie("username", usernameInputBox.value);
        setCookie("password", passwordInputBox.value);
        window.location.href = "../index.html";
    }
    
}