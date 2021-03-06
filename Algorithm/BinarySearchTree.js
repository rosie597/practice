/**
 * 二叉树类，前中后序遍历
 */
// 创建二叉搜索树类
function BinarySearchTree() {
	var node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	};
	var root = null;//声明变量控制根元素
	//将节点加在非根节点的位置时
	var insertNode = function(node,newNode) {
		if (newNode.key < node.key){
			if (node.left === null){
				node.left = newNode;
			} else {
				insertNode(node.left,newNode);
			}
		}else{
			if(node.right === null){
				node.right = newNode;
			}else{
				insertNode(node.right,newNode);
			}
		}
	}
	//插入一个新键
	this.insert = function(key){
		var newNode = new node(key);
		if(root === null){
			root = newNode;
		}else{
			insertNode(root,newNode);
		}
	}
	//中序遍历，从最小到最大访问所有节点
	var inOrderTraverseNode = function(node, callback) {//这里用到回调函数对遍历到的每个节点进行操作
		if(node !== null) {
			inOrderTraverseNode(node.left,callback);//运用递归的算法
			callback(node.key);
			inOrderTraverseNode(node.right,callback);
		}
	};
	this.inOrderTraverse = function(callback) {
		inOrderTraverseNode(root,callback);
	};
	//先序遍历，优先于后代节点的顺序访问每个节点的，可用于打印一个结构化文档
	var preOrderTraverseNode = function(node,callback) {
		if(node !== null){
			callback(node.key);
			preOrderTraverseNode(node.left,callback);
			preOrderTraverseNode(node.right,callback);
		}
	};
	this.preOrderTraverse = function(callback) {
		preOrderTraverseNode(root, callback);
	};
	//后续遍历，先访问节点的后代节点
	var postOrderTraverseNode = function(node, callback) {
		if(node !== null){
			postOrderTraverseNode(node.left,callback);
			postOrderTraverseNode(node.right,callback);
			callback(node.key);
		}
	};
	this.postOrderTraverse = function(callback){
		postOrderTraverseNode(root,callback);
	};
	//找最小值，即为最左子树的最底端
	this.min = function() {
		return minNode(root);
	};
	var minNode = function(node) {
		if(node) {
			while(node && node.left !== null) {
				node = node.left
			}
			return node.key;
		}
		return null;
	};
	//最大值，右子树最低端
	this.max = function() {
		return maxNode(root);
	};
	var maxNode = function(node) {
		if(node) {
			while(node && node.right !== null) {
				node = node.right;
			}
			return node.key
		}
		return null;
	}
	//搜索值
	this.search = function(key) {
		return searchNode(root,key);
	};
	var searchNode = function(node,key) {
		if(node === null) {
			return false;
		}
		if(key < node.key) {
			return searchNode(node.left,key);
		}
		else if(key>node.key){
			return searchNode(node.right,key)
		}
		else{
			return true;
		}
	}
	//移除一个节点
	this.remove = function(key){
		root = removeNode(root,key);
	}
	var removeNode = function(node,key){
		if(node === null) {
			return null;
		}
		if(key < node.key) {
			node.left = removeNode(node.left,key);
			return node;
		}
		if(key>node.key) {
			node.right = removeNode(node.right,key);
			return node;
		}else {
			//找到了要删除的节点
			//一个叶节点
			//一个只有一个子节点的节点
			//一个有两个子节点的节点
		}
	}
};

//示例
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(1);
tree.insert(16);
tree.insert(21);
tree.insert(6);
tree.insert(5);
tree.insert(17);
tree.insert(19);
tree.insert(33);
tree.insert(28);
tree.insert(15);
function printNode(val) {
	console.log(val);
}
console.log('中序遍历');
tree.inOrderTraverse(printNode);
console.log('先序遍历');
tree.preOrderTraverse(printNode);
console.log('后序遍历');
tree.postOrderTraverse(printNode);

