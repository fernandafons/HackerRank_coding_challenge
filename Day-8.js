function processData(input) {
  input = input.split('\n')
  let numberOfInputs = parseInt(input[0])

  let phonebook = {}
  for (let i = 0; i< numberOfInputs; i++){
      let line = input[i+1]
      line = line.split(' ')
      phonebook[line[0]] = line[1]
  }

  for (let i = numberOfInputs+1; i < input.length; i++ ){
      let num = (phonebook[input[i]])
      if (num === undefined){
          console.log('Not found')
      } else {
          console.log(input[i]+'='+num)
      }
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
