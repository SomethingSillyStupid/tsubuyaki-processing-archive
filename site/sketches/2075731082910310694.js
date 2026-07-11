setup=_=>{createCanvas(400,400);background(0);noStroke();fill(255);
for(let i=-2.5; i<30; i+=1/40){c=createVector;u=c(0.1,0).copy().slerp(c(0,0.14),i);
circle(200+200*u.x,200+200*u.y,4)}}
