'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    constructor(firstName, lastName, id, scores){
        super(firstName, lastName, id);
        this.scores = scores;
    }

    
    calculate() {
      const sum = this.scores.reduce((sum, elem) => sum + elem, 0);
      var grade = sum/this.scores.length;
      
      
      if (grade < 40){
        return 'T';
      } else if(grade < 55){
        return 'D';
      } else if(grade < 70){
        return 'P';
      } else if(grade < 80){
        return 'A';
      } else if(grade < 90){
        return 'E';
      } else if(grade <= 100){
        return 'O';
      }
    
    };
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
