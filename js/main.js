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
/*
While computed properties are more appropriate in most cases, 
there are times when a custom watcher is necessary. 
That’s why Vue provides a more generic way to react to data changes through the watch option. 
This is most useful when you want to perform asynchronous or expensive operations in response to changing data.
*/
var vm = new Vue({
  el: '#example',
  data: {
    inputName: '',
    message: 'Wait until you type something',
    firstName: 'Davide',
    lastName: 'Desirello',
  },
  watch: {
    inputName: function(oldName, newName){
      this.message = 'Waiting for you to stop typing...'
      this.debouncedGetMessage();
    }
  }, 
  methods: {
    getMessage: function() {
      this.message = 'Thinking...'
      //do the asyncronous request here
      vm.message = this.inputName;
    }
  },
  created: function(){
    this.debouncedGetMessage = _.debounce(this.getMessage, 500);
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
    //Now when you run vm.fullName = 'John Doe', 
    //the setter will be invoked and vm.firstName and vm.lastName will be updated accordingly.
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