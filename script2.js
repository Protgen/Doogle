window.onload = function() {
    if (localStorage.getItem("money")) {
        money = parseInt(localStorage.getItem("money"));
        document.getElementById("money").innerHTML = "Money: " + money;
    }
    
    if (localStorage.getItem("cps")) {
        cps = parseInt(localStorage.getItem("cps"));
    }
}

function home(){
    window.location.replace("index.html")
}

function save(){
    localStorage.setItem("money",money)
    localStorage.setItem("cps",cps)
}

function reset(){
    money = 0
    cps = 1
    cps1cost= 10
    cps10cost = 100
    cps100cost = 1000
    document.getElementById("money").innerHTML = "Money: " + money;
    document.getElementById("cps1c").innerHTML = "Cost: " + cps1cost + " Money";
    document.getElementById("cps10c").innerHTML = "Cost: " + cps10cost + " Money";
    document.getElementById("cps100c").innerHTML = "Cost: " + cps100cost + " Money";
    localStorage.setItem("money",money)
    localStorage.setItem("cps",cps)
}

var money = 0
var cps = 1
var cps1cost = 10
var cps10cost = 100
var cps100cost = 1000

function cps1(){
    if(money >= cps1cost){
        cps = cps + 1;
        money = money - cps1cost;
        cps1cost = cps1cost *2;
        console.log(cps);
        console.log(cps1cost);
        save();
        document.getElementById("cps1c").innerHTML = "Cost: " + cps1cost + " Money";
        document.getElementById("money").innerHTML = "Money: " + money;
    }
}

function cps10(){
    if(money >= cps10cost){
        cps = cps + 10;
        money = money - cps10cost;
        cps10cost = cps10cost *2;
        console.log(cps);
        console.log(cps10cost);
        save();
        document.getElementById("cps10c").innerHTML = "Cost: " + cps10cost + " Money";
        document.getElementById("money").innerHTML = "Money: " + money;
    }
}

function cps100(){
    if(money >= cps100cost){
        cps = cps + 100;
        money = money - cps100cost;
        cps100cost = cps100cost *2;
        console.log(cps);
        console.log(cps100cost);
        save();
        document.getElementById("cps100c").innerHTML = "Cost: " + cps100cost + " Money";
        document.getElementById("money").innerHTML = "Money: " + money;
    }
}

function masuno(){
    money = money + cps;
    document.getElementById("money").innerHTML = "Money: " + money;
    save()
    console.log(money)
}