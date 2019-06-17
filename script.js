var cntnor = 0;
var pscore = [0, 0, 0, 0, 0];
var scnt = 0;
var nop;
var nor;


function process() {
    nop = document.getElementById("nop").value;
    nor = document.getElementById("nor").value;
    document.getElementById("nop").disabled = true;
    document.getElementById("nor").disabled = true;
    checkc1(nop, nor);
}

function checkc1(nop, nor) {
    if (nop > 5 || nop < 2 || isNaN(nop)) {
        document.getElementById("win").innerHTML = "Incorrect Inputs given...";
        reload();
    } else {
        checkc2(nor);
    }
}

function checkc2(nor) {

    if (nor > 10 || nor < 1 || isNaN(nor))

    {
        document.getElementById("win").innerHTML = "Incorrect Inputs given...";
        reload();
    } else {
        checkc3();
    }
}

function checkc3() {
    if (cntnor < nor) {
        gen();
        cntnor++;
    }
    if (cntnor >= nor) {
        var msc = Math.max.apply(null, pscore);
        reload();
    }
    for (var j = 0; j < nop; j++) {
        if (pscore[j] == msc) {
            scnt++;
        }

    }


    if (scnt >= 2) {
        document.getElementById("win").innerHTML = "No one was a clear Winner here...Try again";
    } else {

        for (var i = 0; i < nop; i++) {
            if (pscore[i] == msc) {
                var z = document.getElementById("win");
                z.innerHTML = "GAME WON BY PLAYER " + (i + 1);
                z.style.fontSize = "25px";
            }
        }
    }
}

function reload() {
    document.getElementById("btn").style.backgroundColor = "red";
    document.getElementById("btn").innerHTML = "REFRESH";
    document.getElementById("btn").onclick = refresh;
}

function refresh() {
    window.location.reload();
}



function gen() {
    document.getElementById("main").innerHTML = "";

    var score = [];
    var players = [];
    var src = [];
    var images = [];
    var name = [];
    var cnt = 0;
    for (var i = 0; i < nop; i++) {
        players[i] = Math.floor(Math.random() * 6) + 1;
        src[i] = "image/" + players[i] + ".png";
        images[i] = document.createElement("img");
        images[i].setAttribute("src", src[i]);
        document.getElementById("main").appendChild(images[i]);
        name[i] = document.createElement("P");
        name[i].style.padding = "20px";
        document.getElementById("main").appendChild(name[i]);
    }
    var max = Math.max.apply(null, players);
    for (var j = 0; j < nop; j++) {
        if (players[j] == max)
            cnt++;
    }


    if (cnt >= 2) {
        document.getElementById("win").innerHTML = "No one was a clear Winner here...Try again";
    } else {

        for (var i = 0; i < nop; i++) {

            if (players[i] == max) {
                document.getElementById("win").innerHTML = "PLAYER " + (i + 1) + " wins this round";
                pscore[i]++;

            }
            name[i].innerHTML = "PLAYER " + (i + 1) + " : SCORE " + pscore[i];
            name[i].style.fontFamily = "'Comfortaa', cursive";
        }
    }

}
