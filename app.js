new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    attack: function() {
      const damage = Math.floor(Math.random() * 30)
      this.monsterHealth - damage
    },
    monsterAttack: () => {
      console.log(this)
    },
  },
})
