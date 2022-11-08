const areaOrPerimeter = function (l, w) {
	// Return your answer
	return l === w ? l * w : l*2 + w*2;
};

console.log(areaOrPerimeter(4, 4)); // 4*4 16
console.log(areaOrPerimeter(6, 10)); // 6*6 + 10*10 32