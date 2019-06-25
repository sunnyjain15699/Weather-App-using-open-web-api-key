class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('wind');
    }

    paint(weather){
        
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        const temp = weather.main.temp - 273;
        this.string.textContent = `${temp.toFixed(2)}°C`
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity : ${weather.main.humidity}`
        this.dewpoint.textContent = `Relative Pressure : ${weather.main.pressure}`
        this.wind.textContent = `Wind Speed :${weather.wind.speed}`
        this.feelsLike.textContent = `Feels Like : ${weather.weather[0].main}` 
        
    }
}