var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of node.js? ", function(answer) {
  rl.question("What do you think of node.js? ", function(answer2) {
    // TODO: Log the answer in a database
    //console.log("Thank you for your valuable feedback:", answer);
    if(isNaN(parseInt(answer,10)) || isNaN(parseInt(answer2,10)) )
  	 console.log('please type number');
  	 else
  	  console.log('the total is ' + (parseInt(answer,10)+parseInt(answer2,10)));

    rl.close();
  });
});