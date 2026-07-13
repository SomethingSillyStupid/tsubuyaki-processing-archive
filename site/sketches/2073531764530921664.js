//#つぶやきProcessing #p5js
t=0,s=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
t||(s=s++%4+1)
textSize(90)
for(i=0;i<s;i++)
text(['🏃','🚶','🏃‍♀️'][int((t+i*5)/4)%3],W-t,110+i*80)
t=++t%W}