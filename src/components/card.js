import axios from "axios";

const Card = (article) => {
  const cardDiv = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  cardDiv.appendChild(headline);
  cardDiv.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image);
  author.appendChild(authorName);

  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = article.headline;
  image.setAttribute("src", article.authorPhoto);
  authorName.textContent = article.authorName;

  cardDiv.addEventListener("click", function (event) {
    console.log(article.headline);
  });

  return cardDiv;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
      const keys = Object.keys(res.data.articles);
      const element = document.querySelector(selector);
      keys.forEach((key) => {
        res.data.articles[key].forEach((article) => {
          const finishedCards = Card(article);
          element.appendChild(finishedCards);
        });
      });
    })
    .catch((error) => {
      console.log("there was an error: ", error);
    });
};

export { Card, cardAppender };
