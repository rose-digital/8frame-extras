require('!style-loader!css-loader!./ui-carousel.css')

/**
 * A component that installs a carousel-style option select interface.
 * 
 * @property {number} selected The index of the currently selected option.
 * 
 * @fires carouselchanged
 */
module.exports = AFRAME.registerComponent('ui-carousel', {
  schema: {
    selected: { default: 0 },
  },
  init() {
    const { el } = this

    el.setAttribute('id', 'carousel')
    Array.from(el.children).forEach((cell) => cell.classList.add('carousel-cell'))

    const flickityScript = document.createElement('script')
    flickityScript.type = 'text/javascript'
    flickityScript.onload = function() {
      this.flickity = new Flickity(el, {
        friction: 0.6,
        pageDots: false,
        prevNextButtons: false,
        selectedAttraction: 0.25,
        on: {
          select: (cellIndex) => {
            el.setAttribute('ui-carousel', { selected: cellIndex })
          },
          staticClick: (_, __, ___, cellIndex) => {
            this.flickity.select(cellIndex)
          },
        }
      })
    }

    flickityScript.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js'
    document.querySelector('head').appendChild(flickityScript)
  },
  update(oldData) {
    const { el } = this
    const { selected } = this.data

    if (this.flickity && oldData.selected !== selected) {
      const allCells = el.querySelectorAll('.carousel-cell')
      if (typeof oldData.selected === 'number') {
        allCells[oldData.selected].classList.remove('carousel-selected')
      }
      allCells[selected].classList.add('carousel-selected')

      this.el.sceneEl.emit('carouselchanged', { newIndex: selected })
    }
  }
})

/**
 * New option selected. Does not fire if the active option is reselected.
 * 
 * @event carouselchanged
 * @type {object}
 * @property {number} newIndex The newly selected option.
 */
