function clean() {
    document.getElementById("red").style.backgroundColor = "gray";
    document.getElementById("yellow").style.backgroundColor = "gray";
    document.getElementById("green").style.backgroundColor = "gray";
}

// Functions for the traffic light buttons
function stop() {
    clean();
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("msg").innerHTML = "STOP! Red Light";
}

function wait() {
    clean();
    document.getElementById("yellow").style.backgroundColor = "yellow";
    document.getElementById("msg").innerHTML = "WAIT! Yellow Light";
}

function go() {
    clean();
    document.getElementById("green").style.backgroundColor = "green";
    document.getElementById("msg").innerHTML = "GO! Green Light";
}

// Form Submit Function
function send() {
    var n = document.getElementById("driver").value;
    var t = document.getElementById("type").value;
    var d = document.getElementById("dest").value;
    var p = document.getElementById("purpose").value;

    document.getElementById("result").innerHTML = "Registered: " + n + ", " + t + ", " + d + ", " + p;
}