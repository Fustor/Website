var display = document.getElementById('display');
const buttons = Array.from(document.getElementsByTagName('button'));
var clicks = '';
buttons.forEach(but => but.addEventListener('click',getClicked));
function getClicked(e) {
    var val = this.textContent;
    if(val == "C") {
        clicks = '';
        display.innerHTML = '';
    }
    else if(val=="+") {
        clicks+=val;
        //console.log(clicks);
        display.innerHTML = clicks;
    }
    else if(val=="-") {
        clicks += val;
        display.innerHTML = clicks;
    }
    else if(val=="*") {
        clicks+=val;
        display.innerHTML = clicks;
    }
    else if(val=="/") {
       clicks+=val;
       display.innerHTML = clicks;
    }
    else if(val=="=") {
        display.innerHTML = eval(clicks);
    }
    else { 
        clicks+=val;
        display.innerHTML = clicks;
    }
    
}
/*var body = document.getElementById('body');
var width = body.width;
body.css('height', (9/16)width);*/