const weather = new Weather('Mumbai');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('w-change-btn').addEventListener('click',() =>{
    const city = document.getElementById('city').value;

    weather.changeLocation(city)
    getWeather().then(data => ui.paint(data)) 
                .catch(err => console.log(err))

    $('#locModal').modal('hide')
})

function getWeather() {
weather.getWeather()
        .then(data => ui.paint(data)) 
        .catch(err => console.log(err))
}