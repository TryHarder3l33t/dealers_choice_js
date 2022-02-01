const express = require("express");
const app = express();
const port = 3077;
const people = require("./sWPeople");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//Home Page
app.get("/", (req, res) => {
  const jedis = people.allPeople();
  const html = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
          <title>Hello World</title>
      </head>
      <body>
      ${jedis
        .map(
          (jedi) =>
            `<div class="card" style="width: 18rem;" href="/jedi/${jedi.name}">
            <img src="https://placeimg.com/640/480/tech" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title style=" text-transform: capitalize;" ><a href="/jedi/${jedi.name}">ENGLISH NAME: ${jedi.name}</a></h5>
              <p class="card-text">
                LIFE STATUS: Living
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" style=" text-transform: capitalize;">GENDER: ${jedi.gender}</li>
              <li class="list-group-item">BIRTH YEAR: ${jedi.birth_year}</li>
              <li class="list-group-item" style=" text-transform: capitalize;">BLOOD COLOR: ${jedi.eye_color}</li>
            </ul>
            <div class="card-body"> 
            </div>
          </div>
          <br>
          <br>
          <br>
          `
        )
        .join(" ")}
      
      </body>
      </html>`;

  res.send(html);
});

app.get("/jedi/:name", (req, res) => {
  //const jedis = people.allPeople();
  const jediInfo = people.person(req.params.name);
  const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            <title>Hello World</title>
        </head>
        <body>
       <div class="card" style="width: 18rem;">
              <img src="https://placeimg.com/640/480/tech" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title style=" text-transform: capitalize;" ">ENGLISH NAME: ${jediInfo.name}</h5>
                <p class="card-text">
                  LIFE STATUS: Living
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" style=" text-transform: capitalize;">GENDER: ${jediInfo.gender}</li>
                <li class="list-group-item">BIRTH YEAR: ${jediInfo.birth_year}</li>
                <li class="list-group-item" style=" text-transform: capitalize;">BLOOD COLOR: ${jediInfo.eye_color}</li>
                <li>
                <h1>Chuck Norris Is A Star War</h1>
                <p>
                Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out. When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time.

Chuck Norris was an only child...eventually Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear Chuck Norris has two speeds. Walk, and Kill. Chuck Norris doesn't read books. He stares them down until he gets the information he wants. Chuck Norris does not sleep. He waits. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Massacre. Chuck Norris does not get frostbite. Chuck Norris bites frost. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.

Chuck Norris can write a letter by using sign language. Chuck Norris is currently suing NBC, claiming Law and Order are trademarked names for his left and right legs. 
                </p>
                </li>
              </ul>
              
              <div class="card-body">
                <a href="/" class="card-link">
                  Home
                </a>
                
              </div>
            </div>
            <br>
            <br>
            <br>
           
        
        </body>
        </html>`;

  res.send(html);
});
