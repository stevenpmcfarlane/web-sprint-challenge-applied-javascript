import axios from "axios";

const Tabs = (topics) => {
  const topicsDiv = document.createElement("div");
  const jsTab = document.createElement("div");
  const bootstrapTab = document.createElement("div");
  const techTab = document.createElement("div");

  topicsDiv.appendChild(jsTab);
  topicsDiv.appendChild(bootstrapTab);
  topicsDiv.appendChild(techTab);

  topicsDiv.classList.add("topics");
  jsTab.classList.add("tab");
  bootstrapTab.classList.add("tab");
  techTab.classList.add("tab");

  jsTab.textContent = topics[0];
  bootstrapTab.textContent = topics[1];
  techTab.textContent = topics[2];

  return topicsDiv;
};
// TASK 3
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
// then the function returns the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">technology</div>
// </div>
//

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  //It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios
    .get(`https://lambda-times-api.herokuapp.com/topics`)
    .then((res) => {
      const finishedTab = Tabs(res.data.topics);
      const element = document.querySelector(selector);
      element.appendChild(finishedTab);
    })
    .catch((error) => {
      console.log("there was an error :", error);
    });
};

export { Tabs, tabsAppender };
