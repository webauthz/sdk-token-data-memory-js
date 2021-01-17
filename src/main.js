/*!
Copyright (C) 2021 Cryptium Corporation. All rights reserved.
*/
const { Database } = require('@libertyio/data-collection-memory-js');

class WebauthzTokenMemoryDatabase {
    constructor({ log = console, storage = {} } = {}) {
        this.log = log;
        this.database = new Database({ log, storage });
    }

    // create new access token record, should throw exception if record already exists
    async createToken(id, tokenInfo) {
        const isCreated = await this.database.collection('webauthz_token').insert(id, tokenInfo);
        return isCreated;
    }

    // fetch existing access token record
    async fetchToken(id) {
        return await this.database.collection('webauthz_token').fetchById(id);
    }

}

export { WebauthzTokenMemoryDatabase };
