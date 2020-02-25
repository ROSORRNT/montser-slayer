new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    winner: undefined,
  },
  methods: {
    startGame: function() {
      this.winner = undefined
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    attack: function() {
      const max = 10
      const min = 3
      // genere a random between three and ten
      const damage = Math.max(Math.floor(Math.random() * max) + 1, min)
      this.monsterHealth -= damage

      if (this.monsterHealth <= 0) {
        this.winner = 'Player'
        this.gameIsRunning = false
        return
      }
      this.monsterAttack()
    },
    monsterAttack: function() {
      const max = 10
      const min = 3
      const damage = Math.max(Math.floor(Math.random() * max) + 1, min)

      setTimeout(() => {
        this.playerHealth -= damage

        if (this.playerHealth <= 0) {
          this.winner = 'Monster'
          this.gameIsRunning = false
        }
      }, 500)
    },
    specialAttack: function() {},
    heal: function() {
      this.playerHealth += Math.floor(Math.random() * 30)
      this.monsterAttack()
    },
    giveUp: function() {
      this.gameIsRunning = false
    },
  },
})
