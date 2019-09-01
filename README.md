[![npm version](https://badge.fury.io/js/channel-colors.svg)](https://badge.fury.io/js/channel-colors)

# Colors of Channel.io
Channel-Colors is an color scheme using [Channel.io](https://www.channel.io/).

Anyone can download pre built scheme(recommended) or build manually with original .colors.json file.

## Supported Platforms / Download / Usage
We provide pre built latest distributions.

### SCSS (https://sass-lang.com/)
[Download Pre Built](http://cdn.channel.io/colors/default.colors.scss)

Usage
```scss
div {
  background-color: $ch-navy600;
}
```

### CSS
[Download Pre Built](http://cdn.channel.io/colors/default.colors.css)

Usage
```css
div {
  background-color: var(--navy-600);
}
```

### Android XML (https://developer.android.com/guide/topics/resources/more-resources)
[Download Pre Built](http://cdn.channel.io/colors/android.default.colors.xml)

Usage
```xml
<TextView
  android:background="@color/navy600" />
```

### JSON:
[Download Pre Built](http://cdn.channel.io/colors/default.colors.json)

Scheme
```json
{
  "navy600": {
    "hex": "#09124E",
    "opacity": 100,
    "rgb": "9,18,78",
    "family": "navy"
  },
  ...
}
```

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
