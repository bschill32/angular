import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() iFired = new EventEmitter<number>();
  lastNumber = 0;
  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.interval = setInterval(() => {
      this.iFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
    // console.log(this.lastNumber);
  }

  onStop() {
    clearInterval(this.interval);
  }
}
