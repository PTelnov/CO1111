
var timeF = new Date().getTime();
var data;

function goToContrast()
{
    setCookie("name", document.getElementById("name").value, 1);
    window.location.href = 'contrast.html';
}

function goToWithout()
{
    setCookie("name", document.getElementById("name").value, 1);
    window.location.href = 'without.html';
}

function setCookie(cookieName, cookieValue, expireDays) { // code from the https://www.w3schools.com
    let date = new Date();
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=start.html";
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}
function getCookie(cname) {   // code from the https://www.w3schools.com
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function contrast()
{
    if (document.getElementById("contrastAns").value == "generosity")
    {
        let timeFinal = new Date().getTime();
        timeFinal -= timeF;
        data = getCookie("name")+ "  :  " + timeFinal + "With Contrast";
        document.write(data);
    }
}

function without()
{
    if (document.getElementById("withoutAns").value == "integrity")
    {
        let timeFinal = new Date().getTime();
        timeFinal -= timeF;
        timeFinal/=1000;
        data = getCookie("name")+ "  :  " + timeFinal + "Without Contrast";
        setCookie("data", data, 1);
        writeIn();
        document.write(data);
    }
}
