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

// event handler function to handle click events in question section
// this function decides what happens next
const handleOptionClick = (event) => {
  console.log ('clicked somethere in question section')

  // get current target 
  const currentTarget = event.currentTarget;

  // get target 
  const target = event.target;
  // console.log (target.tagName)

  // check if click originates from li only
  // check if target element is li element
  if (target.tagName === 'LI') {
    // get the option the user clicked on
    const value = target.getAttribute('data-value');
    console.log(value);
    // get the question the user answered
    const question = questions[questionIndex].text;
    console.log(question);
    // build an answer object that contains the question and answer
    const answer = {
      question,
      value,
    };
    // TO DO: store answer in local storage 
    
    storeAnswerInLS(answer);
    
    // remove question
    removeQuestion();

    if (questionIndex < questions.length - 1) {
      // go to next question if not the last question
      // increment the question index by 1
      questionIndex +=1;

      // render question
      renderQuestion();
      
    } else {
      // if last question, then render results
     renderResults ();

     renderForm();
      
    }

  }
}

// function to render the results of the
renderResults = () => {
  console.log('render results')
}

// function to render the form 
renderForm = () => {
  console.log('render form')
}

// function to render question to page
const renderQuestion = () => {
  console.log("render question");

  // get current question
  const currentQuestion = questions[questionIndex];

  // create section
  const section = document.createElement("section");
  section.setAttribute("class", "content-section question-container");
  section.setAttribute("id", "question-container");

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
  li1.setAttribute("data-value", currentQuestion.options[0]);

  li1.textContent = currentQuestion.options[0];

  const li2 = document.createElement("li");
  li2.setAttribute("class", "list-item");
  li2.setAttribute("data-value", currentQuestion.options[1]);

  li2.textContent = currentQuestion.options[1];

  const li3 = document.createElement("li");
  li3.setAttribute("class", "list-item");
  li3.setAttribute("data-value", currentQuestion.options[2]);

  li3.textContent = currentQuestion.options[2];

  ul.append(li1, li2, li3);

  // append h2 and ul to section
  section.append(h2, ul);

  // append question section to main element
  mainElement.append(section);

  // add event listener on question section, but only after the whole section has been rendered
  section.addEventListener('click', handleOptionClick)
};

// function to remove banner from page
const removeBanner = () => {
  console.log("remove banner");
  bannerSection.remove();
};

// function to remove completed question from the page
const removeQuestion = () => {
  console.log("remove question");
  document.getElementById("question-container").remove();

};

  // Initialise local storage
  const initialiseLocalStorage = () => {
    //  get feedback results from LS
    const feedbackResultsFromLS = JSON.parse(localStorage.getItem("feedbackResults"));

    if (!feedbackResultsFromLS) {
      // if it doesnt exist, set LS to have feedbackResults as an empty array
      localStorage.setItem("feedbackResults", JSON.stringify([]));
    }
    // if it already exists, do nothing

  };


  // store answer in Local storage
  const storeAnswerInLS = (answer) => {
    // get feedback results from LS
    const feedbackResults = JSON.parse(localStorage.getItem("feedbackResults"));
    // push answer to array
    feedbackResults.push(answer);
    
    // set feedbackResults in localStorage
    localStorage.setItem("feedbackResults", JSON.stringify(feedbackResults));
  };


// declare the event handler function for start button click
const handleStartButtonClick = () => {
  console.log("start button clicked");
  

 // initialise local storage
 initialiseLocalStorage();





  // remove banner section
  removeBanner();

  // render question
  renderQuestion();
};

// add event listener to start button
startButton.addEventListener("click", handleStartButtonClick);