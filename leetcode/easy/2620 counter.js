/*
https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
*/

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
	let isFirst = true;
	return function () {
		if (!isFirst) {
			return (n += 1);
		} else {
			isFirst = false;
			return n;
		}
	};
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
