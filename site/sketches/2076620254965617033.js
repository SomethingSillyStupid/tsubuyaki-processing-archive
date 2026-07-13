t=0
d=u=>dist(x,y,u-15*sin(t/90)*cos(t/c),c-9*noise(t/99)+4)
draw=_=>{t++||createCanvas(C=400,C);background(0,9);for(x=0;x<C;x+=.1)c=200,y=30*cos(x+t)*sin(x/43)+c,stroke(C,d(65)<32||d(335)<32||abs(x-203)<67?0:C),point(x,y),point(random(C),random(C));t++}//#つぶやきprocessing