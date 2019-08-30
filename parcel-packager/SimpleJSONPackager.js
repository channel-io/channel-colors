const { Packager } = require('parcel-bundler');

class SimpleJSONPackager extends Packager {
  async addAsset(asset) {
    await this.dest.write(asset.generated.json)
  }
}

module.exports = SimpleJSONPackager;
