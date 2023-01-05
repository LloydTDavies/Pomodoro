import { Component } from '@angular/core';

interface Countdown {
  minutes: number;
  seconds: number;
}

const restDuration = 5; //minutes
const workDuration = 25; // minutes
const longBreakDuration = 30; //minutes

const defaultCountdown: Countdown = { minutes: workDuration, seconds: 0 };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rounds = 0;
  countdown: Countdown = defaultCountdown;
  mode: 'Working' | 'Resting' = 'Working';
  timer?: NodeJS.Timer;

  startTimer() {
    this.timer = setInterval(() => {
      if (this.countdown.seconds > 0) {
        --this.countdown.seconds;
      } else {
        this.countdown.seconds = 59;
        this.countdown.minutes > 0
          ? --this.countdown.minutes
          : this.pompodoro();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.timer);
  }

  pompodoro() {
    if (this.mode === 'Working') {
      this.mode = 'Resting';
      this.rounds++;
      this.countdown = {
        minutes: this.isLongBreak() ? longBreakDuration : restDuration,
        seconds: 0,
      };
    } else {
      this.countdown = defaultCountdown;
      this.mode = 'Working';
    }
  }

  isLongBreak(): boolean {
    return this.rounds % 4 === 0;
  }

  getSeconds() {
    return this.countdown.seconds < 10
      ? `0${this.countdown.seconds}`
      : this.countdown.seconds;
  }
}
