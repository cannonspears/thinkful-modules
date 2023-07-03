const Queue = require("../queue/queue");

class ParkingLot {
  constructor(capacity, rate) {
    this.spaces = new Array(capacity).fill("vacant");
    this.rate = rate;
    this.revenue = 0;
    this.queue = new Queue();
  }

  get vacantSpaces() {
    return this.spaces.reduce(
      (sum, space, index) => sum + (space === "vacant" ? 1 : 0),
      0
    );
  }

  enter(licensePlateNumber) {
    if (this.vacantSpaces > 0) {
      const space = this.spaces.indexOf('vacant');
      this.spaces[space] = licensePlateNumber;
    } else {
      this.queue.enqueue(licensePlateNumber);
    }
  }

  leave(licensePlateNumber) {
    if (this.spaces.includes(licensePlateNumber)) {
      const lNum = this.spaces.indexOf(licensePlateNumber);
      this.spaces[lNum] = 'vacant';
      this.revenue += this.rate;

      if (!this.queue.isEmpty()) {
        this.enter(this.queue.dequeue());
      }
    } else {
      if (!this.spaces.includes(licensePlateNumber)) {
        let leftParkingQueue = new Queue;

        while (!this.queue.isEmpty()) {
          const left = this.queue.dequeue();

          if(left !== licensePlateNumber){
            leftParkingQueue.enqueue(left);
          }
        }
        this.queue = leftParkingQueue;
      }
    }
  }

  get occupants() {
    return this.spaces.map((licensePlateNumber, index) => ({
      space: index + 1,
      licensePlateNumber,
    }));
  }

  get totalRevenue() {
    return this.revenue;
  }
}

module.exports = ParkingLot;