export class TaskModel {
	constructor() {
		this.title = null;
		this.isDone = false;
        this.id = this.generateId();
        this.isEditMode = false;
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

    generateId() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    getId() {
        return this.id;
    }

    getIsEditMode() {
        return this.isEditMode;
    }

    setIsEditMode(value) {
        this.isEditMode = value;
    }
}