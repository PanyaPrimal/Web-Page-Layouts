import {TaskModel} from './TaskModel.js';
import {TaskCollection} from './TaskCollection.js';

export class Controller {
    constructor() {
        this.taskCollection = new TaskCollection();
    }

    getList() {
        return this.taskCollection.getList();
    }

    addNewTask(title) {
        const task = new TaskModel();
        task.setTitle(title);

        this.taskCollection.addToList(task);
    }

    removeTask() {
        //todo
    }

    editTask() {
        //todo
    }
}