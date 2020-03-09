class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/**
 * 链表
 */
class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(element) {
    let node = new Node(element);
    let cur = null;

    if (this.head === null) {
      this.head = node;
    } else {
      cur = this.head;

      while (cur.next) {
        cur = cur.next;
      }

      cur.next = node;
    }
    this.length += 1;
  }

  removeAt(index) {
    let cur = this.head;
    let i = 0;
    let prev;

    if (index === 0) {
      this.head = cur.next;
    } else {
      // 找到待删除节点，循环完毕，则表示已经找到待删除节点
      while (i < index) {
        prev = cur;
        cur = cur.next;
        i++;
      }

      prev.next = cur.next;
      cur.next = null;
    }

    this.length -= 1;
  }

  toString() {
    let cur = this.head;
    let res = [];

    while (cur) {
      res.push(cur.element);
      cur = cur.next;
    }

    return res.join("==>");
  }
}

const list = new LinkNodeList();

list.append("Hello");
list.append("world");
list.append("你今天好吗");
list.append("我今天很好");
console.log(list.toString());

list.removeAt(2);
list.toString();

console.log(list.toString());
