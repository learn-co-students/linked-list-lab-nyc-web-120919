function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(node, collection) {
    let nextAddress = node.next
    return collection[`${nextAddress}`]
}

function nodeAt(idx, linkedList, collection) {
    let node = collection[linkedList]
    for (let i = 0; i < idx; i++) {
        node = next(node, collection)
    }
    return node
}

function addressAt(idx, linkedList, collection) {
    if (idx === 0) {
        return linkedList
    } else {
        let node = nodeAt(idx - 1, linkedList, collection)
        return node.next
    }
}

function indexAt(node, collection, linkedList) {
    let head = collection[linkedList];
    let newNode;
    if (node == head) {
        return 0;
    } else {
        while (newNode != node) {
        newNode = next(head, collection)
            if (newNode == node) {
                return 1
            }
        }
    }
}

function insertNodeAt(idx, address, linkedList, collection) {
    let prevNode = nodeAt(idx - 1, linkedList, collection)
    let newAddress = prevNode.next 
    prevNode.next = address
    
    let nextNode = nodeAt(idx, linkedList, collection)
    nextNode.next = newAddress
}

function deleteNodeAt(idx, linkedList, collection) {
    let prevNode = nodeAt(idx - 1, linkedList, collection)
    let newAddress = (next(prevNode, collection).next)
    prevNode.next = newAddress
}