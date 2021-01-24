const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 1,
            winner: null,
            logMessages: []
        }
    },
    watch: {
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        },
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        }
    },
    computed: {
        monsterHealthStyles() {
            return { width: `${this.monsterHealth}%`};
        },
        playerHealthStyles() {
            return { width: `${this.playerHealth}%` };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        attackMonster() {
            const attackDamage = this.getPoints(5, 12);
            this.monsterHealth -= attackDamage;
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.addLogMessage('player', 'attack', attackDamage);
            this.attackPlayer();
            this.currentRound++;
        },
        attackPlayer() {
            const attackDamage = this.getPoints(8, 15);
            this.playerHealth -= attackDamage;
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
            this.addLogMessage('monster', 'attack', attackDamage);
        },
        spaecialAttackMonster() {
            const attackDamage = this.getPoints(10, 25);
            this.monsterHealth -= attackDamage;
            this.addLogMessage('player', 'attack', attackDamage);
            this.attackPlayer();
            this.currentRound++;
        },
        healPlayer() {
            const healthPoints = this.getPoints(8, 20);
            if (this.playerHealth + healthPoints > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healthPoints;
            }
            this.addLogMessage('player', 'heal', healthPoints);
            this.attackPlayer();
            this.currentRound++;
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        },
        getPoints(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }
});

app.mount("#game");