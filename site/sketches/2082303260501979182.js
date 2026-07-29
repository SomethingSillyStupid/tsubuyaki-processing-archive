t=f=0,draw=_=>{createCanvas(C=300,C);background(0);stroke(255);translate(C/=2,C);(f++%24<12)&&(t+=.02)
for(i=0;i<4;i++)line(x=i&1?-C:C,y=i&2?-C:C,x*.25,y*.25)
W=s=>{q=s/2;line(-q,-q,-q,q);line(q,-q,q,q)}
W(75)
for(i=0;i<5;i++)(s=280*((t+i/5)%1)**2)>75&&W(s)}