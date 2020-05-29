/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
  return str.search(/^[a-zA-Z0-9_]{4,16}$/) !== -1
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validQQ(str) {
  return str.search(/^[1-9]\d{4,10}$/) !== -1
}
