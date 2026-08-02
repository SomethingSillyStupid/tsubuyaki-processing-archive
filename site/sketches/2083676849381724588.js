//#つぶやきProcessing #p5js
t=X=Y=p=q=0
draw=_=>
{t++||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
blendMode(OVERLAY)
N=_=>random(-1,1)
translate(w,w)
X+=N()*66,Y+=N()*66
strokeWeight(w)
stroke(abs(w-X*Y*sin(q))%360,w,w,.1)
line(p,q,X,Y)
d=dist(p,q,p=X,q=Y)
X-=X/d,Y-=Y/d
}