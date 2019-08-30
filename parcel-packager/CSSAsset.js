const { Asset } = require('parcel-bundler');
const _ = require('lodash');
const { flow, toPairs, groupBy, mapValues, map, reduce, forEach } = require('lodash/fp');
const { alphaWithoutLeadingZero } = require('./utils');

class CSSAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'css';
  }

  parse(code) {
    const _buffer = [];
    _buffer.push(':root {');
    flow(
      toPairs,
      mapValues(([name, info]) => ({ name, ...info })),
      groupBy('family'),
      toPairs,
      map(([family, colors]) => {
        return ([
          family,
          _.map(colors, ({ name, rgb, opacity }) => {
            const styleName = `--${_.kebabCase(name)}`;
            const styleValue = `rgba(${rgb.split(',').join(', ')}, ${alphaWithoutLeadingZero(opacity)})`;
            return [styleName, styleValue];
          }).map(([name, value]) => (`${name}: ${value};`)),
        ])
      }),
      reduce((buffer, [family, colors]) => {
        buffer.push(`/* ${family} */`);
        colors.forEach(x => buffer.push(x));
        return buffer;
      }, []),
      forEach(x => _buffer.push(`  ${x}`)),
    )(JSON.parse(code));
    _buffer.push('}');
    return _buffer;
  }

  async generate() {
    return this.ast.join('\n');
  }
}

module.exports = CSSAsset;
