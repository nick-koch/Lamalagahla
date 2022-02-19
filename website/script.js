var popupOn = false;

var controller = new ScrollMagic.Controller();

var animate_logo_scene = new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    offset: -300
})
.setClassToggle("#animate_logo", "anim_logo")
.addIndicators({name: "anim_logo"})
.addTo(controller);

var nav_texts = []
nav_texts.push(document.getElementById("navT1"));
nav_texts.push(document.getElementById("navT2"));
nav_texts.push(document.getElementById("navT3"));
nav_texts.push(document.getElementById("navT4"));

var from_top = true;

var anim_nav_text_scene = new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    offset: 350,
    duration: 1
})
.on("enter", function () {
    console.log(from_top);

    var navbar = document.getElementById("navbar");
    
    if (from_top == true) {
        for (i in nav_texts) {
            nav_texts[i].style.transition= "color 2s";
            nav_texts[i].style.color = "#fedeb4";
            // document.getElementById("navbar").style.transition= "background-color 2s";;
            navbar.style.backgroundColor = "#2F1A30";
        }
        from_top = false;
    } else {
        console.log('test');
        
        for (i in nav_texts) {
            console.log('test');
            
            nav_texts[i].style.transition= "color 2s";
            nav_texts[i].style.color = "";
            // document.getElementById("navbar").style.transition= "background-color .2s";;
            navbar.style.backgroundColor = "";
        }
        from_top = true;
    }

})
// .on("leave", function () {
//     // reset style
//     for (i in nav_texts) {
//         // nav_texts[i].style.transition= "color 5s";
//         nav_texts[i].style.color = ""
//     }
// })
.addIndicators({name: "nav_text"})
.addTo(controller);

// function topFunction() {
//     // var elmnt = document.getElementById("top");
//     // elmnt.scrollIntoView(true);   
//     console.log(window);
    
//     window.scrollTo(0, -1000);
// }

//   function openInfo() {
//     document.getElementById("infoPopUp").style.display = "block";
// }
  
// function closeInfo() {
//     document.getElementById("infoPopUp").style.display = "none";
// }

// function displayInfo(value) {
//     document.getElementById("icon_wrapper").style.backgroundColor = "black";
//     console.log(value); 
// }

// console.log(poUpTextList);

popups = [anreisePop, campingPop, ticketsPop, foodPop, gelaendePop, abcPop];

function poCounter(text_number) {      
    if (popupOn) {
        showIcons(true);
        showPopUp(false);        
    } else {
        showIcons(false);
        showPopUp(true, text_number);
        console.log(text_number);
    }
    popupOn = !popupOn;
}

function showPopUp(value, text_number) {
    var icons = document.getElementById("icons");
    var popup = document.getElementById("popup");       
    console.log(text_number);
    
    if (text_number != null) {
        console.log(popups[text_number].text);
        popup.innerText = popups[text_number].text;
        popup.style.height = icons.clientHeight + "px";
    }
    switch (value) {
        case true:
            fade_in(popup, 3);
            break;
        case false:
            fade_out(popup, 3);
            break;
    }
}

function showIcons(value) {
    var icons = document.getElementById("icons");
    switch (value) {
        case true:
            fade_in(icons, 3);
            break;
        case false:
            fade_out(icons, 3);
            break;
    }
}

function fade_out(element, speed) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, speed);
}

function fade_in(element, speed) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, speed);
}
  