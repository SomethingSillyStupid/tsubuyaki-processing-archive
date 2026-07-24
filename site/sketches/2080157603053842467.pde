void setup(){
size(800,600,P2D);
fill(0);
frameRate(60);
colorMode(HSB, 400);
}
void draw(){
background(0);
for(int i=0;i<width;i++){
stroke(noise(int(frameCount/50))*400,300,200);
rect(i,noise(frameCount+i)*height,10,50);
}
}