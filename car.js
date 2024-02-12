class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;

        this.angle = 0;

        this.sensor = new Sensor(this);
        //console.log(this.sensor);
        this.controls = new Controls();
    }

    update(roadBorders) {
       this.#move()
       this.sensor.update(roadBorders);
       //console.log(this.sensor)
    }

#move() {
     //On click forward keep adding the value of acceleration each time to this.y value
     if (this.controls.forward) {
        this.speed += this.acceleration;
    }
    //On click reverse keep subtracting the value of acceleration each time to this.y value
    if (this.controls.reverse) {
        this.speed -= this.acceleration;            
    }
    //If this.speed is greater than maxSpeed(3) set this.speed to 3
    if(this.speed >= this.maxSpeed) {
        this.speed = this.maxSpeed
    }
    //If this is speed is now on the -ve and the negative value is less than minus half of maxSpeed (1.5) set this.speed to -1.5
    if(this.speed <- this.maxSpeed/2) {
        this.speed = -this.maxSpeed/2
    }
    //if speed is now in the positive (greater than 0), subtract this.friction from the positive value of this.speed. 
    if(this.speed > 0) {
        this.speed -= this.friction;
    }
    //if speed is now in the negative (less than 0), add this.friction from the negative value of this.speed. 
    //This.friction is a unique number that resets our speed and makes our car looks like its not moving but its actually moving by 0.05
    if(this.speed < 0) {
        this.speed += this.friction
    }
    if (Math.abs(this.speed) <= this.friction) {
        this.speed = 0
    }
    //if speed is 0 dont do anything with left and right
    if (this.speed !=0) {
    //if speed greater than 0 i.e +ve multiply by 1 to make the car keep going the normal way
    //if speed is less than 0 i.e -ve multiply by -1 to make the car flip on reverse
    const flip = this.speed >0?1:-1
    //Angle 0.03 is the value for 90 degrees hence, we rotate by 90deg
    if(this.controls.left) {
       this.angle += 0.03*flip;
    }
    if(this.controls.right) {
      this.angle -= 0.03*flip;
    }        
    }

    this.x -=Math.sin(this.angle)*this.speed;
    this.y -=Math.cos(this.angle)*this.speed;

}

draw(ctx) {
    ctx.save();
    //We translate our car to start at position x and y
    ctx.translate(this.x, this.y);
    //We rotate our car by 90 deg
    ctx.rotate(-this.angle);
    ctx.beginPath();
    ctx.rect(
        //We redraw our car on x position from x starting point to negative half of width
        -this.width/2,
        //We redraw our car on y position from y starting point to negative half of height        
        -this.height/2,
        this.width,
        this.height
    );
    ctx.fill();

    ctx.restore();

    this.sensor.draw(ctx);
}

}
