
const weatherApp = (function () {

    let cityInput;
    let countryDropdown;
    let radios;
    let weatherInfo;

    const initWeatherApp = () => {
        cityInput = document.getElementById("cityInput");
        countryDropdown = document.getElementById("countryDropdown");
        radios = document.querySelectorAll("[name='searchType']");
        weatherInfo = document.querySelector(".weather-info");
        initWeatherAppEvents()
    }

    const initWeatherAppEvents = () => {
        radios.forEach(radio => {
            radio.addEventListener("change", function () {
                if (this.value === "city") {
                    cityInput.hidden = false;
                    countryDropdown.hidden = true;
                } else {
                    cityInput.hidden = true;
                    countryDropdown.hidden = false;
                    // Fetch cities for a given country and populate dropdown
                    // Implement this part
                }
            });
        });
        document.getElementById("searchButton").addEventListener("click", function () {
            const isCitySearch = document.querySelector("[name='searchType']:checked").value === "city";
            
            if (isCitySearch) {
                // Make an API call to openweathermap using the city input
                // Implement this part
            } else {
                // Get selected city from dropdown and make an API call to openweathermap
                // Implement this part
            }
        });
    };


    return {
        init: function () {
            initWeatherApp();
        }
    }
})();



document.addEventListener("DOMContentLoaded", function() {
    weatherApp.init();
});



