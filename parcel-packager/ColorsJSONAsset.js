const { Asset } = require('parcel-bundler');

class ColorsJSONAsset extends Asset {
  async generate() {
    return [
      {
        type: 'json',
        value: this.contents,
      },
      {
        type: 'xml',
        value: this.contents,
      },
      {
        type: 'scss',
        value: this.contents,
      },
      {
        type: 'css',
        value: this.contents,
      }
    ]
  }
}

module.exports = ColorsJSONAsset;
