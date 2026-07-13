w = 30;
t = 0;
draw=_=> {
   createCanvas(400, 400);
  for(i=13; i> 0; i--){
    for(j=12; j>0; j--){
      rect(i&&(2*i-4+j%2+(j%4<3?j%4:1)*t/3%2)*w,j*w,i?w:3e3,i?w:5);}}t+=0.02;
}