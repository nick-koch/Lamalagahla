var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var logo_w = 467;
var logo_h = 537;
var factor;

if (window.innerWidth > window.innerHeight){
    factor = window.innerHeight/logo_h/1.7;  
} else {
    factor = window.innerWidth/logo_w/1.7;;   
}

canvas.height = logo_h*factor;
canvas.width = logo_w*factor; 


console.log(canvas);

var anim_array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,2,2,2,3,3,3,2,2,2,3,3,3,1,1,1,1,1,1,1,1,4,4,"g0","g1","g2","g3","g4","g5","g6","g7","g8","g9","g10","g10","g11","g11","g11","g11","g12","g12","g12",5,5];
var index = 0;

var start_playing = true;

function animate(){

    var img = new Image();

    if (String(anim_array[index]).includes("g")){
        var i = parseInt(anim_array[index].replace("g", ""));
        img.src = "assets/logo/gum.svg";
        img.onload = function() {
            var gum_w = canvas.width/30+i*15;
            var gum_h = canvas.height/30+i*15;
            ctx.drawImage(img, (canvas.width/100*49.9)-(gum_w/2), (canvas.height/100*58)-(gum_h/2), gum_w, gum_h);
        }
    } else {
        if(anim_array[index] == 2 && start_playing){
            document.getElementById("gum").play();
            document.getElementById("gum").volume = 0;
            start_playing = false;
        } 
        if (mute && just_changed_mute){
            document.getElementById("gum").volume = 0;
        } else if (!mute && just_changed_mute) {
            document.getElementById("gum").volume = 1;
        }

        img.src = "assets/logo/Lama" + anim_array[index] + ".svg";
        img.onload = function() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
    }

    index++;
    if(index >= anim_array.length){
        index = 0;
        start_playing = true;
    }
}



var interval_id = setInterval(animate, 1000/10);

window.addEventListener('resize', function(event) {
    canvas.width = page.offsetWidth;
    canvas.height = page.offsetHeight;
}, true);

var mute = true;
var just_changed_mute = false;
function toggleSound()
{
    if(mute){
        mute = false;
        just_changed_mute = true;
        document.getElementById("gum").volume = 1;
    }else{
        mute = true;
        just_changed_mute = true;
        // document.getElementById("chewing").pause();
        // document.getElementById("pop").pause();
        document.getElementById("gum").volume = 0;
    }
}