//Mandelbrot #つぶやきProcessing #p5js
setup=_=>{
createCanvas(w=400,w)+colorMode(HSB,2)
strokeWeight(s=1)
for(x=0;x<w;x+=s)
for(y=0;y<w;y+=s)
for(n=0,t=x/w*2-1.5,u=y/w*2-1,r=0,i=m=0;n<9;n++,stroke(abs(r*i)*6,n,2-m),point(x,y))q=r*r-i*i+t,j=2*r*i+u,r=q,i=j;n=(m=q*q+j*j>1)?19:n
}