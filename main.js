var c=document.getElementById("myCanvas");
var dw=c.getContext("2d");
dw.beginPath();
dw.strokeStyle="blue";
dw.lineWidth="2";
dw.arc(250,210,40,0,2*Math.PI);
dw.stroke();
dw.beginPath();
dw.strokeStyle="black";
dw.lineWidth="2";
dw.arc(340,210,40,0,2*Math.PI);
dw.stroke();
dw.beginPath();
dw.strokeStyle="red";
dw.lineWidth="2";
dw.arc(430,210,40,0,2*Math.PI);
dw.stroke();
dw.beginPath();
dw.strokeStyle="yellow";
dw.lineWidth="2";
dw.arc(295,260,40,0,2*Math.PI);
dw.stroke();
dw.beginPath();
dw.strokeStyle="green";
dw.lineWidth="2";
dw.arc(385,260,40,0,2*Math.PI);
dw.stroke();