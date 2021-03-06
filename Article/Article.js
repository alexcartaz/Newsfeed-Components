// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = document.querySelector('.expandButton');
    
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle(event)); //not sure if even should be passed
  }

  expandArticle(event) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log(this.domElement);
    this.domElement.classList.toggle('article-open');
    //menu.classList.toggle('menu--open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles);

articles = Array.from(articles).map( article => {
  return new Article(article);
});

