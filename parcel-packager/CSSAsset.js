const { Asset } = require('parcel-bundler');
const _ = require('lodash');
const { flow, toPairs, map, forEach } = require('lodash/fp');

class CSSAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'css';
  }

  parse(code) {
    const buffer = [];
    buffer.push(':root {');
    flow(
      toPairs,
      map(([name, value]) => ([
        `  --${_.kebabCase(_.replace(name, '_', ''))}`,
        value,
      ])),
      map(([name, value]) => (`${name}: ${value};`)),
      forEach(l => buffer.push(l)),
    )(JSON.parse(code));
    buffer.push('}');
    return buffer;
  }

  async generate() {
    return this.ast.join('\n');
  }
}

module.exports = CSSAsset;
