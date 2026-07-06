f=0;a=-1.7;t=400;k=800
draw=_=>{if(!f){createCanvas(k,t)}r=t;while(r--){u=f%k;v=f++/k|0;c=p=36;x=u/t-1;y=1-v/t;while(p--){if(x<0){x=-x;c--}if((m=x*x+y*y)<1){x/=m;y/=m;c--}if((n=5.78/((x-a)*(x-a)+y*y))<1){x=a+n*(x-a);y*=n;c--}}stroke(0,c%4*64,k);circle(u,v,1)}}
