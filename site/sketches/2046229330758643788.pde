float x=0.1,y=0,p,q,a=5,k=.1,t=80;
void setup(){
size(800,800);
}
void draw(){
background(0);
stroke(-1);
for(int i=0;i<60000;i++){
p=k*x+y+a*x/(1+x*x);
q=-x;
point(p*t+400,q*t+400);
x=p;
y=q;
}
k+=1e-4;
t/=1.007;
}