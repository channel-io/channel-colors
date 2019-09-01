[![npm version](https://badge.fury.io/js/channel-colors.svg)](https://badge.fury.io/js/channel-colors)

# Colors of Channel.io
Channel-Colors is an color scheme using [Channel.io](https://www.channel.io/).

## Supported Platforms
- SCSS (https://sass-lang.com/)
- CSS
- Resource XML for Android (https://developer.android.com/guide/topics/resources/more-resources)
- as well as Simple JSON

## Download
We provide pre built latest distributions.

- SCSS: [Download](http://cdn.channel.io/colors/default.colors.scss)
- CSS: [Download](http://cdn.channel.io/colors/default.colors.css)
- Android XML: [Download](http://cdn.channel.io/colors/android.default.colors.xml)
- JSON: [Download](http://cdn.channel.io/colors/default.colors.json)

## Manual Build
It builds platform-dependent color resources by single maintenance point.

### Prerequisite
Needs [NPM](https://www.npmjs.com/): package manager.
To install it, see [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Commands
- `npm run build`: Build colors for all supported platforms after cleaning up previous outputs.
- `npm run test`: Not supported yet.

#### ETC
- `npm run cleanup`: Cleanup previous outputs. Can not be undone.

### Outputs
```
├── src
│   └── default.colors.json  # Original source to compile
└── dist
    ├── android.default.colors.json  # Resource for Android
    ├── default.colors.json  # Simple JSON
    ├── default.colors.scss  # SCSS
    └── default.colors.css  # CSS
```

## License
MIT License.
