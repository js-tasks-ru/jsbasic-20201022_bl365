function initCarousel() {
  let btnGoRight = document.querySelector('.carousel__arrow_right')
  let btnGoLeft = document.querySelector('.carousel__arrow_left')
  let elementIndent = document.querySelector('.carousel__inner').getBoundingClientRect().x
  let elemWidth = document.querySelector('.carousel__inner').offsetWidth
  let positionElem = document.querySelector('.carousel__inner').getBoundingClientRect().x
  let slideNumber = 0, res

  btnGoLeft.style.display = 'none'

  function clickRight() {
    slideNumber++

    if (slideNumber === 1) {
      btnGoLeft.style.display = ''
    } else if (slideNumber === 3) {
      btnGoRight.style.display = 'none'
    }

    return positionElem - (elemWidth* slideNumber) -elementIndent
  }

  function clickLeft() {
    slideNumber--

    if (slideNumber === 2) {
      btnGoRight.style.display = ''
    } else if (slideNumber === 0) {
      btnGoLeft.style.display = 'none'
    }

    return -(positionElem + (elemWidth* slideNumber) -elementIndent)
  }

  btnGoRight.addEventListener('click', () => {document.querySelector('.carousel__inner').style.transform = `translateX(${clickRight()}px)`})
  btnGoLeft.addEventListener('click', () =>  {document.querySelector('.carousel__inner').style.transform = `translateX(${clickLeft()}px)`})
}