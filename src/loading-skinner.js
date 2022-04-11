/**
 * A valid CSS color.
 * 
 * @typedef {string} Color
 */

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
 * Component that skins the loading screen.
 * 
 * @property {Color} primaryColor The primary color. Used for the top box on the loading screen.
 * @property {Color} secondaryColor The secondary color. Used for the prompt box.
 * @property {Color} backgroundColor The background color. Used for the loading screen and the prompt screen.
 * @property {Color} primaryButtonColor The primary button color. Used for the right button in the prompt box.
 * @property {Color} secondaryButtonColor The secondary button color. Used for the left button in the prompt box.
 * @property {Color} textColor The text color. Affects all text.
 * @property {string} fontFamily The typeface to use. Affects all text.
 * @property {ImageSrc} cameraIcon The src for the image to be used in the top box on the loading screen.
 * @property {ImageSrc} loadingIcon The src for the image to be used in the bottom box on the loading screen.
 * @property {ImageSrc} poweredByIcon The src for the image to be used as the "Powered By 8th Wall" icon at the bottom of the loading screen.
 * @property {('spin'|'pulse'|'scale'|'none'|'')}  loadingIconAnimation The kind of animation the loading screen icon should perform.
 * @property {string} promptText The text to include in the device motion sensors permissions prompt.
 * @property {string} primaryButtonText The text to include for the right button in the prompt box.
 * @property {string} secondaryButtonText  The text to include for the left button in the prompt box.
 */
module.exports = AFRAME.registerComponent('loading-skinner', {
  schema: {
    primaryColor: { default: '' },
    secondaryColor: { default: '' },
    backgroundColor: { default: '' },
    primaryButtonColor: { default: '' },
    secondaryButtonColor: { default: '' },
    textColor: { default: '' },
    fontFamily: { default: '' },
    cameraIcon: { default: '' },
    loadingIcon: { default: '' },
    poweredByIcon: { default: '' },
    loadingIconAnimation: { default: '' },
    promptText: { default: '' },
    primaryButtonText: { default: '' },
    secondaryButtonText: { default: '' },
  },
  init() {
    const {
      primaryColor,
      secondaryColor,
      backgroundColor,
      primaryButtonColor,
      secondaryButtonColor,
      textColor,
      fontFamily,
      cameraIcon,
      loadingIcon,
      loadingIconAnimation,
      poweredByIcon,
      promptText,
      primaryButtonText,
      secondaryButtonText,
    } = this.data

    let styles = ''

    if (primaryColor) {
      styles = styles.concat(`
        #requestingCameraPermissions {
          background-color: ${primaryColor};
        }
      `)
    }

    if (secondaryColor) {
      styles = styles.concat(`
        .prompt-box-8w {
          background-color: ${secondaryColor};
        }
      `)
    }

    if (backgroundColor) {
      styles = styles.concat(`
        #loadBackground {
          background-color: ${backgroundColor};
        }
      `)
    }

    if (primaryButtonColor) {
      styles = styles.concat(`
        .button-primary-8w {
          background-color: ${primaryButtonColor};
        }
      `)
    }

    if (secondaryButtonColor) {
      styles = styles.concat(`
        .prompt-button-8w {
          background-color: ${secondaryButtonColor};
        }
      `)
    }

    if (textColor) {
      styles = styles.concat(`
        #loadingContainer * {
          color: ${textColor};
        }
      `)
    }

    if (fontFamily) {
      styles = styles.concat(`
        #loadingContainer * {
          font-family: ${fontFamily};
        }
      `)
    }

    if (cameraIcon) {
      const cameraIconEl = document.getElementById('requestingCameraIcon')
      cameraIconEl.src = cameraIcon
    }

    if (loadingIcon) {
      const loadingIconEl = document.getElementById('loadImage')
      loadingIconEl.src = loadingIcon
    }

    if (loadingIcon) {
      const loadingIconEl = document.getElementById('loadImage')
      loadingIconEl.src = loadingIcon
    }

    if (loadingIconAnimation) {
      const loadingIconEl = document.getElementById('loadImage')
      loadingIconEl.classList.remove('spin')

      if (loadingIconAnimation !== 'none') {
        loadingIconEl.classList.add(loadingIconAnimation)
      }
    }

    if (poweredByIcon) {
      const poweredByEl = document.querySelector('.poweredby-img')
      poweredByEl.src = poweredByIcon
    }

    if (promptText || primaryButtonText || secondaryButtonText) {
      let inDom = false

      const observer = new MutationObserver(() => {
        if (document.querySelector('.prompt-box-8w')) {
          if (!inDom) {
            if (promptText) {
              document.querySelector('.prompt-box-8w p').innerHTML = promptText
            }

            if (primaryButtonText) {
              document.querySelector('.button-primary-8w').innerHTML = primaryButtonText
            }

            if (secondaryButtonText) {
              document.querySelector('.prompt-button-8w').innerHTML = secondaryButtonText
            }
          }

          inDom = true
        } else if (inDom) {
          inDom = false
          observer.disconnect()
        }
      })

      observer.observe(document.body, { childList: true })
    }

    const newStyle = document.createElement('style')
    newStyle.innerText = styles
    document.head.appendChild(newStyle)
  },
})
