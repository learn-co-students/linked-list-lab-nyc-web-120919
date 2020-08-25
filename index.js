function getName(node) {
    return node.name
}

function headNode(head, list) {
    return list[head]
}

function next(node, list) {
    let next = node.next
    return list[next]
}

function nodeAt(index, head, list) {
    let node = list[head]
    for(let i = 0; i < index; i++) {
        node = next(node, list)
    }
    return node
}

function addressAt(index, head, list) {
    if(index === 0) {
        return head
    } else {
        let node = nodeAt(index - 1, head, list)
        return node.next
    }
}

function indexAt(node, list, head) {
    let index = 0
    let currentNode = list[head]
    while(currentNode) {
        if(currentNode === node) {
            return index
        } else {
            currentNode = list[currentNode.next]
            index++
        }
    }
}

function insertNodeAt(index, name, head, list) {
    let prevNode = nodeAt(index - 1, head, list)
    let nextNode = prevNode.next
    prevNode.next = name
    let newNode = list[name]
    newNode.next = nextNode
    return newNode
}

function deleteNodeAt(index, head, list) {
    if(index === 0)
        delete list[head]
    else {
        let prevNode = nodeAt(index - 1, head, list)
        let node = list[prevNode.next]
        let next = prevNode.next
        prevNode.next = node.next
        delete list[next]
    }
}