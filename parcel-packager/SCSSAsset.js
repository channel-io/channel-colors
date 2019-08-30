const { Asset } = require('parcel-bundler');
const _ = require('lodash');
const { flow, toPairs, map, forEach } = require('lodash/fp');

class SCSSAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'scss';
  }

  parse(code) {
    const buffer = [];
    flow(
      toPairs,
      map(([name, value]) => ([
        `$ch-${_.toLower(_.replace(name, '_', ''))}`,
        value,
      ])),
      map(([name, value]) => (`${name}: ${value};`)),
      forEach(l => buffer.push(l)),
    )(JSON.parse(code));
    return buffer;
  }

  async generate() {
    return this.ast.join('\n');
  }
}

module.exports = SCSSAsset;
