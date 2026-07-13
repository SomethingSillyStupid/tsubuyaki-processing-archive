t=0;
draw=_=>{createCanvas(w=1000,w);noStroke();
  background(9);
  for(i=t;i<t+10;i++){
    fill((q=noise(i))*255,(r=noise(i+3))*255,(s=noise(i+1))*255);
    triangle(q*w,r*w,s*w,noise(i + 4)*w,noise(i + 5)*w,noise(i + 6)*w);
  }t+=0.01;}