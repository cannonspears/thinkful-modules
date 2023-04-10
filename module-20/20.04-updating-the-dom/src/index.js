import "./styles.css";

function addHeadings() {
  const articles = document.querySelectorAll("article")
  for (let article of articles) {
    const text = article.innerText
    article.innerHTML = `<h2>${text}</h2>`
  }
  
}

function styleTutorialsAndArticles() {
  const articles = document.querySelectorAll("article");
  const headings = document.querySelectorAll("h2");

  for (let article of articles) {
    const text = article.innerText;

    if (text.includes("Article")) {
      article.classList.add("article");
    } else {
      article.classList.add("tutorial");
    }
  }
}

function separateAllTutorials() {
  const container = document.querySelector(".container");
  const tutorials = document.querySelectorAll(".tutorial");

  const tutorialSection = document.createElement("section");
  tutorialSection.classList.add("tutorials");
  container.appendChild(tutorialSection);

  for (const tutorial of tutorials) {
    tutorialSection.appendChild(tutorial);
  }
}

/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
