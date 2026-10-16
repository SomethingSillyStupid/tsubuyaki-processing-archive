float i,m,n,p,s,t,x,y;
void setup(){size(1080,720);noStroke();}
void draw(){background(0);t+=.05;translate(560,360);
for(i=2e3;i>0;i--){p=i%2==0?0:1;m=t/cos(t/i)+p*(t/2+i%t);n=t/9+i*i;x=m*sin(n)*cos((p==0?1:0)*i/t);y=m*cos(n+p*2);s=3-cos(n)*3;rect(x,y,s,s);}}