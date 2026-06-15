// Demo placeholder sketch for Phase 1; not copied from X.
function setup(){createCanvas(720,720);pixelDensity(1);colorMode(HSB,360,100,100,100);}
function draw(){
  background(42,18,8);
  noStroke();
  for(let y=32;y<height;y+=32)for(let x=32;x<width;x+=32){
    let d=dist(x,y,width/2,height/2), n=noise(x*.01,y*.01,frameCount*.01);
    let r=4+18*pow(sin(frameCount*.035-d*.015+n*3)*.5+.5,2);
    fill(35+n*35,45,72,26+r*2.4); circle(x,y,r);
  }
  stroke(44,15,95,18); noFill();
  for(let i=0;i<9;i++) rect(42+i*7,42+i*7,width-84-i*14,height-84-i*14,18);
}
