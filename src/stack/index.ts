export class Stack {
  private elements: number[] = [];

  push(element: number) {
    this.elements.push(element);
  }

  pop() {
    this.elements.pop();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }
}
