// Name : Abdelrahman Ayman
// Task : 1
// Differences between Var and Let :
/*
 -- Var can be declared and accessed globally.
 -- Let can be declared globally, but its access is limited to the block in which it is declared.
*/

function testVar() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log("Inside If (Scop) -- var: ", x); // Output --> 2
  }
  console.log("Outside IF (Scop) -- var: ", x); // Output --> 2
}

function testLet() {
  let y = 1;
  if (true) {
    let y = 2;
    console.log("Inside If (Scop) --  let: ", y); // Output --> 2
  }
  console.log("Outside IF (Scop) -- let: ", y); // Output --> 1
}

testVar();
testLet();

// Var --> Inside The Scop == Outside The Scop
// Let --> Inside The Scop != Outside The Scop
