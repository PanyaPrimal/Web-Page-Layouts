export class TaskCollection {
	constructor() {
		this.list = [];
	}

	getList() {
		return this.list;
	}

	addToList(task) {
		this.list.push(task);
	}

	remove(index) {
		//todo
	}

	replace(index, task) {
		//todo
	}
}