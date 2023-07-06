<script>
export default {
  data() {
    return {
      board: ["", "", "", "", "", "", "", "", ""],
      currentPlayer: "X",
      isGameEnded: false,
    };
  },
  computed: {
    status() {
      if (this.isGameEnded) {
        return "Game Over!";
      }
      return `Player ${this.currentPlayer}'s turn`;
    },
  },
  methods: {
    handleClick(index) {
      if (!this.isGameEnded && this.board[index] === "") {
        this.board[index] = this.currentPlayer;
        this.checkWinner();
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    },
    checkWinner() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // Columns
        [0, 4, 8],
        [2, 4, 6], // Diagonals
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
          this.board[a] &&
          this.board[a] === this.board[b] &&
          this.board[a] === this.board[c]
        ) {
          this.isGameEnded = true;
          return;
        }
      }
    },
    resetGame() {
      this.board = ["", "", "", "", "", "", "", "", ""];
      this.currentPlayer = "X";
      this.isGameEnded = false;
    },
  },
};
</script>

<template>
    <div class="tic-tac-toe-widget">
      <h2>Tic Tac Toe</h2>
      <div class="board">
        <div
          v-for="(cell, index) in board"
          :key="index"
          @click="handleClick(index)"
          class="cell"
        >
          {{ cell }}
        </div>
      </div>
      <button @click="resetGame" class="btn">Reset</button>
      <p class="status">{{ status }}</p>
    </div>
  </template>
  
  
  <style scoped>
  .tic-tac-toe-widget {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  .tic-tac-toe-widget h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    width: 300px;
    height: 300px;
    padding: 20px;
    background-color: #f1f1f1;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .board .cell {
    border: 1px solid #ccc;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 36px;
    background-color: #fff;
  }
  
  .btn {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #45a049;
  }
  
  .status {
    font-size: 18px;
    color: #666;
    margin-top: 10px;
  }
  </style>