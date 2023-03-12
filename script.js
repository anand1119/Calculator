const expressions = document.querySelector("#expressions");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.id==="="){
            expressions.value = eval(expressions.value);
        }
        else if(btn.id==="ac"){
            expressions.value = "";;
        }
        else if(btn.id==="del"){
            expressions.value = expressions.value.slice(0, -1);
        }
        else{
            expressions.value+=btn.id;
        }
    });
});