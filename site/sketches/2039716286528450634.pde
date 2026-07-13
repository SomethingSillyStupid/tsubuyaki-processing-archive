float p,t;
void setup(){
size(800,800);
}
void draw(){
background(-1);
strokeWeight(3);
beginShape();
for(t=0;t<50;t+=.1)curveVertex(3*exp(0.1*t)*sin(t*2*sin(p))+400,3*exp(0.1*t)*cos(t)+400);
endShape();
p+=.001;
}