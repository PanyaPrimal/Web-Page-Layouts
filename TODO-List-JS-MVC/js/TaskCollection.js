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

	remove(id) {
        const index = this.list.findIndex(item => item.id === id);
		this.list.splice(index, 1);
	}

	replace(index, task) {
		//todo
	}
}