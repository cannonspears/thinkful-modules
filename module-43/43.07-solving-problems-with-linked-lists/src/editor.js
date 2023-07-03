const LinkedList = require("./lib/linkedList");

class Editor {
  constructor(text = new LinkedList()) {
    this.text = text;
    this.cursor = this.text.find((node, index) => index === this.text.length - 1);
  }

  insert(char) {
    if (this.cursor) {
      this.text.insert(char, (node) => node.value === this.cursor.value);
    } else {
      this.text.insertAtHead(char);
    }
    return this.arrowRight();
  }

  delete() {
    if (this.cursor) {
      const location = this.cursor;
      this.arrowLeft();
      this.text.remove((node) => node === location);
    }
    return this;
  }

  arrowLeft() {
    if (this.cursor && this.text.head) {
      this.cursor = this.text.findWithPrevious((node) => this.cursor.value === node.value)[1];
    }
    return this;
  }

  arrowRight() {
    if (this.cursor && this.cursor.next) {
      this.cursor = this.cursor.next;
    } else if (!this.cursor) {
      this.cursor = this.text.head;
    }
    return this;
  }
}

module.exports = Editor;


module.exports = Editor;
