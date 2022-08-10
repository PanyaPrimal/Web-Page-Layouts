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
        //checkbox.addEventListener('change', this.toggleTodoItem);
        //editButton.addEventListener('click', this.editTodoItem);
        deleteButton.addEventListener('click', () => this.deleteTodoItem(deleteButton.getAttribute('data-id')));
    }

    addTodoItem(event) {
        event.preventDefault();

        if (this.addInput.value === '') return alert('Необходимо ввести название задачи.');

        this.controller.addNewTask(this.addInput.value);
        this.generateHtml();
        this.addInput.value = '';
    }

    toggleTodoItem() {
        const listItem = this.parentNode;
        listItem.classList.toggle('completed');
    }

    deleteTodoItem(id) {
        this.controller.removeTask(id); 

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
        const listItem = this.createElement('li', { className: 'todo-item' + (task.getIsDone() ? ' completed' : '') }, checkbox, label, editInput, editButton, deleteButton);
        // if editmode true ... form

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