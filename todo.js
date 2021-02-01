const toDoList = ["Go for a run", "Walk the dog"];

let action = prompt("Please choose an action:");

while (action !== "quit" && action !== "q") {
    if (action === "new") {
        const addToDo = prompt("Enter toDo:")
        toDoList.push(addToDo);
        console.log(`${addToDo} has been added to #${toDoList.length - 1} on the list.`)
        action = prompt("Please choose an action:");
    } else if (action === "list") {
        console.log(" ***** ***** ***** ");
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`#${i}: ${toDoList[i]}`);   
        }
        console.log(" ***** ***** ***** ");
        action = prompt("Please choose an action:");
    } else if (action === "delete") {
        const remove = parseInt(prompt("Remove which toDo:"));
        if (!Number.isNaN(remove)) {
            const deleted = toDoList.splice(remove, 1);
            console.log(`You have deleted item #${remove} ${deleted[0]} from the list.`);
        }
        action = prompt("Number not valid, Please choose an action:");
} else {
        action = prompt("Please choose an action:");

    }
}

    console.log("Exiting App");