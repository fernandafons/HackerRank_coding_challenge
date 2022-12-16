// Task
// Given a string, S, of length N that is indexed from 0 to N - 1, 
// print its even-indexed and odd-indexed characters as 2 
// space-separated strings on a single line (see the 
//   Sample below for more detail).

// Note: 0 is considered to be an even index.

// Solution

function processData(input) {
  message = input.split("\n");
  
  let n = parseInt(message[0]);
  
  for (let i = 0; i < n; i++) {
      let word = message[i + 1];
      let arr = word.split('');
      let even = "";
      let odd = "";
      
      for (let y = 0; y < word.length; y++) {
          if (y%2 == 0)
              even = even + arr[y];
          else
              odd = odd + arr[y];
      }
      console.log(even + " " + odd);
          
  }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});