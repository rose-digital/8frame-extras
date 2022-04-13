require('!style-loader!css-loader!./splash-screen.css')

const html = require('./splash-screen.html').default

/**
 * A valid CSS selector.
 * 
 * @typedef {string} Selector
 */

/**
 * A valid image URL.
 * 
 * @typedef {string} ImageUrl
 */

/**
 * A valid img src.
 * 
 * @typedef {Selector|ImageUrl} ImageSrc
 */

/**
 * Component that adds a splash screen to the experience.
 * 
 * @property {ImageSrc} backgroundImage The src for the image to use as the splash screen background.
 * @property {string} title The title text.
 * @property {string} body The body text.
 * @property {string} cta The text for the call to action button.
 */
module.exports = AFRAME.registerComponent('splash-screen', {
  schema: {
    backgroundImage: { type: 'selector', default: null, },
    title: { default: '' },
    body: { default: '' },
    cta: { default: 'Enter AR' },
  },
  init() {
    const {
      backgroundImage,
      title,
      body,
      cta,
    } = this.data

    document.body.insertAdjacentHTML('beforeend', html)

    if (backgroundImage) {
      document.getElementById('splash-background').src = backgroundImage
    }

    if (title) {
      document.getElementById('splash-title').innerHTML = title
    }

    if (body) {
      document.getElementById('splash-body').innerHTML = body
    }

    if (cta) {
      document.getElementById('splash-cta').innerHTML = cta
    }

    this.el.sceneEl.addEventListener('realityready', () => {
      document.getElementById('splash-content').classList.add('fade-in')
      document.getElementById('splash-cta').addEventListener('click', () => {
        const splashPage = document.getElementById('splash')
        splashPage.classList.add('fade-out')
        setTimeout(() => {
          splashPage.parentNode.removeChild(splashPage)
        }, 1500)
      })
    })
  }
})
