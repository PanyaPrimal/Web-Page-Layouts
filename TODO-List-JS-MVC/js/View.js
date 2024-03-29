import {Controller} from './Controller.js';

export class View {
	constructor() {
		this.todoForm = document.getElementById('todo-form');
    	this.addInput = document.getElementById('add-input');
    	this.todoList = document.getElementById('todo-list');
    	this.todoItems = document.querySelectorAll('.todo-item');
		this.main();
		this.controller = new Controller();
	}

	main() {
        this.todoForm.addEventListener('submit', this.addTodoItem.bind(this));
        this.todoItems.forEach(item => this.bindEvents(item));
    }

    bindEvents(todoItem) {
        const checkbox = todoItem.querySelector('.checkbox');
        const editButton = todoItem.querySelector('button.edit');
        const deleteButton = todoItem.querySelector('button.delete');
        checkbox.addEventListener('change', () => this.toggleTodoItem(deleteButton.getAttribute('data-id')));
        editButton.addEventListener('click', (event) => this.editTodoItem(deleteButton.getAttribute('data-id'), event));
        deleteButton.addEventListener('click', () => this.deleteTodoItem(deleteButton.getAttribute('data-id')));
    }

    addTodoItem(event) {
        event.preventDefault();

        if (this.addInput.value === '') return alert('Необходимо ввести название задачи.');

        this.controller.addNewTask(this.addInput.value);
        this.generateHtml();
        this.addInput.value = '';
    }

    toggleTodoItem(id) {
        this.controller.toggleIsDone(id);

        this.generateHtml();
    }

    editTodoItem(id, event) {
        const task = this.controller.read(id);
        if(task.getIsEditMode()) {
            this.controller.updateTask(id, event.srcElement.parentNode.querySelector('.textfield').value)
        }

        this.controller.toggleEditMode(id);

        this.generateHtml();    
    }

    deleteTodoItem(id, editedTask) {
        this.controller.removeTask(id, editedTask);     

        this.generateHtml();        
    }       

    generateHtml() {
    	this.todoList.innerHTML = '';

    	this.controller.getList().forEach(task => {
    		this.todoList.appendChild(this.generateItemElement(task));
    	});
    }

    generateItemElement(task) {
    	const checkbox = this.createElement('input', { type: 'checkbox', className: 'checkbox', checked: task.getIsDone() });
        const label = this.createElement('label', { className: 'title' }, task.getTitle());
        const editInput = this.createElement('input', { type: 'text', className: 'textfield' });
        const editButton = this.createElement('button', { className: 'edit' }, 'Изменить' );
        const deleteButton = this.createElement('button', { className: 'delete' }, 'Удалить' );
        deleteButton.setAttribute('data-id', task.getId());
        editButton.setAttribute('data-isEditing', task.getIsEditMode());
        const listItem = this.createElement(
            'li', 
            { className: 'todo-item' + (task.getIsDone() ? ' completed' : '') + (task.getIsEditMode() ? ' editing' : '') }, 
            checkbox, 
            label, 
            editInput, 
            editButton, 
            deleteButton
        );

        this.bindEvents(listItem);

        return listItem;
    }

    createElement(tag, props, ...children) {
        const element = document.createElement(tag);

        Object.keys(props).forEach(key => element[key] = props[key]);

        if (children.length > 0) {
            children.forEach(child => {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }
                element.appendChild(child);
            });
        }

        return element;
    }
}