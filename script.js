//a.Get all the countries from the Asia continent /region using the Filter function
  var request = new XMLHttpRequest();
  request.open('GET','https://restcountries.com/v3.1/all','true');
  request.send();
  request.onload=function(){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
return element.name;
        }
    }) 
    console.log (asia);
}

// b.Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function(){
  var countryData=JSON.parse(this.response);
  const popul=countryData.filter((element)=>{
    return element.population<200000;
  })
  console.log(popul);}

  //c.Print the following details name, capital, flag using forEach function
  var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function(){
  var countryData=JSON.parse(this.response);
  const asia=countryData.filter((element)=>{
    console.log(element.name,element.capital,element.flag);
  })}

  //d.Print the total population of countries using reduce function
  var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function(){
  var countryData=JSON.parse(this.response);
  const population = countryData.reduce((acc,element)=>{
    return acc+element.population;
  },0)
  console.log(population); }

  //e.Print the country which uses US Dollars as currency.
  var request = new XMLHttpRequest();
  request.open('GET','https://restcountries.com/v3.1/all','true');
  request.send();
  request.onload=function(){
    var countryData=JSON.parse(this.response);
    var curr=[];
    for(i=0;i<data.length;i++){
        if(data[i].currencies[0].code==="USD")
        {
            console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
        }
    }
}