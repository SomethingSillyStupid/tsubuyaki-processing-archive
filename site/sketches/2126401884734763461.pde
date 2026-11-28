float i,m,n,o,s,t,h=m=360,v=n=240;
void setup(){size(720,480);stroke(h);}
void draw(){background(0);
for(i=9e3;i>0;i--){
s=(s+((int)(5*Math.random())|0))%5;
o=2.5*s+t;
m=(m+h+v*cos(o-(s/4)*sin(t)))/2;
n=(n+v+v*sin(s))/2;
rect(m,n,1,1);}t+=.01;}