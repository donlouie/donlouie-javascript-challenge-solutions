/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
	// good luck

	const symbol = card.slice(-1);
	let suit = '';
	switch (symbol) {
		case '♣':
			suit = 'clubs';
			break;
		case '♦':
			suit = 'diamonds';
			break;
		case '♥':
			suit = 'hearts';
			break;
		case '♠':
			suit = 'spades';
			break;
		default:
			break;
	}
	return suit;
}

console.log(defineSuit('3♣'));
console.log(defineSuit('3♥'));

// Other Solution
// Solution #1
/*
function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  return s[card.charAt(card.length - 1)]
}
*/
