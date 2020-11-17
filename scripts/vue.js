var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `
  <div class = "post">
    <p> Price </p>
    <p> Name </p>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
  </div>
  `
})


new Vue({ el: '#components-demo' })