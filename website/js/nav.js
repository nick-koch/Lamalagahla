fetch('nav.html')
.then(res => res.text())
.then(text => {
    let elem = document.querySelector("div#navbar");
    elem.innerHTML = text;
})