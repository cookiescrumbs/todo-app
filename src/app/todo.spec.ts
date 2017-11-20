import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {

    let todo = new Todo({
      title: 'Hello Ada',
      complete: true
    });

    expect(todo.title).toEqual('Hello Ada');
    expect(todo.complete).toEqual(true);
  });
});
