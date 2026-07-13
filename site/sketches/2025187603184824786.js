t=0
draw=_=>{background(W=720,t++?9:!createCanvas(W,W,WEBGL)+W)
colorMode(HSB)
blendMode(SUBTRACT)
F=1
for(r=0;r<6+(X=Y=0)+!(F=-F);r+=PI/8)for(i=0;i<99;i++)fill(t%360,i,i,.1)+circle(X+=cos(A=r+F*noise((t-i)/W)*99)*3,Y+=sin(A)*3,sin((i+t)/99)*59)}