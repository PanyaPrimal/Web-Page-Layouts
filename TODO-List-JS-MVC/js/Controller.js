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

    toggleIsDone(id) {
        const task = this.taskCollection.read(id);
        task.setIsDone(!task.getIsDone());
    }

    removeTask(id) {
        this.taskCollection.remove(id);
    }

    toggleEditMode(id) {
        const task = this.taskCollection.read(id);
        task.setIsEditMode(!task.getIsEditMode());
    }

    updateTask(id, title) {
        const task = this.taskCollection.read(id);
        task.setTitle(title);
    }
    read(id) {
        return this.taskCollection.read(id);
    }
}