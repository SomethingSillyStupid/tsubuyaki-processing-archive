c=[];t=f=0,draw=_=>{if(!f++){createCanvas(w=500,w);colorMode(RGB,1);frameRate(10);for(i=1e3;i--;)c[i]=random(2)|0}background(1);for(y=0;y<=w;y+=2){for(x=0;x<=w;x+=10){fill(c[t++%1e3]);rect(x,y,5,2)}}}
//
