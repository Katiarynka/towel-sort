
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let array = [];
	for (let i = 0; i < matrix.length; i++){
		if (i%2 === 1) {
			array = array.concat(matrix[i].reverse())
		}
		else {
			array = array.concat(matrix[i])
		}	
	}
	return array;
}
