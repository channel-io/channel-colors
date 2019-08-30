const { Asset } = require('parcel-bundler');
const _ = require('lodash');
const { flow, toPairs, groupBy, mapValues, map, reduce } = require('lodash/fp');
const { alphaWithoutLeadingZero } = require('./utils');

class SCSSAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'scss';
  }

  parse(code) {
    return flow(
      toPairs,
      mapValues(([name, info]) => ({ name, ...info })),
      groupBy('family'),
      toPairs,
      map(([family, colors]) => {
        return ([
          family,
          _.map(colors, ({ name, rgb, opacity }) => {
            const styleName = `$ch-${name}`;
            const styleValue = `rgba(${rgb.split(',').join(', ')}, ${alphaWithoutLeadingZero(opacity)})`;
            return [styleName, styleValue];
          }).map(([name, value]) => (`${name}: ${value};`)),
        ])
      }),
      reduce((buffer, [family, colors]) => {
        buffer.push(`\n/* ${family} */`);
        colors.forEach(x => buffer.push(x));
        return buffer;
      }, []),
    )(JSON.parse(code));
  }

  async generate() {
    return this.ast.join('\n');
  }
}

module.exports = SCSSAsset;
