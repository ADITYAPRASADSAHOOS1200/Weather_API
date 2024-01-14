const APIkey="84daa055c7c80dfa65e72535c4425e4a";


// const apiURl=`https://api.openweathermap.org/data/2.5/weather?q=&appid=${APIkey}&units=metric `


const searchbox=document.querySelector(".search input")
console.log(searchbox);
const searchbtn=document.querySelector(".search button")
console.log(searchbtn);
const weather=document.querySelector(".weather-icon")
console.log(weather);




async function checkweather(city){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric `)
   
    if(response.status ==  404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
else{
    let data=await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°C"
    document.querySelector(".humidity").innerHTML=data.main.humidity + "% "
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr"
    
     if(data.weather[0].main == 'Haze' ){
          weather.src="images/mist.png"
     } 
    else if(data.weather[0].main == 'Clear' ){
          weather.src="images/clear.png"
     }
      
    else if(data.weather[0].main == 'Drizzle' ){
          weather.src="images/drizzle.png"
     }
     
    else if(data.weather[0].main == 'Smoke' ){
          weather.src="images/snow.png"
     }
    else if(data.weather[0].main == 'Mist'  ){
          weather.src="images/mist.png"
     }
     else if(data.weather[0].main == 'Rain'){
           weather.src="images/rain.png"
     }
 
     else if(data.weather[0].main == 'Clouds'){
           weather.src="images/clouds.png"
     }

     document.querySelector(".weather").style.display="block";
     document.querySelector(".error").style.display="none"
     
    }
     
 
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})


