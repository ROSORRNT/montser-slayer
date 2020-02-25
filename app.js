new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    attack: function() {
      const damage = Math.floor(Math.random() * 30)
      this.monsterHealth -= damage
      this.monsterAttack()
    },
    monsterAttack: function() {
      const damage = Math.floor(Math.random() * 30)
      setTimeout(() => {
        this.playerHealth -= damage
      }, 1000)
    },
  },
})
