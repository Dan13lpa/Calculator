export let renderCalculator = () => {

    const currentOperation = document.querySelector("#current-operation");
    const lastOperation = document.querySelector("#last-operation");
    const buttons = document.querySelectorAll(".calculator-button");
        
    
    // Crear una función y llamarla desde otra función que tiene un evento de click
    
    // function handleClick(event) {
    //   const value = event.target.value;
    
    //   // manejar los botones de borrar
    //   if (value === "C") {
    //     expression = "";
    //   } else if (value === "CE") {
    //     expression = expression.slice(0, -1); // borrar el último carácter
    //   } else if (value === "del") {
    //     expression = expression.slice(0, -1); // borrar el último carácter
    //   }
    //   // manejar el botón de igual
    //   else if (value === "=") {
    //     try {
    //       const result = eval(expression);
    //       lastOperation.textContent = expression + " =";
    //       currentOperation.value = result;
    //       expression = result.toString();
    //     } catch (error) {
    //       currentOperation.value = "Error";
    //       expression = "";
    //     }
    //   }
    //   // manejar los demás botones
    //   else {
    //     expression += value;
    //     currentOperation.value = expression;
    //   }
    // }
    
    // buttons.forEach((button) => {
    //   button.addEventListener("click", handleClick);
    // });
    
    
    buttons.forEach((button) => {
        
        button.addEventListener("click", () => {
            
            const value = button.value;
        
            if (value === "C") {
                currentOperation.value = "0"
                lastOperation.value = "";
            } else if (value === "CE") {
                currentOperation.value = "0"
            } else if (value === "del") {
                currentOperation.value = currentOperation.value.slice(0, -1); // borrar el último carácter
            } else if (value === "=") {
                try {
                    const result = eval(currentOperation.value);
                    currentOperation.value = result;
                } catch (error) {
                    currentOperation.value = "Error";
                    expression = "";
                }
            }
            else {
                // if( currentOperation.value == "0") {
                //     if(value === "."){
                //         if( currentOperation.value.indexOf(".") == -1){
                //             currentOperation.value += value;
                //         }
                //     }else{
                //         currentOperation.value = value;
                //     }
                // }else{
                //     currentOperation.value += value;
                // }

                if (currentOperation.value === "0" && value === ".") {
                    currentOperation.value = "0.";
                } else if (currentOperation.value.indexOf(".") >= 0 && value === ".") {
                    // Do nothing
                } else {
                    currentOperation.value += value;
                }
            } 
        });
    });
};
