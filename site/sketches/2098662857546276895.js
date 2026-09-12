f=0
draw=_=>{
f++||createCanvas(W=500,W)
background(0)
stroke(W)
noFill()
for(p of[[0,0],[0,W],[W,0],[W,W]]){
for(r=0;r<800;r+=20){
strokeWeight(r/40)
push()
translate(...p)
rotate(r)
arc(0,0,r,r/2,i=r+f/30,i+PI/2)
pop()
}}
}