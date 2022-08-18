"use strict";
function mapNode(node, f) {
    return Object.assign(Object.assign({}, node), { value: f(node.value) });
}
;
let a = { value: 'a' };
let b = { value: 'b', isLeaf: true };
let c = { value: 'c', children: [b] };
let a1 = mapNode(a, _ => _.toUpperCase());
let b1 = mapNode(b, _ => _.toUpperCase());
let c1 = mapNode(a, _ => _.toUpperCase());
//# sourceMappingURL=BinaryTree.js.map