/**
 * A valid CSS color.
 * 
 * @typedef {string} Color
 */

/**
 * Evaluate a string to see if it is a valid CSS color.
 * 
 * @param {string} strColor 
 * @returns {boolean}
 */
function isValidColor(strColor) {
  const s = new Option().style
  s.color = strColor

  return s.color == strColor.toLowerCase()
}

/**
 * Component that skins the loading screen.
 * 
 * @property {Color} primary The primary color. Used for the top box on the loading screen.
 * @property {Color} secondary The secondary color. Used for the prompt box.
 * @property {Color} background The background color. Used for the loading screen and the prompt screen.
 * @property {Color} active The active button color. Used for the right button in the prompt box.
 * @property {Color} inactive The inactive button color. Used for the left button in the prompt box.
 * @property {Color} text The text color. Affects all text.
 * @property {selector} cameraIcon The selector for the image to be used in the top box on the loading screen.
 * @property {selector} loadingIcon The selector for the image to be used in the bottom box on the loading screen.
 * @property {('spin'|'pulse'|'scale'|'none'|'')}  loadingIconAnimation The kind of animation the loading screen icon should perform.
 */
export default AFRAME.registerComponent('loading-skinner', {
  schema: {
    primary: { default: '' },
    secondary: { default: '' },
    background: { default: '' },
    active: { default: '' },
    inactive: { default: '' },
    text: { default: '' },
    cameraIcon: { type: 'selector', default: null, },
    loadingIcon: { type: 'selector', default: null, },
    loadingIconAnimation: { default: '' },
  },
  init() {
    const {
      primary,
      secondary,
      background,
      active,
      inactive,
      text,
      cameraIcon,
      loadingIcon,
      loadingIconAnimation,
    } = this.data

    const styles = ''

    if (primary) {
      if (isValidColor(primary)) {
        styles.concat(`
          #requestingCameraPermissions {
            background-color: ${primary};
          }
        `)
      } else {
        console.warn(`Attempted to set the primary color to an invalid value: ${primary}`)
      }
    }

    if (secondary) {
      if (isValidColor(secondary)) {
        styles.concat(`
          .prompt-box-8w {
            background-color: ${secondary};
          }
        `)
      } else {
        console.warn(`Attempted to set the secondary color to an invalid value: ${secondary}`)
      }
    }

    if (background) {
      if (isValidColor(background)) {
        styles.concat(`
          #loadBackground {
            background-color: ${background};
          }
        `)
      } else {
        console.warn(`Attempted to set the background color to an invalid value: ${background}`)
      }
    }

    if (active) {
      if (isValidColor(active)) {
        styles.concat(`
          .button-primary-8w {
            background-color: ${active};
          }
        `)
      } else {
        console.warn(`Attempted to set the active button color to an invalid value: ${active}`)
      }
    }

    if (inactive) {
      if (isValidColor(inactive)) {
        styles.concat(`
          .prompt-button-8w {
            background-color: ${inactive};
          }
        `)
      } else {
        console.warn(`Attempted to set the inactive button color to an invalid value: ${inactive}`)
      }
    }

    if (text) {
      if (isValidColor(text)) {
        styles.concat(`
          #loadingContainer * {
            color: ${text};
          }
        `)
      } else {
        console.warn(`Attempted to set the inactive button color to an invalid value: ${inactive}`)
      }
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

    const newStyle = document.createElement('style')
    newStyle.innerText = styles
    document.head.appendChild(newStyle)
  },
})
