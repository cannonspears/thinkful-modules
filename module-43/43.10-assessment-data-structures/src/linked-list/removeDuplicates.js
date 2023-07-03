function removeDuplicates(sortedLinkedList) {
  let pointer = sortedLinkedList.head;

  while (pointer !== null && pointer.next !== null) {
    if (pointer.value === pointer.next.value) {
      pointer.next = pointer.next.next;
    } else {
      pointer = pointer.next
    }
  }

  return sortedLinkedList;
}

module.exports = removeDuplicates;