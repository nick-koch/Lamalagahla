fetch('nav.html')
.then(res => res.text())
.then(text => {
    let elem = document.querySelector("div#navbar");
    elem.innerHTML = text;

    if (location.href.includes("index.html")) {
        console.log("index.html");
        var logo = document.getElementById("logo");
        logo.style.display = "none";
    }
})