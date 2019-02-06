

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelector('.panel-buttons');
    this.expandButton.textContent = "Learn More";
    
  this.expandButton.addEventListener('click', () => this.toggleArticle());  
}

toggleArticle() {
 
  
  if(this.domElement.classList.toggle('article-open')){this.expandButton.textContent = "close";
}else{
  this.expandButton.textContent = "Learn More";
}


}
}
let articles = document.querySelectorAll('.article').forEach( article => new Article(article));
  
     
      
      
     
class Carousel {
  constructor (carousel) {
    
    this.carousel = carousel;
    this.leftBtn = this.carousel.querySelector(".leftBut");
    this.rightBtn = this.carousel.querySelector(".rightBut");
    this.imgList = this.carousel.querySelectorAll(".carousel-img");
    this.index=0;
    this.imgList[this.index].style.display="block";  
    this.leftBtn.addEventListener("click", () => this.GoLeft());
    this.rightBtn.addEventListener("click", () => this.GoRight());
    this.cardList = Array.from(this.imgList).map(img => new Card(img))
  }
GoLeft () {
   
  this.imgList[this.index].style.display = "none";
  this.index === 0 ? this.index = this.imgList.length-1 : this.index--
  this.imgList[this.index].style.display = "block";
  this.cardList.forEach((card, index) => {
    index !== this.index ? card.deselect() : null
  });
  this.cardList[this.index].select()

}
    
GoRight () {
  this.imgList[this.index].style.display = "none";
  this.index === this.imgList.length-1 ? this.index = 0 : this.index ++;
  this.imgList[this.index].style.display = "block";
this.cardList.forEach((card, index) => {
  index !== this.index ? card.deselect() : null
});
this.cardList[this.index].select()

}

}
  
class Card {
  constructor(img) {
    this.img = img;
    this.num = img.dataset.num;
  this.card = document.querySelector(`div[data-num="${this.num}"]`);
    
  }
  
  select() {
    this.card.style.display="block";
  }
  
  deselect() {
    this.card.style.display = "none";
  }
}

      carouselList = document.querySelectorAll(".carousel");
      carouselList.forEach(carousel => new Carousel(carousel))
  
   



  
    
    
  


    
    


    let fadein_tween = TweenLite.from( '.container', 1, {autoAlpha:0, y: 500} );
  

  
 
  
  
  
 