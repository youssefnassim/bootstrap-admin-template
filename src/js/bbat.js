import Sidebar from './sidebar'

// eslint-disable-next-line no-unused-vars
const sidebar = new Sidebar()

// Scroll event to update header style
window.addEventListener('scroll', function () {
  return this.scrollY > 10 ?
    document.querySelector('.main header').classList.add('fixed') :
    document.querySelector('.main header').classList.remove('fixed')
})

