import "./styles.css";

/*
Add event listeners to the `.expand_button` buttons
*/
function expandArticleBody() {
  const buttons = document.querySelectorAll('.expand_button');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const article = event.target.closest('article');
      const buttonText = button.innerText
      if (buttonText === 'V') {
        article.querySelector('.article_body').style.display = 'none';
        button.innerText = '>';
      } else {
        article.querySelector('.article_body').style.display = 'block';
        button.innerText = 'V';
      }
    });
  });
}

/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  const plusBtn = document.querySelectorAll(".highlightBtn");
  plusBtn.forEach((button)=> {
    button.addEventListener("click", (event) => {
      const article = event.target.closest('article');
      const buttonText = button.innerText
      if (buttonText === "+") {
        article.classList.add("highlight")
        button.innerText = "-"
      } else {
        article.classList.remove("highlight")
        button.innerText = "+"
      }
    })
  })
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
