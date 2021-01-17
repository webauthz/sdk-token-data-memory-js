sdk-token-data-memory-js
========================

In-memory storage implementation for Webauthz Token.

# Usage

```
const { WebauthzTokenMemoryDatabase } = require('@webauthz/sdk-token-data-memory-js');
const { WebauthzToken } = require('@webauthz/sdk-token-core-node-js');

const database = new WebauthzTokenMemoryDatabase();
const webauthzToken = new WebauthzToken({ database, ...otherSettings });
```

# API

This library implements the storage interface defined by
[sdk-token-core-node-js](https://github.com/webauthz/sdk-token-core-node-js/).

# Build

```
npm run lint
npm run build
```
