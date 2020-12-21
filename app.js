

$(".weather").on("click",function(){
    $("#modal").toggleClass("show");
})



let city = "portland"
let state = "oregon"
let weatherKey = "387a045260f8855f8136c665d33b67e1"
let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&APPID=${weatherKey}`;

$.ajax({
    url: weatherURL,
    method: "GET"
}).then(function(data){
    console.log(data)
    let kelvin = data.main.temp;
    let farenheight = (kelvin - 273.15) * 9/5 + 32;
    let description = data.weather[0].description;
    let icon =  "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    $("#city").html(data.name + ", Oregon")
    $("#temp").html(Math.floor(farenheight))
    $("#desc").html(description);
    $("#weathericon").attr("src",icon)
    console.log(farenheight)
})