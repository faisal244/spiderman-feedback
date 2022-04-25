// target start button
const startButton = document.getElementById("start-btn");

// target banner section
const bannerSection = document.getElementById("banner");

// target main element
const mainElement = document.getElementById("main");

// current question index
let questionIndex = 0;

// all options
const options = ["Yes", "No", "Maybe"];

// all questions array
const questions = [
  {
    text: "Would you watch the movie again?",
    options,
  },
  {
    text: "Would you like to see a prequel to this Spider-Man series?",
    options,
  },
  {
    text: "Would you like to watch Venom and Spider-Man battle in the next movie?",
    options,
  },
  {
    text: "Would you like to watch Miles Morales and Spider-Man in the next movie?",
    options,
  },
  {
    text: "Would you like to watch a Spider-Man series on just Miles Morales?",
    options,
  },
  {
    text: "Would you like watching an animated series on Spider-Man?",
    options,
  },
  {
    text: "Would you like a new sequel to be released in the future?",
    options,
  },
  {
    text: "Would you recommend watching the movie to friends and family?",
    options,
  },
];

// function to render question to page
const renderQuestion = () => {
  console.log("render question");

  // get current question
  const currentQuestion = questions[questionIndex];

  // create section
  const section = document.createElement("section");
  section.setAttribute("class", "content-section question-container");

  // create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-title");
  // TODO: this should be the dynamic question title
  h2.textContent = `${questionIndex + 1}. ${currentQuestion.text}`;

  // create ul and append 3 li
  const ul = document.createElement("ul");
  ul.setAttribute("class", "feedback-list");

  // TODO: loop over options to create and append li to ul
  const li1 = document.createElement("li");
  li1.setAttribute("class", "list-item");
  li1.textContent = currentQuestion.options[0];

  const li2 = document.createElement("li");
  li2.setAttribute("class", "list-item");
  li2.textContent = currentQuestion.options[1];

  const li3 = document.createElement("li");
  li3.setAttribute("class", "list-item");
  li3.textContent = currentQuestion.options[2];

  ul.append(li1, li2, li3);

  // append h2 and ul to section
  section.append(h2, ul);

  // append question section to main element
  mainElement.append(section);
};

// function to remove banner from page
const removeBanner = () => {
  console.log("remove banner");
  bannerSection.remove();
};

// declare the event handler function for start button click
const handleStartButtonClick = () => {
  console.log("start button clicked");

  // remove banner section
  removeBanner();

  // render question
  renderQuestion();
};

// add event listener to start button
startButton.addEventListener("click", handleStartButtonClick);