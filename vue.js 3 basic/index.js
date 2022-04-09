const CounterApp = {
	data() {
		return {
			counter: 0
		}
	},
	mounted() {
		setInterval(() => {
			this.counter++
		}, 1000)
	}
}

Vue.createApp(CounterApp).mount('#counter')



const AttributeBinding = {
	data() {
		return {
			message: '이 페이지를 다음 시간에 열었습니다. ' + new Date().toLocaleString()
		}
	}
}

Vue.createApp(AttributeBinding).mount('#bind-attribute')



const EventHandling = {
	data() {
		return {
			message: 'Hello Vue.js!'
		}
	},
	methods: {
		reverseMessage() {
			this.message = this.message
			.split('')
			.reverse()
			.join('')
		}
	}
}

Vue.createApp(EventHandling).mount('#event-handling')



const TwoWayBinding = {
	data() {
		return {
			message: 'Hello Vue!'
		}
	}
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')



const ConditionalRendering = {
	data() {
		return {
			seen: true
		}
	}
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')



const ListRendering = {
	data() {
		return {
			todos: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
			]
		}
	}
}

Vue.createApp(ListRendering).mount('#list-rendering')



const TodoList = {
	data() {
		return {
			groceryList: [
			{ id: 0, text: '야채' },
			{ id: 1, text: '치즈' },
			{ id: 2, text: '사람이 먹을수 있는거라면 뭐든지' }
			]
		}
	}
}

const app = Vue.createApp(TodoList)

app.component('todo-item', {
	props: ['todo'],
	template: `<li>{{ todo.text }}</li>`
})

app.mount('#todo-list-app')



const ShowOrHide = {
	data() {
		return {
			message: '까꿍',
			btn_message: '숨기기',
			show: true 
		}
	
	},
	methods: {
		showORHide() {
			if (this.show === true) {
				this.show = false,
				this.btn_message = '보이기'
			}
			else {
				this.show = true,
				this.btn_message = '숨기기'
			}
		}
	}
}

Vue.createApp(ShowOrHide).mount('#show-or-hide')