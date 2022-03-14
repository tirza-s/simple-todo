// const subreddits = ["tech", "animals", "photography","design", "food"];

// for(let i=0; i<subreddits.length; i++) {
//     console.log(`Visit reddit.com /r/ ${subreddits[i]}`)
// }

// for(let sub of subreddits){
//     console.log("break here")
//     console.log(`Visit reddit.com /r/` + sub);
// }

let input = prompt("What would you like to do ?");
const todos = ["Walk the dog", "Dinner with friends"];
while(input !== "quit" && input !== "q"){
    if(input === "list") {
        console.log("**********")
        for(i = 0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********")
    }else if(input === "new"){
        const newToDo = prompt("Please enter your new todo");
        todos.push(newToDo);
        console.log(`${newToDo} added to the list`)
    }else if(input === "delete"){
        const index = parseInt(prompt("Please enter an index you like to delete:"));
            if(!Number.isNaN(index)){
                const deleted = todos.splice(index,1);
                console.log(`Item has been deleted ${deleted[0]}`);
            }else{
                console.log("UnKnown Index");
            }
        }
        input = prompt("What would you like to do ? ")
    }
console.log("You Quit the App !");
