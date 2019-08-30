const { Packager } = require('parcel-bundler');

class CSSPackager extends Packager {
  async addAsset(asset) {
    await this.dest.write(asset.generated.css)
  }
}

module.exports = CSSPackager;
