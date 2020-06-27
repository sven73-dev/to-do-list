Vue.component('task',{
  props: ['data'],
  data() {
    return {
    }
  },
  methods: {
    taskDone(){
      this.$emit('taskDone')
    }
  },
  template: `
  <div class="task">
    <div>
      <h3 class="taskTitle">{{data.title}}</h3>
      <p v-if="data.desc!=''" class="taskDesc">{{data.desc}}</p>
    </div>
    <button class="taskDone" @click="taskDone()">❌</button>
  </div>`
})

var vue = new Vue({
  el: '#app',
  data: {
    string: 'asdasda',
    newTask: {
      title: '',
      desc: ''
    },
    tasks : []
  },
  methods: {
    addTask(){
      if(this.newTask.title != ''){
        this.tasks.push({
          title: this.newTask.title,
          desc: this.newTask.desc
        });
        this.newTask.title='';
        this.newTask.desc='';
      }
    },
    deleteTask(id){
      this.tasks.splice(id,1);
    }
  }
})