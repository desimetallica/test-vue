var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }

  })

var app6 = new Vue({
  el: '#app-6',
  data: {
    todos: [
      { text : 'prova' },
      { text : 'prova2' },
      { text : 'prova3' }
    ]
  }
})

Vue.component('todo-item',{
  // this todo-item component accepts a 
  // "prop" whis is an attribute.
  props: ['todo'],
  template: '<li> {{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var fullName = '';

// vm View-Model
// When you create a Vue instance, you pass in an options object.
// https://vuejs.org/v2/api/#Options-Data
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello',
    firstName: 'Davide',
    lastName: 'Desirello',
  },
  watch: {
    getName: function(){
      return this.fullName.get; 
    }
  },  
  computed: {
    // a computed getter 
    reversedMessage: function() {
      // this points to vm instance
      return this.message.split('').reverse().join('');
    },
    
    now: function(){
      return Date.now();
    },
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName;
      },
      set: function() {
        // setter
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];     
      }
    }
  }
})