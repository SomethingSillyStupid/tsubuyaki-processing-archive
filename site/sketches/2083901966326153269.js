t=0,setup=_=> {createCanvas(w=400, w,WEBGL)}
draw=_=>{background(220),t+=.01
for(i=0;i<w;i+=4,"#つぶやきProcessing #p5js"){push()
for(j=0;j<TAU;j+=.2){rotateX(t),rotateZ(t)
rect(a=cos(i*j)*99,b=sin(i*j)*9,20),fill(a*a,b*b,a*b)
}pop()}} // Paraboloid