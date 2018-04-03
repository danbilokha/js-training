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

export {getPrivateAndWorkTasks};
