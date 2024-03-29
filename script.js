//1.Get all the countries from Asia continent /region using Filter function 


function printData() {
  console.log(JSON.parse(this.responseText));
  const countries = data.filter(country => country.region === "Asia");
  console.log(countries);
}
var request = new XMLHttpRequest();
request.addEventListener("load", printData);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();


//2.Get all the countries with a population of less than 2 lakhs using Filter function


function printData() {
  const data = JSON.parse(this.responseText);
  data.forEach(country => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital[0]);
    console.log("Flag:", country.flags.png);
    console.log("-------------------");
  });
}
var request = new XMLHttpRequest();
request.addEventListener("load", printData);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();


 //3.Print the following details name, capital, flag using forEach function


 function printData() {
  const data = JSON.parse(this.responseText);
  data.forEach(country => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital[0]);
    console.log("Flag:", country.flags.png);
    console.log("-------------------");
  });
}
var request = new XMLHttpRequest();
request.addEventListener("load", printData);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();


//4.Print the total population of countries using reduce function


function printData() {
  const data = JSON.parse(this.responseText);
  const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
  console.log("Total Population:", totalPopulation);
}
var request = new XMLHttpRequest();
request.addEventListener("load", printData);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();


//5.Print the country which uses US Dollars as currency.


function printData() {
  const data = JSON.parse(this.responseText);
  const countriesWithUSD = data.filter(country => country.currencies && country.currencies.USD);
  countriesWithUSD.forEach(country => {
    console.log("Country:", country.name.common);
  });
}
var request = new XMLHttpRequest();
request.addEventListener("load", printData);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
