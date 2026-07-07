setup=_=>createCanvas(w=500,w);i=.1;r=0;draw=_=>{h=w/2;stroke(h);strokeWeight(noise(i)*5);point(r*cos(i)+h,r*sin(i)+h);i+=noise(i);r+=noise(i)*.999}
