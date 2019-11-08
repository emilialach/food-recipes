// url https://www.food2fork.com/api/
// https://www.food2fork.com/api/search
// https://www.food2fork.com/api/get
// API key  2612581dd4b37b015d978b9e8b5a3dea





const app = document.getElementById("imgcontainer");
const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(container);

const baseUrl = "https://www.food2fork.com/api/";
const apiKey = "2612581dd4b37b015d978b9e8b5a3dea";

const getUrl = baseUrl + "get/?key=" + apiKey;
const searchUrl = baseUrl + "search/?key=" + apiKey + "&q";
// const searchUrl = baseUrl + 'search/?key=' + apiKey + '&q' + '&page=2';



// wysłać zapytanie  do url
function getRecipes() {
  let callback = function(data) {
    var dataJ = JSON.parse(data);
    // dataJ.recipes[1].f2f_url
    
    // dataJ.forEach(recipes => {
      console.log(dataJ);

      const foodCard = document.createElement("div");
      foodCard.setAttribute("class", "imgcontainer");

      const foodOneCard = document.createElement("div");
      foodOneCard.setAttribute("class", "one-recipe");
//   foodOneCard.textContent("");

//   tutaj powinno wjechać zdjęcie, tytuł autor
      const foodTitle = document.createElement("span");
      foodTitle.setAttribute = ("class", "foodTitle");
    //   foodTitle.textContent = ("");

      const p = document.createElement("p");
      p.textContent = recipes.publisher;

      container.appendChild(imgcontainer);
      foodCard.appendChild(span);
      foodOneCard.appendChild(span);
      foodTitle.appendChild(span);
      foodCard.appendChild(p);
    // });
  };
  httpGetAsync(searchUrl, callback);
}

// GET Async
function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

// 1) Dane (parse JSON do zmiennej, dodanie do HTML (obrazek, title, url do przepisu) + css)     var dataJ = JSON.parse(data);
// paginacja &page=NUMBER       const searchUrl = baseUrl + 'search/?key=' + apiKey + '&q' + '&page=2';

// https://www.food2fork.com/about/api , https://www.food2fork.com/user/api# , https://swapi.co/documentation#wookiee
// getRecipes()
// data.publisher
// JSON.parse(data)
// var dataX = JSON.parse(data)

