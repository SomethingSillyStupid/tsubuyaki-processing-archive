f=0
draw=_=>{
f++||createCanvas(W=400,W)
colorMode(HSB,1)
background(0,0);
translate(W/2,W/2);
for(i=0;i<=TAU;i+= PI/16){
fill(i/TAU,1,1);
push();
rotate(i); t=f/100;bezier(0,0,sin(t)*W,tan(t)*W,tan(t)*W,sin(t)*W,0,0);
pop();
}}