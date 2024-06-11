const { AnimalShelter, Dog, Cat } = require('../animalShelter');
const assert = require('assert');

describe('AnimalShelter', function () {

  it('should enqueue dogs and cats', function () {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Dog('Buddy'));
    shelter.enqueue(new Cat('Whiskers'));
    assert.strictEqual(shelter.dogs.length, 1);
    assert.strictEqual(shelter.cats.length, 1);
    assert.strictEqual(shelter.dogs[0].name, 'Buddy');
    assert.strictEqual(shelter.cats[0].name, 'Whiskers');
  });

  it('should dequeue with preference', function () {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Dog('Buddy'));
    shelter.enqueue(new Cat('Whiskers'));
    assert.strictEqual(shelter.dequeue('dog').species, 'dog');
    assert.strictEqual(shelter.dequeue('cat').species, 'cat');
  });

  it('should dequeue without preference', function () {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Dog('Buddy'));
    shelter.enqueue(new Cat('Whiskers'));
    assert.strictEqual(shelter.dequeue().species, 'dog');
    assert.strictEqual(shelter.dequeue().species, 'cat');
  });

  it('should return null when dequeuing from an empty shelter', function () {
    const shelter = new AnimalShelter();
    assert.strictEqual(shelter.dequeue(), null);
  });

});

