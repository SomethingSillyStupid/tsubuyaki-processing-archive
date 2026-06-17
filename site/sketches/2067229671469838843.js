t=0,setup=_=>{createCanvas(w=400,w)}
draw=_=>{background(220),t+=.01,translate(w/2,w/2)
rotate(t)//"
for(i=w;i>0;i-=2){beginShape()
for(j=TAU;j>0;j-=PI/24){
vertex(w/j/cos(i/t), w/j/sin(i%t))
}endShape()}} //Line effects (again)
