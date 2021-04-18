var accessCityForm = document.getElementById("search-cities");
var inputCity = document.getElementById("city");
var key = "1a76fb17378c5f00abac5599f9298799";

accessCityForm.addEventListener("submit", function(event){
    event.preventDefault();
    var inputCityValue = inputCity.value;    

    //Get the Lattitude and Longitude of the City
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + inputCityValue + "&limit=1&appid=" + key).then(function(response) {

        return response.json().then(function(data) {
            console.log(inputCityValue);
            $('#cityName').text(inputCityValue);
            var lat = data[0].lat;
            var lon = data[0].lon;
            console.log(lat, lon);

            //Get the necessary weather data that is to be displayed on the page
            fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + key + "&units=imperial").then(function(outcome) {
                return outcome.json().then(function(weatherData) {
                    console.log(weatherData);
                    
                    
                    //Current Forecast
                    // $('#city').text(Array);
                    var todayDate = moment().format("dddd, MMMM Do YYYY")
                    $("#currentDay").text(todayDate);
                    var iconcode = weatherData.daily[0].weather[0].icon;
                    var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
                    $('#wicon').attr('src', iconurl);
                    $('#temperature').text(weatherData.current.temp);
                    $('#humidity').text(weatherData.current.humidity + "%");
                    $('#windspeed').text(weatherData.current.wind_speed);
                    $('#uvindex').text(weatherData.current.uvi);
                    
                    //Five Day Forecast
                    var day2 = (weatherData.daily[1].dt)*1000;
                    var day = moment(day2).format("MMM-DD-YYYY");
                    $('#date0').text(day);
                    var iconcode = weatherData.daily[1].weather[0].icon;
                    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    $('#wicon0').attr('src', iconurl);
                    $('#main0').text(weatherData.daily[1].weather[0].main);
                    $('#temperature0').text(weatherData.daily[1].temp.day);                    
                    $('#humidity0').text(weatherData.daily[1].humidity + "%");
                    
                    var day2 = (weatherData.daily[2].dt)*1000;
                    var day = moment(day2).format("MMM-DD-YYYY");
                    $('#date1').text(day);var iconcode = weatherData.daily[2].weather[0].icon;
                    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    $('#wicon1').attr('src', iconurl);
                    $('#main1').text(weatherData.daily[2].weather[0].main);
                    $('#temperature1').text(weatherData.daily[2].temp.day);
                    $('#humidity1').text(weatherData.daily[2].humidity + "%");

                    var day2 = (weatherData.daily[3].dt)*1000;
                    var day = moment(day2).format("MMM-DD-YYYY");
                    $('#date2').text(day);var iconcode = weatherData.daily[3].weather[0].icon;
                    var iconcode = weatherData.daily[3].weather[0].icon;
                    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    $('#wicon2').attr('src', iconurl);
                    $('#main2').text(weatherData.daily[3].weather[0].main);
                    $('#temperature2').text(weatherData.daily[3].temp.day);
                    $('#humidity2').text(weatherData.daily[3].humidity + "%");

                    var day2 = (weatherData.daily[4].dt)*1000;
                    var day = moment(day2).format("MMM-DD-YYYY");
                    $('#date3').text(day);var iconcode = weatherData.daily[4].weather[0].icon;
                    var iconcode = weatherData.daily[4].weather[0].icon;
                    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    $('#wicon3').attr('src', iconurl);
                    $('#main3').text(weatherData.daily[4].weather[0].main);
                    $('#temperature3').text(weatherData.daily[4].temp.day);
                    $('#humidity3').text(weatherData.daily[4].humidity + "%");

                    var day2 = (weatherData.daily[5].dt)*1000;
                    var day = moment(day2).format("MMM-DD-YYYY");
                    $('#date4').text(day);var iconcode = weatherData.daily[5].weather[0].icon;
                    var iconcode = weatherData.daily[5].weather[0].icon;
                    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    $('#wicon4').attr('src', iconurl);
                    $('#main4').text(weatherData.daily[5].weather[0].main);
                    $('#temperature4').text(weatherData.daily[5].temp.day);
                    $('#humidity4').text(weatherData.daily[5].humidity + "%");
                    
                })
                
            })
            
        })    
    })

})

//function WeatherData(weatherData)





//OpenWeatherMap API Key: 1a76fb17378c5f00abac5599f9298799


//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}