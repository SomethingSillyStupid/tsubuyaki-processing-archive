//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
textSize(190)
textStyle(BOLD)
fill(0,w-t,w-t)
text('WAR',0,t<100?300:200+t)
fill(t%255,w,w)
text(' PEA',0,min(w,t-160))
text('  CE',0,min(360,t))
t++}