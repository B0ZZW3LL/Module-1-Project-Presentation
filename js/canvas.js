window.onload = () => {                                                                                 
      startGame();
    };

    function startGame() {
        const gameCanvas = document.getElementById('game-space');                                       
        const ctx = gameCanvas.getContext('2d');  

        let numFrame = 0;

        const rectObject1 = {                                                                                    
            x: 50,
            y: 50, 
            width: 100,
            height: 100,

            move(){                                                                                             
                this.x += 2;
            },

            draw: function() {
                ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = 'rgb(11, 11, 9)';
            },

            right() {
                return this.x + 98;
            },

            collision(rectObject2){ 
                return !(this.right() < rectObject2.left());
            }
        };

        const rectObject2 = {                                                                                      
            x: 850,
            y: 50, 
            width: 100,
            height: 100,

            move(){                                                                                             
                this.x -= 2;
            },

            draw: function() {
                ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = 'black';
            },

            left() {                                                                                     
                return this.x;
            },
        };

        function updateGameCanvas() {
            numFrame += 1;

            ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);                                   // <-- Clear the previous before drawing the new, else you'll get a "drag" effect. 

            rectObject1.draw();
            rectObject2.draw();
      

            rectObject1.move();
            rectObject2.move();

            if(rectObject1.collision(rectObject2)) {
              return;
            }

            requestAnimationFrame(updateGameCanvas);  
        }

    updateGameCanvas();

}
    
