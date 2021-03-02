import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideNumber = 0 // номер текущего слайда
    this.render();
  }

  render() {
    let elem = document.createElement('div') // создание корневого элемента .carousel
    elem.className = 'carousel'

    // генерация стрелок. Левая создаётся скрытой
    elem.innerHTML += `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left" style="display:none">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `
    elem.addEventListener('click', ({target}) => this.onClick(target))

    this.elem = elem
    this.slidesGeneration()
  }

  onClick(target) {
    if(target.closest('.carousel__arrow')) {
      this.switchSlides(target)
    }

    if(target.closest('.carousel__button')) {
      this.productAdd(target)
    }
  }

  switchSlides(target) {
    let slidesAmount = this.slides.length
    let carouselInnerElem = this.elem.querySelector('.carousel__inner')
    let leftArrow = this.elem.querySelector('.carousel__arrow_left')
    let rightArrow = this.elem.querySelector('.carousel__arrow_right')

    if(target.closest('.carousel__arrow_left')) {
      update(--this.currentSlideNumber)
    }

    if(target.closest('.carousel__arrow_right')) {
      update(++this.currentSlideNumber)
    }

    function update(currentSlideNumber) {
      let offset = -carouselInnerElem.offsetWidth * currentSlideNumber
      carouselInnerElem.style.transform = `translateX(${offset}px)`

      if(currentSlideNumber == slidesAmount - 1) {
        rightArrow.style.display = 'none'
      } else (
        rightArrow.style.display = ''
      )

      if(currentSlideNumber == 0) {
        leftArrow.style.display = 'none'
      } else {
        leftArrow.style.display = ''
      }
    }
  }

  slidesGeneration() {
    let carouselInner = document.createElement('div') // создаётся div для списка слайдов
    carouselInner.className = 'carousel__inner'

    let carouselSlide // генерация слайдов
    for (let slide in this.slides) {
      carouselSlide = document.createElement('div')
      carouselSlide.className = 'carousel__slide'
      carouselSlide.setAttribute('data-id', this.slides[slide].id)
      carouselSlide.innerHTML += `<img src="/assets/images/carousel/${this.slides[slide].image}" class="carousel__img" alt="slide">
                                  <div class="carousel__caption">
                                      <span class="carousel__price">€${this.slides[slide].price.toFixed(2)}</span>
                                  <div class="carousel__title">${this.slides[slide].name}</div>
                                    <button type="button" class="carousel__button">
                                      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                                    </button>
                                  </div>`
      carouselInner.appendChild(carouselSlide) // добавление созданного слайда в список слайдов
    }
    this.elem.appendChild(carouselInner)  // добавление списка слайдов в корневой элемент .carousel
  }

  productAdd(target) {
    let slideId = target.closest('.carousel__slide').getAttribute('data-id')

    this.elem.dispatchEvent(new CustomEvent("product-add", {
      detail: slideId,
      bubbles: true
    }))
  }
}
