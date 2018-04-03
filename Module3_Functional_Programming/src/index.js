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
    return concatSameTasks(
            tasksArr
            .filter(({type}) => type === "work" || type === "private")
        )
        .values(({name, duration}) => `Total duration of '${name}' is ${duration}`);
};

function concatSameTasks(tasks) {
    return tasks.reduce((newArr, task) => {
        return newArr.set(task.name, newArr.has(task.name) ? addTasksDuration(newArr.get(task.name), task) : task);
    }, new Map());
}

function addTasksDuration(t1, t2) {
    return Object.assign({}, t1, {duration: t1.duration + t2.duration});
}

console.log(getPrivateAndWorkTasks(tasks));
