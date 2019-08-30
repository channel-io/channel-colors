module.exports = function(bundler) {
  bundler.addAssetType('.json', require.resolve('./ColorsJSONAsset.js'));
  bundler.addAssetType('.scss', require.resolve('./SCSSAsset.js'));
  bundler.addAssetType('.css', require.resolve('./CSSAsset.js'));
  bundler.addAssetType('.xml', require.resolve('./AndroidXMLAsset.js'));
  bundler.addPackager('json', require.resolve('./SimpleJSONPackager.js'));
  bundler.addPackager('scss', require.resolve('./SCSSPackager.js'));
  bundler.addPackager('xml', require.resolve('./AndroidXMLPackager.js'));
};
