let canvas = document.querySelector('canvas')
;
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext('2d');

//c.fillRect(x,y,width,height)
//dibujar figuras
//c.fillStyle='rgba(255,0,0,0.5)';
//c.fillRect(100,100,100,100);
//c.fillStyle='rgba(0,255,0,0.5)';
//c.fillRect(400,100,100,100);
//c.fillStyle='rgba(255,255,0,0.5)';
//c.fillRect(300,300,100,100);
//c.fillStyle='rgba(255,124,0,0.5)';
//c.fillRect(700,400,100,100);
//console.log(canvas);

//dibujar rayas
//c.beginPath(); trazar un traycto
//c.beginPath();
//c.moveTo(x px, px)
//c.moveTo(50,300);
//c.lineTo(300,100);
//c.lineTo(400,300);
//c.strokeStyle= "#fa34a3";
//c.stroke();

//arcos
//c.beginPath();//para evitar que se conecten con las rayas
//c.arc(300,300,30,0,Math.PI*2,false);
//c.strokeStyle='blue';
//c.stroke()

//for (let index = 0; index < 2400; index++) {
//    var x =Math.random()*window.innerWidth;
//    var y =Math.random()*window.innerHeight;
//    c.beginPath();//para evitar que se conecten con las rayas
//    c.arc(x,y,30,0,Math.PI*2,false);
//    c.strokeStyle='blue';
//    c.stroke()
//}

//var x =Math.random()* innerWidth;
//var y= Math.random()*innerHeight;
//var dx=(Math.random()-0.5)*25;
//var dy=(Math.random()-0.5)*25;
//var radius = 30;
var mouse={
    x:undefined,
    y:undefined
}

var maxRadius= 40;
var minRadius= 2;
var colorArray = [
    '#ffaa33',
    '#99ffaaa',
    '#4411aa',
    '#ff1100'
];

window.addEventListener('mousemove',
    function(event){
        mouse.x= event.x;
        mouse.y=event.y; 
    })

function  Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius= radius;
    

    this.draw= function(){
        c.beginPath();//para evitar que se conecten con las rayas
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.strokeStyle='blue';//colorArray[Math.floor(ath.random()*colorArray.length)];
        c.stroke();
        c.fill();
    }
    this.update= function(){
        if(this.x + this.radius >innerWidth || this.x - this.radius < 0){
            this.dx=-this.dx;
        }
        if(this.y + this.radius >innerHeight || this.y - this.radius < 0){
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        
        if((mouse.x-this.x<50 && mouse.x-this.x>-50) && (mouse.y-this.y<50 && mouse.y-this.y>-50)){
            if(this.radius<maxRadius){
                this.radius+=1;
            }
            
        }else if(this.radius>minRadius){
            this.radius-=1;
        }
        
        this.draw();
    }
}


var circleArray=[]
for (let index = 0; index <1000; index++) {
    var x=Math.random()* innerWidth;
    var y=Math.random()*innerHeight;
    var dx=(Math.random()-0.5)*25;
    var dy=(Math.random()-0.5)*25;
    var radius=30;
    var circle= new Circle(x,y,dx,dy,radius)
    circleArray.push(circle);
}
function animar(){
    requestAnimationFrame(animar);
    c.clearRect(0,0,innerWidth,innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();        
    }
}
animar();