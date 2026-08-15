draw=_=>{M=map;createCanvas(W=800,W);for(i=W;i--;){r=M(cos(M(i*5%W,0,W,0,TAU)),-1,1,-80,320);t=M(i%W,0,W,0,TAU);noStroke();fill('pink');circle(r*cos(t)+W/2,r*sin(t)+W/2,M(r,80,320,8,48));}}
// #p5js