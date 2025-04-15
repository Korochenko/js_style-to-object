'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssValue = {};

  if (sourceString === '') {
    return {};
  }

  const result = sourceString.split(';').filter((item) => item.trim() !== '');

  for (let i = 0; i < result.length; i++) {
    const item = result[i];
    const [key, value] = item.split(':');
    const cleanKey = key.trim();
    const cleanValue = value.trim();

    cssValue[cleanKey] = cleanValue;
  }

  return cssValue;
}

module.exports = convertToObject;
