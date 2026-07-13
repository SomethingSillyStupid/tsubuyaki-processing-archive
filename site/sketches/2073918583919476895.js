r=u=>{R=random(360);return u%2==1?[R,100,100]:R/3;}
t=0
n=(p,j)=>c*noise(t/p/(i-j))
draw=_=>{t++||createCanvas(c=1000,c);colorMode(HSB);background(9,0.01);for(i=0;i<5;i++){stroke(r(t));line(x=n(9,0),y=n(8,0),n(9,1),n(8,1));fill(r(t));rect(x,y,r(2),r(2))}}//#つぶやきprocessing