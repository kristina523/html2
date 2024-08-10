/**
  * toggle menu
  * @param {string} id 
  */
function onMenuToggle(id) {
  const element = document.getElementById(id)
  if (element) {
    console.log(element)
    element.classList.toggle('open')
  }
}
