var my2DArray = [
    [],      // array0
    [],      // array1
    [],      // array2
    [],      // array3
    [],      // array4
    [],      // array5
    [],      // array6
    [],      // array7
    [],      // array8
    [],      // array9
    [],      // array10
    [],      // array11
];

for (let i = 0; i < my2DArray.length; i++)
    for (let j = 0; j < my2DArray.length; j++)
        my2DArray[i][j] = Math.floor(Math.random() * 10) + 1;
var myButtonsArray = document.getElementById('myTable').getElementsByTagName("button");

/* 
After the webpage is loaded, the code in the for loop will be set for each of the 144 buttons that are created
*/
for (let i = 0; i < myButtonsArray.length; i++) {
    myButtonsArray[i].setAttribute("id", i); // Setting an id  for each button (0 - 143)Alternative way => myButtonsArray[i].id = i;

    var initialColor = myButtonsArray[i].style.color;

    // Setting an EventListener for each button
    myButtonsArray[i].addEventListener("click", function () {
        // Clearing the content and the color of the buttons
        for (let x = 0; x < myButtonsArray.length; x++) {
            myButtonsArray[x].innerHTML = "";
            myButtonsArray[x].style.background = initialColor;
        }

        let rowNumber = 0;
        let colNumber = 0;
        let counter = 1;

        rowNumber = Math.floor(i / my2DArray.length);
        colNumber = i % my2DArray.length;

        let currentRow = 0;
        let currentCol = 0;
        for (let x = 0; x < my2DArray.length; x++) {
            currentRow = Math.floor(x / my2DArray.length);
            currentCol = x % my2DArray.length;

            // Filling horizontally
            if (x <= colNumber) {
                myButtonsArray[i - x].innerHTML = "X";
                myButtonsArray[i - x].style.background = "green";
            }
            else if (x > colNumber) {
                myButtonsArray[i + counter].innerHTML = "X";
                myButtonsArray[i + counter].style.background = "green";
                counter++;
            }

            // Filling vertically
            myButtonsArray[colNumber + (my2DArray.length * x)].innerHTML = "Y";
            myButtonsArray[colNumber + (my2DArray.length * x)].style.background = "green";
        }

        function fillInNorthEstDiagonal() {
            // setting x and y Values to get in the loop
            let D = i;
            let X = Math.floor(D / my2DArray.length);
            let Y = D % my2DArray.length;

            var reachedEnd = 0; // reached end status

            while (reachedEnd == 0) {
                if (X == 0 || Y == (my2DArray.length - 1)) {
                    reachedEnd = 1;   // The loop reached an end
                }
                else {
                    myButtonsArray[D].innerHTML = "D";
                    myButtonsArray[D].style.background = "yellow";
                    D = D - my2DArray.length + 1;
                    X = Math.floor(D / my2DArray.length);
                    Y = D % my2DArray.length;

                    if (X == 0 || Y == (my2DArray.length - 1)) {
                        myButtonsArray[D].innerHTML = "D";
                        myButtonsArray[D].style.background = "yellow";
                    }
                }
            }
        }

        function fillingNorthWestDiagonal() {
            // setting x and y Values to get in the loop
            let D = i;
            let X = Math.floor(D / my2DArray.length);
            let Y = D % my2DArray.length;

            var reachedEnd = 0; // reached end status

            while (reachedEnd == 0) {
                if (X == 0 || Y == 0) {
                    reachedEnd = 1;   // The loop reached an end
                }
                else {
                    myButtonsArray[D].innerHTML = "D";
                    myButtonsArray[D].style.background = "yellow";
                    D = D - my2DArray.length - 1;
                    X = Math.floor(D / my2DArray.length);
                    Y = D % my2DArray.length;

                    if (X == 0 || Y == 0) {
                        myButtonsArray[D].innerHTML = "D";
                        myButtonsArray[D].style.background = "yellow";
                    }
                }
            }
        }

        function fillingSouthEstDiagonal() {
            // setting x and y Values to get in the loop
            let D = i;
            let X = Math.floor(D / my2DArray.length);
            let Y = D % my2DArray.length;

            var reachedEnd = 0; // reached end status

            while (reachedEnd == 0) {
                if (X == (my2DArray.length - 1) || Y == (my2DArray.length - 1)) {
                    reachedEnd = 1;   // The loop reached an end
                }
                else {
                    myButtonsArray[D].innerHTML = "D";
                    myButtonsArray[D].style.background = "yellow";
                    D = D + my2DArray.length + 1;
                    X = Math.floor(D / my2DArray.length);
                    Y = D % my2DArray.length;

                    if (X == (my2DArray.length - 1) || Y == (my2DArray.length - 1)) {
                        myButtonsArray[D].innerHTML = "D";
                        myButtonsArray[D].style.background = "yellow";
                    }
                }
            }
        }

        function fillingSouthWestDiagonal() {
            // setting x and y Values to get in the loop
            let D = i;
            let X = Math.floor(D / my2DArray.length);
            let Y = D % my2DArray.length;

            var reachedEnd = 0; // reached end status

            while (reachedEnd == 0) {
                if (X == (my2DArray.length - 1) || Y == 0) {
                    reachedEnd = 1;   // The loop reached an end
                }
                else {
                    myButtonsArray[D].innerHTML = "D";
                    myButtonsArray[D].style.background = "yellow";
                    D = D + my2DArray.length - 1;
                    X = Math.floor(D / my2DArray.length);
                    Y = D % my2DArray.length;

                    if (X == (my2DArray.length - 1) || Y == 0) {
                        myButtonsArray[D].innerHTML = "D";
                        myButtonsArray[D].style.background = "yellow";
                    }
                }
            }
        }

        function fillingInTheNumbers() {
            for (let x = 0; x < myButtonsArray.length; x++) {
                if (myButtonsArray[x].innerHTML !== "X" && myButtonsArray[x].innerHTML !== "Y" && myButtonsArray[x].innerHTML !== "D" &&
                    myButtonsArray[x].innerHTML !== "0") {
                    myButtonsArray[x].innerHTML = my2DArray[Math.floor(x / my2DArray.length)][x % my2DArray.length];
                }
            }
        }


        fillInNorthEstDiagonal();
        fillingNorthWestDiagonal();
        fillingSouthEstDiagonal();
        fillingSouthWestDiagonal();

        myButtonsArray[i].innerHTML = "0";  // Setting the clicked button to zero
        myButtonsArray[i].style.background = "red";

        fillingInTheNumbers();

    });
}

// Reset button — clear all buttons and regenerate random numbers
document.getElementById('reset-btn').addEventListener('click', function () {
    for (let i = 0; i < my2DArray.length; i++)
        for (let j = 0; j < my2DArray.length; j++)
            my2DArray[i][j] = Math.floor(Math.random() * 10) + 1;
    for (let x = 0; x < myButtonsArray.length; x++) {
        myButtonsArray[x].innerHTML = "";
        myButtonsArray[x].style.background = "";
    }
});		
