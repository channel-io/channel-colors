# Colors of Channel.io
It builds platform-dependent color resources by single maintenance point.

For now, it supports platforms below:
- SCSS (https://sass-lang.com/)
- CSS
- Resource XML for Android (https://developer.android.com/guide/topics/resources/more-resources)
- as well as Simple JSON

## Build
### Prerequisite
Needs [NPM](https://www.npmjs.com/): package manager.
To install it, see [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Commands
- `npm run build`: Build colors for all supported platforms after cleaning up previous outputs.
- `npm run test`: Not supported yet.

#### ETC
- `npm run cleanup`: Cleanup previous outputs. Can not be undone.

## Outputs
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
