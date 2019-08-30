const path = require('path');
const { Packager } = require('parcel-bundler');

class AndroidXMLPackager extends Packager {
  constructor(bundle, bundler) {
    super(bundle, bundler);
    const baseName = path.basename(bundle.name);
    this.bundle.name = path.resolve(
      bundle.name,
      `../android.${baseName.substr(0, baseName.lastIndexOf('.'))}.xml`,
    );
  }

  async start() {
    await this.dest.write('<?xml version="1.0" encoding="utf-8"?>\n')
  }

  async addAsset(asset) {
    await this.dest.write(asset.generated.xml)
  }

  async end() {
    await this.dest.end('\n');
  }
}

module.exports = AndroidXMLPackager;
