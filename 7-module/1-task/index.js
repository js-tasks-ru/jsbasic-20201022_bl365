import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.addEventListener();
  }

  render() {
    let elem = createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
        <nav class="ribbon__inner"></nav>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `)
    this.elem = elem

    let navs = this.categories.map(item => createElement(`<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`))
    this.sub("inner").append(...navs)
  }

  addEventListener() {
    this.elem.addEventListener("click", (event) => this.onClick(event)) // ("click", this.onClick) не будет работать: на 35строке ошибка "this.update это не функция". Это связано с контекстом вызова this.onClick(event)?
    this.sub("inner").addEventListener("scroll", ({target}) => this.scroll(target))
    //this.sub("inner").addEventListener("scroll", (target) => this.scroll(target)) // этот вариант без литерала объекта, он работать не будет. Какую тему изучить, чтобы понять роль литерала объекта в стрелочной функции?
  }

  onClick(event) {
    if(event.target.closest(".ribbon__arrow")) {
      this.update(event.target)
    }

    if(event.target.closest(".ribbon__item")) {
      this.doActive(event)
    }
  }

  doActive(event) {
    event.preventDefault()

    let nowActiveCategory = event.target
    let id = nowActiveCategory.getAttribute('data-id')
    let prevActiveCategory = nowActiveCategory.parentNode.querySelector('.ribbon__item_active')

    if (prevActiveCategory != null) {
      prevActiveCategory.classList.remove('ribbon__item_active')
    }
    nowActiveCategory.classList.add("ribbon__item_active")

    this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
      detail: id,
      bubbles: true
    }))
  }

  scroll(target) {
    let ribbonInner = target

    let scrollWidth = ribbonInner.scrollWidth
    let scrollLeft = ribbonInner.scrollLeft //насколько прокручено вправо
    let clientWidth = ribbonInner.clientWidth

    let scrollRight = scrollWidth - scrollLeft - clientWidth //насколько прокручено влево

    if(scrollLeft > 1) {
      this.sub("arrow_right").classList.add("ribbon__arrow_visible")
    }
    if(scrollRight < 1) {
      this.sub("arrow_right").classList.remove("ribbon__arrow_visible")
    }
    if(scrollRight > 1) {
      this.sub("arrow_left").classList.add("ribbon__arrow_visible")
    }
    if(scrollLeft < 1) {
      this.sub("arrow_left").classList.remove("ribbon__arrow_visible")
    }
  }

  update(target) {
    let ribbonInner = this.sub("inner")

    if(target.closest(".ribbon__arrow_left")) {
      ribbonInner.scrollBy(-350, 0)
    }
    if(target.closest(".ribbon__arrow_right")) {
      ribbonInner.scrollBy(350, 0)
    }
  }

  sub(ref) {
    return this.elem.querySelector(`.ribbon__${ref}`)
  }
}
