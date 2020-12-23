import clock, { TickEvent } from "clock";

class MainClock {
  constructor() {
    clock.granularity = "seconds";
    clock.addEventListener("tick", this.onTick);
  }

  private onTick(evt: TickEvent) {
    console.log(evt.date.getSeconds());
  }
}

export { MainClock };
