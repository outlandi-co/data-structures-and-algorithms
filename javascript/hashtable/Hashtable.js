// Hashtable.js
class Hashtable {
  constructor(size = 50) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    const bucket = this.buckets[index];
    const existingKeyValue = bucket.find(item => item[0] === key);

    if (existingKeyValue) {
      existingKeyValue[1] = value;
    } else {
      bucket.push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      const keyValue = bucket.find(item => item[0] === key);
      if (keyValue) {
        return keyValue[1];
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      const keyValue = bucket.find(item => item[0] === key);
      return !!keyValue;
    }
    return false;
  }

  keys() {
    const keysCollection = [];
    for (const bucket of this.buckets) {
      if (bucket) {
        for (const [key] of bucket) {
          keysCollection.push(key);
        }
      }
    }
    return keysCollection;
  }
}

module.exports = Hashtable;
