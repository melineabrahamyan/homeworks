/*
 *1
 * grel funkciya vore vorpes argument stanum e erku zangvats, zangvatsneric meke kochvum e
 * strings myuse lookups vore kveradardzni array vorum nerarvats klnien te lookup arrayi miji andamneric
 * amen meke qani angam ka strings array um
 *
 * orinak
 *
 * const lookup = ['i', 'love', 'sadakhlo', 'esminich']
 * const strings = ['i', 'i', 'sadakhlo', 'i'];
 *
 *
 *
 * foo(lookup, strings)  kveradardzni [3, 0, 1, 0]
 *
 * QANI VOR 'i'-e  krknvuma 3 angam 'love'- e 0, 'sadakhlo'-n 1 angam isk 'esminch' - e 3;
 *
 *
 * */
function foo(lookup, strings) {
  return lookup.reduce((aggr, val) => {
    let count = strings.filter((val2) => {
      return val2 === val;
    }).length;
    aggr.push(count);
    return aggr;
  }, []);
}
const lookup = ["i", "love", "sadakhlo", "esminich"];
const strings = ["i", "i", "sadakhlo", "i"];
//console.log(foo(lookup, strings));

/*
 *2
 * grel funkcia vore kstana vorpes argument array kazmvac 4 hat tvic orinak [1,2,3,4]
 * kveradardzni object vore kunena erku hat key voronq klinen hamapatasxanabar
 *  arrayum gtnvox tveric 4 ic 3 i amenapoqr gumare ev nayev amenamec gumare
 *
 *
 * ORINAK [1,2,3,4] i  depqum kveradardzni  object { max: 9, min : 6 }
 * qani vor tveric amenamecere tvyal depqum 2+3+4 = 9 isk amenapoqere irar gumareluc
 * kstacvi 1+2+3 = 6;
 * */
function possibleMaxMin(arr) {
  let sortedArr = arr.sort();
  let max = 0,
    min = 0;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    min += sortedArr[i];
    max += sortedArr[i + 1];
  }
  return {
    max: max,
    min: min,
  };
}
//console.log(possibleMaxMin([1, 2, 3, 4]));

/*
 *3
 * Grel funkciya vore kndhuni vorpes argument array vortex klini tver voronq bolore kkrknven erku angam baci mi hatic
 * Petka gtnel er veradardznel ayd chkrknvox tive
 *
 *
 * ORINAK [1,2,2,1,3,4,4,3,5] i  depqum kveradardzni 5 qani vor 5 e chi krknvum;
 * */
function uniqe(arr) {
  let sortedArr = [undefined, ...arr.sort(), undefined];
  for (let i = 1; i < sortedArr.length - 1; i++) {
    if (
      sortedArr[i] !== sortedArr[i + 1] &&
      sortedArr[i] !== sortedArr[i - 1]
    ) {
      return sortedArr[i];
    }
  }
}
//console.log(uniqe([1, 2, 2, 1, 3, 4, 4, 3, 5]));

/*
 * 4
 * trvats e qarakusi maric vore baxkacac e tveric
 * petk e aj ankyunagcov hamapatasxanabar tvere gumarel irar
 *
 *               1 2 3
 *               4 5 6
 *               7 8 9
 *
 *
 *
 *   ays depqum aj ankyunagic e hamarvum 1 > 5 > 9;
 *
 *   kstacvi 15
 *
 *   foo([1,2,3,4,5,6,7,8,9]) petk e het veradardzni ->  15
 *
 *   xndrumem nkatel vor matric e kara lini tarber length i bayc misht qarakusi
 *
 *
 *   1 2 3 4
 *   5 6 7 8
 *   9 10 11 12
 *   13 14 15 16
 * */
function diagonalSum(arr) {
  let size = Math.sqrt(arr.length);
  let matrix = [];
  for (let i = 0; i < arr.length; i += size) {
    matrix.push(arr.slice(i, i + size));
  }

  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += matrix[i][i];
  }
  return sum;
}
//console.log(diagonalSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
