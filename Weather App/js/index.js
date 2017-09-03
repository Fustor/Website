var APPID = "0a1c96e805cf9ffbbb3d7caa806a0095";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;
var description;
var deg = "F";
var lat;
var lon;
var zip;

document.getElementById("F").onclick = function()
{
    if(deg == "F")
    {
        return 0;
    }
    else {
        deg = "F";      
        
	    //navigator.geolocation.getCurrentPosition(showPosition);
        getGeo();
              updateByGeo(lat,lon);
    }
}



document.getElementById("C").onclick = function()
{
    if(deg == "C")
    {
        return 0;
    }
    else {
        deg = "C";      
        
	    //navigator.geolocation.getCurrentPosition(showPosition);
        getGeo();
              updateByGeo(lat,lon);
    }
}
function update(weather) {
    
    /*humidity.innerHTML = weather.humidity;
    wind.innerHtml = weather.wind;
    direction.innerHTML = weather.direction;*/
    loc.innerHTML = weather.location;
    temp.innerHTML = weather.temp + "°" + deg ;
    description.innerHTML = weather.description;
}
function showPosition(position)
{
    updateByGeo(position.coords.latitude, position.coords.longitude);
}
function getGeo() 
{
    var xhr = new XMLHttpRequest();

    var coor = {};
    xhr.open("GET", "http://ip-api.com/json", false);
    xhr.send();

    var coor = JSON.parse(xhr.responseText);
    lat = coor.lat;
    lon = coor.lon;
}
function updateByGeo(lat, lon)
{
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
	"lat=" + lat +
    "&lon=" + lon + 
	"&APPID=" + APPID;
    
    sendRequest(url);
}   
window.onload = function () {
    temp = document.getElementById("temp");
    loc = document.getElementById("city");
    
    description = document.getElementById("description");
    /*humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");*/
    /*if(navigator.geolocation)
           {
               navigator.geolocation.getCurrentPosition(showPosition);
           }
           else {
               var zip =  window.prompt("Could not discover your location. What is your zip code?");
               updateByZip(zip);
           }*/
    
    // zip =  window.prompt("Could not discover your location. What is your zip code?");
              // updateByZip(zip);
              getGeo();
              updateByGeo(lat,lon);
        
    
    
	
    

}



function updateByZip(zip){
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
	"zip=" + zip +
	"&APPID=" + APPID;
    sendRequest(url);
}


function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);
	    var weather = {};
	    weather.code = data.weather[0].id;
	    /*weather.humidity = data.main.humidity;
	    weather.wind = data.wind.speed;*/
        if(deg == "F"){
            weather.temp = toF(data.main.temp);
        }
        else{
            weather.temp = toC(data.main.temp);
        }
        
	    weather.location = data.name;
        weather.description = data.weather[0].description;
	   	
	    update(weather);
	}
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();    
}

function toF(k)
{
    return Math.round(k*(9/5)-459.67);
}
function toC(k)
{
    return Math.round(k-273.15);
}
