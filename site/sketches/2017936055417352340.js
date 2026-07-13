t=2,setup=_=>{createCanvas(w=400,w,WEBGL)}
draw=_=>{background(220),t+=4e-5
for(i=w;i>0;i-=3){beginShape()
for(j=TAU;j>0;j-=PI/12,"#つぶやきProcessing"){
rotate(t*.2),rotateY(t*.5)
vertex(i+j*cos(j/t)*5,i-j*sin(j%t)*5)
fill(w/cos(i),w/sin(j),w/tan(i))+stroke(i*j)
}endShape()}}