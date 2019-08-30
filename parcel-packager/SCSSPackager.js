const { Packager } = require('parcel-bundler');

class SCSSPackager extends Packager {
  async addAsset(asset) {
    await this.dest.write(asset.generated.scss)
  }
}

module.exports = SCSSPackager;
