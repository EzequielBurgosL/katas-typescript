import { Iterator, UserCollection, UserIterator } from '.';
import { User } from '..';

describe('UserCollection', () => {
  let userCollection: UserCollection;

  beforeEach(() => {
    userCollection = new UserCollection();
  });

  it('should add users to the collection', () => {
    const user1 = new User('John', 'Doe', 25, 0);
    const user2 = new User('Jane', 'Smith', 30, 1);

    userCollection.addUser(user1);
    userCollection.addUser(user2);

    expect(userCollection.getUsers()).toContain(user1);
    expect(userCollection.getUsers()).toContain(user2);
  });

  it('should return the correct count of users', () => {
    expect(userCollection.getCount()).toBe(0);

    const user1 = new User('John', 'Doe', 25, 0);
    const user2 = new User('Jane', 'Smith', 30, 1);

    userCollection.addUser(user1);
    userCollection.addUser(user2);

    expect(userCollection.getCount()).toBe(2);
  });

  it('should return the correct iterator', () => {
    const user1 = new User('John', 'Doe', 25, 0);
    const user2 = new User('Jane', 'Smith', 30, 1);
    userCollection.addUser(user1);
    userCollection.addUser(user2);

    const iterator: Iterator<User> = userCollection.getIterator();

    expect(iterator.next()).toBe(user1);
    expect(iterator.next()).toBe(user2);
    expect(iterator.hasNext()).toBe(false);
  });

  it('should return the correct reverse iterator', () => {
    const user1 = new User('John', 'Doe', 25, 0);
    const user2 = new User('Jane', 'Smith', 30, 1);
    userCollection.addUser(user1);
    userCollection.addUser(user2);

    const reverseIterator: Iterator<User> = userCollection.getReverseIterator();

    expect(reverseIterator.next()).toBe(user2);
    expect(reverseIterator.next()).toBe(user1);
    expect(reverseIterator.hasNext()).toBe(false);
  });
});

describe('AlphabeticalOrderIterator', () => {
  let userCollection: UserCollection;

  beforeEach(() => {
    userCollection = new UserCollection();
  });

  it('should iterate over users in alphabetical order', () => {
    const user1 = new User('John', 'Doe', 25, 0);
    const user2 = new User('Jane', 'Smith', 30, 1);
    const user3 = new User('Adam', 'Johnson', 35, 2);
    userCollection.addUser(user1);
    userCollection.addUser(user2);
    userCollection.addUser(user3);

    const iterator: Iterator<User> = new UserIterator(userCollection);

    expect(iterator.next()).toBe(user1);
    expect(iterator.next()).toBe(user2);
    expect(iterator.next()).toBe(user3);
    expect(iterator.hasNext()).toBe(false);
  });

  it('should iterate over users in reverse order', () => {
    const user1 = new User('Jane', 'Smith', 30, 1);
    const user2 = new User('Zoe', 'Doe', 25, 0);
    const user3 = new User('Adam', 'Johnson', 35, 2);
    userCollection.addUser(user1);
    userCollection.addUser(user2);
    userCollection.addUser(user3);

    const reverseIterator: Iterator<User> = new UserIterator(
      userCollection,
      true,
    );

    expect(reverseIterator.next()).toBe(user3);
    expect(reverseIterator.next()).toBe(user2);
    expect(reverseIterator.next()).toBe(user1);
    expect(reverseIterator.hasNext()).toBe(false);
  });
});
