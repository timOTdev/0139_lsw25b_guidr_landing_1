

class Article {
  constructor(domElement) {
   
  this.domElement = domElement;
  this.expandButton = domElement.querySelector('.panel-buttons');
  this.expandOpen = domElement.querySelector('.open');
  this.expandClose = domElement.querySelector('.close');
  this.expandClose.textContent = "close";
  this.expandButton.textContent = "Learn More";
  this.expandButton.addEventListener('click', () => this.toggleArticle());
  }

  toggleArticle() {
    this.expandOpen.classList.toggle('hide-btn');
    this.expandClose.classList.toggle('hide-btn');
    this.panelContent.classList.toggle('toggle-on'); 
    this.domElement.classList.toggle('article-open');
  }
}
let articles = document.querySelectorAll('.article').forEach( article => new Article(article));
  
     
      
      
     
   
    // this.domElement.classList.toggle('close');
    // this.expandClose.classList.toggle('hide-btn');
    // this.panelContent.classList.toggle('article');
    // }
    
  

  

  
 
  
  
  
 