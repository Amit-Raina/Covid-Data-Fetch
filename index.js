var searchBar = document.getElementById("inputBar");
var searchButton = document.getElementById("searchButton");

var totalPopulation = document.getElementById("totalPop");
var totalCases = document.getElementById("totalCases");
var newCases = document.getElementById("newCases");
var totalDeath = document.getElementById("totalDeath"); 
var totalRecovered = document.getElementById("totalRecovered");
var activeCase = document.getElementById("activeCase");
var countryName = document.getElementById("countryName");

var covidData;

async function getData (){

    try{
        const data = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${searchBar.value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "cadd204fa5mshd50fdc8e44d9031p1fec8ejsn6df35b84eef0",
                "x-rapidapi-host": "covid-193.p.rapidapi.com"
            }
        })
    
        covidData =  await data.json();
        covidData = covidData['response'][0];
        //console.log(covidData);

        dataFill();
    }
    catch(e){
        alert("Don't use abbreviation, Please Provide valid Country Name !");
    }
}

function dataFill(){
     totalPopulation.innerText = covidData['population'];
     totalCases.innerText = covidData['cases']['total'];
     totalRecovered.innerText = covidData['cases']['recovered'];
     activeCase.innerText = covidData['cases']['active'];
     newCases.innerText = covidData['cases']['new'];
     totalDeath.innerText = covidData['deaths']['total'];
     countryName.innerText = `${covidData['country']}, ${covidData['continent']}`;
}

searchButton.addEventListener('click',function(){
    if(searchBar.value == '' || searchBar.value == !NaN){
        alert("ENTER VALID COUNTRY NAME");
        return;
    }    
    getData();
})


