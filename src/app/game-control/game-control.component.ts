import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
@Output() startGameCreated = new EventEmitter<{incrementingNumber: number}>();
gameStartIncrementingNumber: number = 0;
//refInterval = setInterval(this.emitInInterval(),1000);
  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
    //is.gameStartIncrementingNumber = this.gameStartIncrementingNumber+1;
      //this.refInterval;
      setInterval(this.emitInInterval(),1000);
     //this.startGameCreated.emit({incrementingNumber: this.gameStartIncrementingNumber});
    
  }

  emitInInterval()
  {
    this.gameStartIncrementingNumber = this.gameStartIncrementingNumber+1;
    this.startGameCreated.emit({incrementingNumber: this.gameStartIncrementingNumber});
    console.log(this.gameStartIncrementingNumber);
  }

}
