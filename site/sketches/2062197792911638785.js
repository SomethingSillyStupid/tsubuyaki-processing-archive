W=400
draw=_=>{
  createCanvas(W, W)
  background(3)
   t = millis()/1e3
  for(i = W;i>0;i--){
    push()
     z=i**.3
     s=5/z
    fill(0,255,0)
    applyMatrix(s,0,0,s,0,0)
    text('つぶやき'[i%4],i%z*99,t++%z*99)
    pop()
  }
}