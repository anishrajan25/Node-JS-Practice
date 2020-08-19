var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b );

    rect(l,b, (err, rectangle) => {
        if(err) {
            console.log("ERROR: " + err.message);
        }
        else {
            // no need to send x, y again because they are already present
            // in the call to rect module
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement is after the call to rect()")
}

solveRect(4,3);
solveRect(8,2);
solveRect(0,8);
solveRect(-5,2);