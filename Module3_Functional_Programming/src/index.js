const tasks = [
 { name: "Prepare presentation", duration: 120, type: "work" },
 { name: "Work out", duration: 60, type: "private" },
 { name: "Fill time journal", duration: 10, type: "work" },
 { name: "Plan year 2018", duration: 180, type: "common" },
 { name: "Work out", duration: 60, type: "private" },
 { name: "Watch a movie", duration: 120, type: "private" },
 { name: "Work out", duration: 60, type: "private" },
 { name: "Fill time journal", duration: 10, type: "work" }
]; 

function getPrivateAndWorkTasks(tasksArr) {
    return calculateSameTaskDuration(
            tasksArr
            .filter(({type}) => type === "work" || type === "private")
        ).map(({name, duration}) => `Total duration of '${name}' is ${duration}`);
};

function calculateSameTaskDuration(tasks) {
    return tasks.reduce((newArr, task) => {
        console.log("ARR: ", newArr);
        console.log("TASK: ", task);
        return newArr.concat([task]);
    }, []);
}

console.log(getPrivateAndWorkTasks(tasks));
