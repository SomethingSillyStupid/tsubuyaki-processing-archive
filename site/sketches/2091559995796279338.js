f=0
draw=_=>{
  f++||createCanvas(W=500,W)
  background(0)
  noStroke()
  for(c of[.5,.2]){
  for(x=0;x<W;x+=5){
  for(n=0;n<200;n+=5){
    fill(W*c)
    circle(x,550-(f*3+n+9e3)*noise(x)%600,70*c*noise(x,n,f/99))
  }}}
}