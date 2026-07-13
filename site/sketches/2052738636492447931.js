f=0
draw=_=>{
  f++||createCanvas(W=500,W)
  background(0)
  stroke(W)
  fill(0)
  for(c of[0,W])
  for(d=700;d>0;d-=20){
    arc(W-c,c,d,d,k=f*noise(c,d)/30,k+99*noise(c,d,9),PIE)
  }
}