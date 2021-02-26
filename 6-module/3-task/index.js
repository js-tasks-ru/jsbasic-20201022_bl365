import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
  }

  slidesGenetation() { //генератор слайдов
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
    this.carousel.appendChild(carouselInner)  // добавление списка слайдов в корневой элемент carousel
  }

  render() {
    let carousel = document.createElement('div') // создание корневого элемента carousel

    this.carousel = carousel
    carousel.className = 'carousel'

    // добавление кнопок. Вероятно, придётся переделать, для привязки событий на кнопки
    carousel.innerHTML += `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `
    this.slidesGenetation()
    this.elem = carousel
  }
}
