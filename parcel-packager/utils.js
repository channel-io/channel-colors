const _ = require('lodash');

function alphaWithoutLeadingZero(opacity) {
  const alpha = `${_.round(opacity / 100, 2)}`;
  return alpha.substr((alpha.length > 1) ? 1 : 0, alpha.length)
}

function toHex(x) {
  const scaled = (x > 1) ? x / 100 : x;
  const hex = _.floor(scaled * 255).toString(16);
  return _.toUpper((hex.length === 1) ? `0${hex}` : hex);
}

function blend(hex, opacity = 100) {
  if (hex) {
    return `#${toHex(opacity)}${hex.substr(1, 6)}`;
  }
  return hex;
}

module.exports = {
  alphaWithoutLeadingZero,
  toHex,
  blend,
};
