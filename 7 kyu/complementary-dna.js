//? Get DNA complementary side
//* Example
//! A => T, T => A, G => C, C => A
//! AAAA => TTTT, ATTGC => TAACG

function DNAStrand(dna) {
  const original = dna.split('');
  const converted = [];

  for (let char of original) {
    if (char === 'A') {
      const i = char.replace('A', 'T');
      converted.push(i);
    } else if (char === 'T') {
      const i = char.replace('T', 'A');
      converted.push(i);
    } else if (char === 'G') {
      const i = char.replace('G', 'C');
      converted.push(i);
    } else if (char === 'C') {
      const i = char.replace('C', 'G');
      converted.push(i);
    }
    output = converted.join('');
  }
  console.log(output);
}

DNAStrand('GTATF');
//CATA

/**
//* Other Solutions
//* Solution #1
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

//* Solution #2
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

*/
