/*
 * Author: Youssef Nassim
 * Date: 21 Sep 2020
 *
 **/

const SIDEBAR_TOGGLE_BUTTON = '[data-widget="sidebar"]'

export default class Sidebar {
  constructor() {
    console.log('Sidebar running...')
    // defaults
    this.sidebar = document.querySelector('.sidebar')
    this.toggleBtn = document.querySelector(SIDEBAR_TOGGLE_BUTTON)
    this._isHidden = false

    this.setClickEvent()
    this.setHoverEvent()
  }

  // Public methods
  toggle() {
    return this._isHidden ? this.show() : this.hide()
  }

  hide() {
    this._isHidden = true
    document.querySelector('body').classList.add('sidebar-collapse')
  }

  show() {
    this._isHidden = false
    document.querySelector('body').classList.remove('sidebar-collapse')
  }

  setHoverEvent() {
    const _this = this
    this.sidebar.addEventListener('mouseover', () => {
      if (_this._isHidden) {
        _this.sidebar.classList.add('overlay')
      }
    })
    this.sidebar.addEventListener('mouseout', () => {
      if (_this.toggleBtn.classList.contains('active')) {
        _this.sidebar.classList.remove('overlay')
      }
    })
  }

  setClickEvent() {
    const _this = this
    this.toggleBtn.addEventListener('click', () => {
      if (_this.toggleBtn.classList.contains('active')) {
        _this.show()
        _this.sidebar.classList.remove('overlay')
      } else {
        _this.hide()
      }
    })
  }

  getToggleBtn(btn) {
    this.toggleBtn = btn
  }
}
