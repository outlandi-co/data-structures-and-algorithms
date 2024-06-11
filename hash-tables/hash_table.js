class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size).fill(null).map(() => []);
  }

  _hashFunction(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  insert(key, value) {
    const index = this._hashFunction(key);
    for (let kv of this.table[index]) {
      if (kv[0] === key) {
        kv[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this._hashFunction(key);
    for (let kv of this.table[index]) {
      if (kv[0] === key) {
        return kv[1];
      }
    }
    return null; // Key not found
  }

  delete(key) {
    const index = this._hashFunction(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        return true;
      }
    }
    return false; // Key not found
  }

  display() {
    this.table.forEach((bucket, index) => {
      if (bucket.length > 0) {
        console.log(`Index ${index}: ${JSON.stringify(bucket)}`);
      }
    });
  }
}

module.exports = HashTable;
