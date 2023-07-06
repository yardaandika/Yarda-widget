<script>
        export default {
          data() {
            return {
              isRunning: false,
              startTime: null,
              elapsedTime: 0,
              timerInterval: null,
            };
          },
          computed: {
            formatTime() {
              const milliseconds = this.elapsedTime % 1000;
              const seconds = Math.floor(this.elapsedTime / 1000) % 60;
              const minutes = Math.floor(this.elapsedTime / 60000) % 60;
              const hours = Math.floor(this.elapsedTime / 3600000);
        
              return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
            },
          },
          methods: {
            startStopwatch() {
              if (!this.isRunning) {
                this.isRunning = true;
                this.startTime = Date.now();
        
                this.timerInterval = setInterval(() => {
                  this.elapsedTime = Date.now() - this.startTime;
                }, 10);
              }
            },
            stopStopwatch() {
              if (this.isRunning) {
                this.isRunning = false;
                clearInterval(this.timerInterval);
              }
            },
            resetStopwatch() {
              this.isRunning = false;
              clearInterval(this.timerInterval);
              this.elapsedTime = 0;
            },
          },
        };
</script>
<template>
    <div class="stopwatch-widget container py-4 bg-light rounded shadow">
      <h2 class="mb-4">Stopwatch</h2>
      <p class="display-4">{{ formatTime }}</p>
      <div class="d-flex justify-content-center">
        <button
          class="btn btn-primary mx-2"
          @click="startStopwatch"
          :disabled="isRunning"
        >
          Start
        </button>
        <button
          class="btn btn-danger mx-2"
          @click="stopStopwatch"
          :disabled="!isRunning"
        >
          Stop
        </button>
        <button class="btn btn-secondary mx-2" @click="resetStopwatch">
          Reset
        </button>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  .stopwatch-widget {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .stopwatch-widget h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .stopwatch-widget p {
    color: #666;
    font-size: 36px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .stopwatch-widget button {
    padding: 10px 20px;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .stopwatch-widget button:disabled {
    cursor: not-allowed;
  }
  
  @media (max-width: 576px) {
    .stopwatch-widget p {
      font-size: 24px;
    }
  }
  </style>