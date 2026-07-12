void setup(){
size(800,800);
colorMode(HSB);
}
void draw(){
background(0);
for(i=0;i<800;i++){
x=i/200;
k=(1-cos(t))/2;
for(n=0;n<99;n++){
y=x*k*(1-k);
stroke(n,255,255);
point(i,600-y*500);
k=y;
}
}
t+=PI/400;
}
