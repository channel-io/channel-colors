const { Asset } = require('parcel-bundler');
const _ = require('lodash');
const { flow, toPairs, map, forEach } = require('lodash/fp');
const { blend } = require('./utils');

class AndroidXMLAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'xml';
  }

  parse(code) {
    const buffer = [];
    buffer.push('<resources>');
    flow(
      toPairs,
      map(([name, { hex, opacity }]) => `  <color name="${name}">${blend(hex, opacity)}</color>`),
      forEach(l => buffer.push(l)),
    )(JSON.parse(code));
    buffer.push('</resources>');
    return buffer;
  }

  async generate() {
    return this.ast.join('\n');
  }
}

module.exports = AndroidXMLAsset;
