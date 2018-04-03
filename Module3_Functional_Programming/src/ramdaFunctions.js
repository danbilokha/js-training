import R from 'ramda';

function doRamda(tasksArr) {
    return R.reduce(
        (acc, task) => {
            return acc.set(task.name, acc.has(task.name) ? addTasksDuration(acc.get(task.name), task) : task)
        },
        new Map(),
        R.filter(getWorkAndPrivateTasks, tasksArr)
    );
};

function getWorkAndPrivateTasks({type}) {
    return type === "work" || type === "private"
};

function addTasksDuration(t1, t2) {
    return R.merge(R.clone(t1), {duration: t1.duration + t2.duration});
}

export {doRamda};
