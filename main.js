const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
//ctx.fillStyle = "#000";
//ctx.fillRect(100,100,30,50)

const road = new Road(canvas.width/2, canvas.width/2*0.9);

const car = new Car(100, 100, 30, 50);

animate();

function animate() {
    car.update(road.borders);
    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -car.y+canvas.height*0.9);
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
};