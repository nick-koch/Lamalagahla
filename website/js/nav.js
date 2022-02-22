fetch("nav.html")
  .then((res) => res.text())
  .then((text) => {
    let elem = document.querySelector("div#navbar");
    elem.innerHTML = text;

    if (location.href.includes("index.html")) {
      console.log("index.html");
      var logo = document.getElementById("logo");
      logo.style.display = "none";
    }

    var pathname = document.location.pathname;
    console.log("the pathname is: ", pathname);

    var nav_items = document.getElementsByClassName("nav-link");
    console.log(nav_items);

    for (var i = 0; i < nav_items.length; i++) {
        console.log(nav_items[i].href);
        if (nav_items[i].href.includes(pathname)) {
            nav_items[i].className += " active";
        }
    }
  });