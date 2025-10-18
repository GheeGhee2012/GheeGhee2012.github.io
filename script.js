const mainAccBtn = document.getElementById("mainAccBtn");
const manageAccBtn = document.getElementById("manageAccBtn");

let openedAccDropdown = false;

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, val] = c.split('=');
    if (key === name) return val;
  }
  return null;
}

let createdAccount = false;

if (getCookie("username")) {
    mainAccBtn.innerText = getCookie("username") + " >";
    createdAccount = true;
} else {
    mainAccBtn.innerText = "Create Gravical Account";
    let createdAccount = false;
}

function accOnClick() {
    console.log("Pressed Account button")
    if (createdAccount) {
        if (openedAccDropdown = false) {
            manageAccBtn.classList.remove("hide");
            manageAccBtn.innerText = getCookie("username") + " <";
            openedAccDropdown = true;
        } else {
            manageAccBtn.classList.add("hide");
            manageAccBtn.innerText = getCookie("username") + " >";
            openedAccDropdown = false;
        }
    } else {
        window.location.href = "https://gheeghee2012.github.io/manageaccount/index.html";
    }
}