export class TaskModel {
	constructor() {
		this.title = null;
		this.isDone = false;
	}

	getTitle() {
		return this.title;
	}
    
	setTitle(value) {
		this.title = value;
	}

	getIsDone() {
		return this.isDone;
	}

	setIsDone(value) {
		this.isDone = value;
	}
}