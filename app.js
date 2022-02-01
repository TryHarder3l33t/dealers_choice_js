const express = require("express");
const app = express();
const port = 3077;
const people = require("./sWPeople");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// const name = name;
// const height = height;
// const mass = mass;
// const hair_color = hair_color;
// const skin_color = skin_color;
// const eye_color = eye_color;
// const birth_year = birth_year;
// const gender = gender;

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
            `<div class="card" style="width: 18rem;">
            <img src="https://placeimg.com/640/480/any" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${jedi.name}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
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