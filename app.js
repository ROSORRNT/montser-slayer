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
      const damage = this.calculateDamage(3, 10)
      this.monsterHealth -= damage
      this.checkWin()
      if (this.winner) return
      this.monsterAttack()
    },
    monsterAttack: function(min, max) {
      const damage = this.calculateDamage(min || 3, max || 12)

      setTimeout(() => {
        this.playerHealth -= damage

        this.checkWin()
      }, 500)
    },
    specialAttack: function() {
      const damage = this.calculateDamage(3, 25)
      this.monsterHealth -= damage

      if (this.monsterHealth <= 0) {
        this.winner = 'Player'
        this.gameIsRunning = false
        return
      }
      this.monsterAttack(3, 25)
    },
    heal: function() {
      this.playerHealth += 10
      this.monsterAttack()
    },
    giveUp: function() {
      this.gameIsRunning = false
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        this.winner = 'Tu as'
        this.gameIsRunning = false
        return
      }
      if (this.playerHealth <= 0) {
        this.winner = 'Le monstre a'
        this.gameIsRunning = false
        return
      }
    },
  },
})
