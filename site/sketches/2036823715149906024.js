f=0
draw=_=>{
  f++||createCanvas(W=500,W)
  background(0)
  stroke(W)
  for(y=0;y<600;y+=50)
  for(d of[-1,1])
  for(x=0,X=Y=250;x<300;x++){
    line(X,Y,X=250+x*d,Y=y+((x+y)%60)*sin(x/2*d*sin(f/60+y)))
  }
}