const inputBox = document.getElementById("inputbox");
const buttons = document.querySelectorAll("#Btn");
const numPrint = document.querySelectorAll(".num");
const equalButton = document.querySelector(".equal"); // Equal button with class "equal"
const acButton = document.querySelector(".ac"); // AC button with class "ac"
const delButton = document.querySelector(".dlt"); // DEL button with class "del"

// Function to print numbers and operators
const Print = () => {
    numPrint.forEach((e) => {
        e.addEventListener("click", () => {
            const Num = e.textContent;
            if (inputBox.placeholder === "0") {
                inputBox.placeholder = Num; // Replace "0" with clicked number
            } else {
                inputBox.placeholder += Num; // Append clicked number
            }
        });
    });
};
Print();

// Function to handle the Equal button and evaluate the equation
const handleEqual = () => {
    const evaluateExpression = () => {
        try {
            const result = eval(inputBox.placeholder); // Evaluate the mathematical expression
            inputBox.placeholder = result; // Display the result in the placeholder
            console.log(`Equation solved. Result: ${result}`);
        } catch (error) {
            inputBox.placeholder = "Error"; // Show error if evaluation fails
            console.log("Invalid equation");
        }
    };

    // Add event listener for the Equal button click
    equalButton.addEventListener("click", evaluateExpression);

    // Add event listener for pressing the "Enter" key (which will act like the equal button)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            evaluateExpression(); // Evaluate when Enter is pressed
        }
    });
};
handleEqual();

// Function to handle the AC (clear) button
const handleAC = () => {
    const clearInput = () => {
        inputBox.placeholder = "0"; // Reset the placeholder to "0"
        console.log("AC button clicked. Input cleared.");
    };

    // Add event listener for the AC button click
    acButton.addEventListener("click", clearInput);

    // Add event listener for the Delete key (which acts like the AC button)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Delete") {
            clearInput(); // Clear the input when Delete key is pressed
        }
    });
};
handleAC();

// Function to handle the DEL button
const handleDEL = () => {
    const deleteLastChar = () => {
        inputBox.placeholder = inputBox.placeholder.slice(0, -1); // Remove the last character
        if (inputBox.placeholder === "") {
            inputBox.placeholder = "0"; // Reset to "0" if input becomes empty
        }
        console.log("DEL button clicked. Last character removed.");
    };

    // Add event listener for the DEL button click
    delButton.addEventListener("click", deleteLastChar);

    // Add event listener for the Backspace key (which acts like the DEL button)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            deleteLastChar(); // Remove the last character when Backspace is pressed
        }
    });
};
handleDEL();

// Handle keyboard input for numbers and operators
document.addEventListener("keydown", (e) => {
    const key = e.key;
    
    // Check if the key is a number or operator
    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        if (inputBox.placeholder === "0") {
            inputBox.placeholder = key; // Replace "0" with the first number or operator
        } else {
            inputBox.placeholder += key; // Append the number or operator
        }
    }
});

// Log button text when clicked (for debugging)
buttons.forEach((e) => {
    e.addEventListener("click", () => {
        const buttonText = e.textContent;
        console.log(buttonText);
        console.log(`Button ${buttonText} was clicked`);
    });
});






//const inputBox= document.getElementById("inputbox");
//const buttons= document.querySelectorAll("#Btn");
//const numPrint=document.querySelectorAll(".num");
//const alp=document.querySelector(".dlt");
//const allClear=document.querySelector(".ac");
//const Equal=document.querySelector(".equal");
//
//const string="";
//
//const Print=()=>{
//    numPrint.forEach((e)=>{
//        e.addEventListener("click",()=>{
//            const Num=e.textContent;
//            if(inputBox.placeholder==="0"){
//                inputBox.placeholder=Num;
//            }
//            else{
//                inputBox.placeholder+=Num;
//            }
//            
//        });
//    });
//};
//Print();
//
//const allDelete=()=>{
//    allClear.addEventListener("click",()=>{
//        inputBox.placeholder="0";
//    });
//
//};
//allDelete();
//
//const Equals=()=>{
//    Equal.addEventListener("click",()=>{
//        try{
//            const result=eval(inputBox.placeholder);
//            inputBox.placeholder=result;
//        }
//        catch(error){
//            inputBox.placeholder="ERROR";
//            console.log("Invalid equation");
//            
//        }
//    });
//
//};
//Equals();
//
//
//const Delete=()=>{
//        alp.addEventListener("click",()=>{
//            inputBox.placeholder=inputBox.placeholder.slice(0,-1);
//            if (inputBox.placeholder === "" || inputBox.placeholder.length === 0){
//                inputBox.placeholder="0";
//            }
//        });
//    };
//    Delete();
//
//buttons.forEach((e)=>{
//
//    e.addEventListener("click",()=>{
//        const buttonText=e.textContent;
//        console.log(buttonText);
//        console.log(`Button ${buttonText} was clicked`);
//
//    });
//});
//
//
