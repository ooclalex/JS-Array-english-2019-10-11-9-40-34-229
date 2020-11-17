// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
Array.isArray(a);
Array.isArray(b);

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a = a.map(x => x * 2);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var case1 = colors.join(" ");
var case2 = colors.join("+");
var case3 = colors.join(",");

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a = a.sort((a, b) => b - a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var d = {};
var max = 0;
var most_frequent = a[0];
for (var i of a) {
	if (d[i]) {
    d[i]++;
    if (d[i] > max) {
      max = d[i];
      most_frequent = i;
    }
  }
  else {
  	d[i] = 1;
  }
}
console.log(most_frequent);