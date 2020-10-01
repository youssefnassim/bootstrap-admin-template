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
    this.sidebar.addEventListener('mouseover', () => {
      if (this._isHidden) {
        this.sidebar.classList.add('overlay')
      }
    })
    this.sidebar.addEventListener('mouseout', () => {
      if (this.toggleBtn.classList.contains('active')) {
        this.sidebar.classList.remove('overlay')
      }
    })
  }

  setClickEvent() {
    this.toggleBtn.addEventListener('click', () => {
      if (this.toggleBtn.classList.contains('active')) {
        this.show()
        this.sidebar.classList.remove('overlay')
      } else {
        this.hide()
      }
    })
  }

  getToggleBtn(btn) {
    this.toggleBtn = btn
  }
}
