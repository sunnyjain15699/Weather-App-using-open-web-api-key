class Weather {
    constructor(city){
        this.apikey = 'your api key here';
        this.city = city
    }

    async getWeather(){
        const response  = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apikey}`);
        const res = await response.json();
        return res;
    }

    async changeLocation(city){
        this.city = city;
    }

}