function toggleText() {
  let btn1 = document.querySelector('.toggle-text-button')
  btn1.onclick = function() {document.querySelector('#text').toggleAttribute('hidden')}
}
