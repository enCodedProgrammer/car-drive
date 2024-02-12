class Road {
    constructor(x, width, laneCount=3) {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x-width;
        this.right = x+width;

        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = +infinity;

        const topLeft = {x:this.left, y:this.top}
        const topRight = {x:this.right, y:this.top}
        const bottomLeft = {x:this.left, y:this.bottom}
        const bottomRight = {x:this.right, y:this.bottom}
        
        this.borders = [
            [topLeft, bottomLeft]
            [topRight, bottomRight]
        ]
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        // Looping through the lanecount(3) to draw the lanes and we're useing lerp function to get the x position
        
        for (let i=0; i<this.laneCount; i++) {
            //using linear interprelation to get the x cordinates of all items that needs to be drawn
            //i/this.laneCount anticipate the number of lanes we want and is able do a calculation to make all lanes fit
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            )
            //For the 2nd and third loop i>0 and i<lanecount we draw the 2nd and third lanes with dashes
            if (i>0 && i<this.laneCount) {
                ctx.setLineDash([20,20]);
            }else {
            //For the first loop i=0 and the last i=lanecount we draw the first lane and the last without dashes
                ctx.setLineDash([])
            }
        ctx.beginPath();
        ctx.moveTo(x, this.top);
        ctx.lineTo(x, this.bottom);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.right, this.top);
        ctx.lineTo(this.right, this.bottom);
        ctx.stroke();
    }
    }


}