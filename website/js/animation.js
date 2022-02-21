var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var anim_array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,2,2,2,3,3,3,2,2,2,3,3,3,1,1,1,1,1,1,1,1,4,4,"g0","g1","g2","g3","g4","g5","g6","g7","g8","g9","g10","g10","g11","g11","g11","g11","g12","g12","g12",5,5];
var index = 0;

var leafs_left = new Image();
var leafs_right = new Image();
var date = new Image();
leafs_left.src = "assets/logo/leafs_left.svg";
leafs_right.src = "assets/logo/leafs_right.svg";
date.src = "assets/logo/date.svg";


function animate(){

    var img = new Image();

    var lama_w = window.innerWidth/1.8;
    var lama_h = window.innerHeight/1.8;

    if (String(anim_array[index]).includes("g")){
        var i = parseInt(anim_array[index].replace("g", ""));
        img.src = "assets/logo/gum.svg";
        img.onload = function() {
            var gum_w = lama_w/30+i*15;
            var gum_h = lama_h/30+i*15;
            ctx.drawImage(img, (canvas.width/100*49.9)-(gum_w/2), (canvas.height/100*50)-(gum_h/2), gum_w, gum_h);
        }
    } else {
        if(anim_array[index] == 2){
            document.getElementById("gum").play();
        } 
        if (mute){
            document.getElementById("gum").volume = 0;
        } else {
            document.getElementById("gum").volume = 1;
        }
        // if(anim_array[index] == 5 && !mute){
        //     document.getElementById("pop").play();
        // }
        img.src = "assets/logo/Lama" + anim_array[index] + ".svg";
        img.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if(window.innerWidth > window.innerHeight){ 
                ctx.drawImage(leafs_left, -canvas.width/10*4, canvas.height/10, canvas.width, canvas.height);
                ctx.drawImage(leafs_right, canvas.width/10*4, canvas.height/10, canvas.width, canvas.height);
                ctx.drawImage(date, canvas.width/2-canvas.width/10, canvas.height/10*7.5, canvas.width/5, canvas.height/5);
            }else {
                ctx.drawImage(date, canvas.width/2-(canvas.width/2)/2, canvas.height/10*6, canvas.width/2, canvas.height/2);
            }
            ctx.drawImage(img, canvas.width/2-lama_w/2, canvas.height/2-lama_h/1.7, lama_w, lama_h);

        }
    }

    index++;
    if(index >= anim_array.length){
        index = 0;
    }
}



var interval_id = setInterval(animate, 1000/10);

window.addEventListener('resize', function(event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}, true);

var mute = true;
function toggleSound(img)
{
    if(mute){
        img.src = "assets/logo/unmute.png";
        mute = false;
        document.getElementById("gum").volume = 1;
    }else{
        img.src = "assets/logo/mute.png";
        mute = true;
        // document.getElementById("chewing").pause();
        // document.getElementById("pop").pause();
        document.getElementById("gum").volume = 0;
    }
}