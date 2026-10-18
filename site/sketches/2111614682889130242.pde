float a,r,t,i;
void setup(){size(800,800);}
void draw(){background(0);stroke(-1);noFill();translate(400,400);for(i=0;i<4;i++){rotate(PI/2);beginShape();for(r=0;r<TAU;r+=.01){a=50*(cos(r*t)-5*cos(r)*cos(t));vertex(a*cos(r),a*sin(r));}endShape(2);t+=.01;}}