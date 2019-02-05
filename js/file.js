

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelector('.panel-buttons');
  
    this.expandButton.textContent = "Learn More";
  this.expandButton.addEventListener('click', () => this.toggleArticle());  
}

toggleArticle() {
 
  this.domElement.classList.toggle('article-open');this.expandButton.textContent = "close";
  
}
}
let articles = document.querySelectorAll('.article').forEach( article => new Article(article));
  
     
      
      
     
   
    
    

    // class Carousel {
    //   constructor (carousel) {
    //     this.carousel = carousel;
    //     this.rightBtn = this.carousel.querySelector(".right-button");
    //     this.leftBtn = this.carousel.querySelector(".left-button");
    //     this.imgList = this.carousel.querySelectorAll(".imgs");
    //     this.index = 0;
    //     this.imgList[this.index].style.display="block";

    //     this.leftBtn.addEventListener("click", () => this.cycleLeft());
    //     this.rightBtn.addEventListener("click", () => this.cycleRight());
    //     this.cardList = Array.from(this.imgList).map(img => new Card(img))
    //   }
    //   goRight () {
    //     this.imgList[this.index].style.display = 'none'
    //     if(this.index === 0){
    //         this.index = this.imgList.length - 1
    //     } else {
    //         this.index = this.index - 1
    //     }
    //     this.imgList[this.index].style.display = 'block'
    //   }
      //   this.imgList[this.index].style.display = "none";
      //   this.index === 0 ? this.index = this.imgList.length-1 : this.index--
      //   this.imgList[this.index].style.display = "block";
      //   this.cardList.forEach((card, index) =>{
      //     index !== this.index ? card.deselect() : null
      //   });
      //   this.cardList[this.index].select()
      // }
      // goLeft () {
      //   this.imgList[this.index].style.display = 'none'
      //   if(this.index === 0){
      //       this.index = this.imgList.length - 1
      //   } else {
      //       this.index = this.currentIndex - 1
      //   }
      //   this.imgList[this.index].style.display = 'block'
      // }
        //   this.imgList[this.index].style.display = "none";
      //   this.index === 0 ? this.index = this.imgList.length-1 : this.index--
      //   this.imgList[this.index].style.display = "block";
      //   this.cardList.forEach((card, index) =>{
      //     index !== this.index ? card.deselect() : null
      //   });
      //   this.cardList[this.index].select()
      // }
      // }
    // class Card {
    //   constructor(img){
    //     this.img = img;
    //     this.card = img.dataset.card;
    //     this.cards = document.querySelector(`div[data-card="$(this.cards)"]`);

    //   }
    //   select() {
    //     this.cards.style.display="block";

    //   }
    //   deselect() {
    //     this.cards.style.display = "none";
    //   }
    // }
  
    // carouselList = document.querySelectorAll(".carousel");
    // carouselList.forEach(carousel => new Carousel(carousel))
  

  
 
  
  
  
 