float d,t;
void setup(){
size(800,800);
rectMode(CENTER);
}
void draw(){
background(0);
stroke(-1);
noFill();
translate(400,400);
t+=PI/100;
for(d=800;d>0;d-=50){
rotate(t/9);
rect(0,0,d,d,128-128*cos(t));
}
}