const  btnGetWeather =  document.querySelector('#btn_get_weather');
btnGetWeather.addEventListener('click', function(event){
    event.preventDefault()
    getWeather(event);
});

const getWeather = (e) => {
    e.preventDefault();
    const city = document.querySelector('#ciudad').value;
    const country = document.querySelector('#pais').value;
    const apiKey = 'f247353a0653b47047ee1d9af9390ba6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`; 
    queryApi(url);
}

const queryApi = (url) => {
    
    fetch(url)
	.then(response => response.json())
	.then(response =>{
        const {name, main:{temp, temp_min, temp_max}} = response;
        printWeather(response);
    })
	.catch(err => console.error(err));

}
const printWeather = (data) => {

    const {name, main:{temp, temp_min, temp_max}} = data;
    const weather = document.querySelector('#resultado');

    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title', 'text-center', 'text-2xl', 'font-sans', 'text-white');
    cardTitle.innerHTML = `Clima en ${name}`;
    const cardText = document.createElement('p');
    cardText.classList.add('card-text', 'text-center', 'text-white', 'text-4xl', 'font-sans', 'font-bold');
    cardText.innerHTML = `${temp}°C`;
    const cardText3 = document.createElement('p');
    cardText3.classList.add('card-text', 'text-center', 'text-white','text-base', 'font-sans');
    cardText3.innerHTML = `Max: ${temp_max}°C`;
    const cardText2 = document.createElement('p');
    cardText2.classList.add('card-text','text-center', 'text-white','text-base', 'font-sans');
    cardText2.innerHTML = `Min: ${temp_min}°C`;
    weather.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardText3);
    cardBody.appendChild(cardText2);
    

}