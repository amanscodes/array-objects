let a = new XMLHttpRequest();
console.log(a);
a.open("GET", "https://restcountries.com/v3.1/all");
a.send();

a.onload = function () {
  if (a.status === 200) {
    const info = JSON.parse(a.response);
    console.log(info);
    console.log(a.status);

    info.forEach((value) => {
      console.log(`
       Name: ${value.name.common}
       Capital: ${value.capital}
       Flag: ${value.flags.svg}
       `);
    });

    const totalPopulation = info.reduce((acc, value) => {
      return acc + value.population;
    }, 0);
    console.log("Total Population: " + totalPopulation);

    const population = info.filter((value) => value.population < 200000);
    console.log(population);

    const asianCountries = info.filter((value) => value.region === "Asia");
    console.log(asianCountries);

    const usdCountries = info.filter((value) => value.currencies && value.currencies.USD);
    console.log('-----Countries using US Dollars (USD):');
    usdCountries.forEach((value) => console.log(value.name.common));
  } else {
    console.error('Failed to retrieve data. Status code:', a.status);
  }
}