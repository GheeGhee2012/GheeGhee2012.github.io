const continueButton = document.getElementById("continue");
const websiteNameBox = document.getElementById("websitename");

let websiteName = websiteNameBox.value;

function onclick(){
    websiteName = websiteNameBox.value;
    if (websiteName == "gravical"){
        window.location.href = "https://gheeghee2012.github.io/gravical"
        console.log("Redirecting to https://gheeghee2012.github.io/gravical");
    }
}