float x,y,s=500,t;
void setup(){size(800,800,P3D);}
void draw(){
background(-1);
camera(s,s,t++,0,0,0,0,0,-1);
for(x=-s;x<s;x+=5)for(y=-s;y<s;y+=5)
line(x,y,a(0),x+5,y,a(5));
}
float a(float i){
float h=200*noise((x+i+s)/99,(y+s)/99)-99;
return h<0?0:h;
}