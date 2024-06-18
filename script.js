const cityName = document.getElementById('city-name');
const cityTemp = document.getElementById('temperature');
const image =document.getElementById('image');
const btn = document.getElementById('btn');
const cityTempTxt =document.getElementById('temperature-text');
const nameCity= document.getElementById('name');
async function getData(city){
    const promise= await fetch(`https://api.weatherapi.com/v1/current.json?key=6a3870c7547b49b0af1161941242105&q=${city}&aqi=yes`);
    return await promise.json();

}
btn.addEventListener('click',async()=>{
    const value= cityName.value;
    // console.log(value);
    const result = await getData(value);
    // console.log(result);
    nameCity.innerHTML= result.location.name;
    cityTemp.innerHTML=result.current.temp_c;
    cityTempTxt.innerHTML=result.current.condition.text;
    image.src=result.current.condition.icon;
});