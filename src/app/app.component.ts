import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameSecInfo = 'Game is working for sec: '
  gameIterations: number= 0;

  onGameStarted(gameControlData: {incrementingNumber: number})
  {
    this.gameIterations = gameControlData.incrementingNumber;
  }
}
