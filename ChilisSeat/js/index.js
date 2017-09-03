const divs = Array.from(document.querySelectorAll('.table'));
for(var i = 0;i<divs.length;i++) {//creates a table object for each table div
    var name=divs[i].id ;
    window[name] = new table(name,'clean',0);
}
var order = [];
function addToOrder(tableName,tableStatus) {
    if(order.length > 8) {
        order.shift();
    }
    order.push( (document.getElementById(tableName).innerHTML) + ':' + tableStatus + '<br>');
    var line = '';
    for(var i = 0;i<order.length;i++) {
        line+= order[i] + '<br>';
    }
    document.getElementById('order').innerHTML = line;
}
function isclick() {
    console.log('clicked');
    var name = this.id;
    var table = window[this.id];
    console.log(table.number);
    table.cycleStatus();
    table.checkStatus();
    addToOrder(table.number, table.status);
}
divs.forEach(function(div) {
    div.addEventListener('click', isclick);
});
var openers;
var middle;
var box;
var elbow;
var closers;
var activeSection;
function threeClick() {
      openers = Array.from(document.querySelectorAll('.to'));
     for(var i = 0;i<openers.length;i++) {
         openers[i].style.borderColor = "red";
     }
       middle = Array.from(document.querySelectorAll('.tm'));
    for(var i = 0;i<middle.length;i++) {
        middle[i].style.borderColor = "yellow";
    }
      closers = Array.from(document.querySelectorAll('.tc'));
    for(var i = 0;i<closers.length;i++) {
        closers[i].style.borderColor = "purple";
    }
    activeSection = '3zone';
}
function fourClick() {
    openers = Array.from(document.querySelectorAll('.fo'));
    for(var i = 0;i<openers.length;i++) {
        openers[i].style.borderColor = "red";
    }
    elbow= Array.from(document.querySelectorAll('.fe'));
    for(var i = 0;i<elbow.length;i++) {
        elbow[i].style.borderColor = "yellow";
    }
    box= Array.from(document.querySelectorAll('.fb'));
    for(var i = 0;i<box.length;i++) {
        box[i].style.borderColor = "blue";
    }
    closers = Array.from(document.querySelectorAll('.fc'));
    for(var i = 0;i<closers.length;i++) {
        closers[i].style.borderColor = "purple";
    }
    activeSection = '4zone';
}
document.getElementById('3z').addEventListener('click', threeClick);
document.getElementById('4z').addEventListener('click', fourClick);
