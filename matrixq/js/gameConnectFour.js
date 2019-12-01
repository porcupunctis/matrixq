var checksqu = "";
var PlayCount = 0;
var n = 0;
var curCol = 1;
var tempval = "";
var myturn = "x";
var checkwin;
var aa;
var bb;
var cc;
var dd;
var ee;
var ff;
var gg;
var hh;
var ii;
var jj;
var kk;
var ll;
var mm;
var nn;
var oo;
var pp;
var qq;
var rr;
var ss;
var tt;
var uu;
var vv;
var ww;
var xx;
var yy;
var zz;
var aaa;
var bbb;
var ccc;
var ddd;
var eee;
var fff;
var ggg;
var hhh;
var iii;
var jjj;
var kkk;
var lll;
var mmm;
var nnn;
var ooo;
var ppp;












function turn(curCol) {
  if(document.getElementById("text").innerHTML == " "){
PlayCount = 0;
  for (n=1;n<=6;n++){
    checksqu = n + "." + curCol;
    tempval = document.getElementById(checksqu).innerHTML;
  
    if (tempval == "x" || tempval == "o"){
     PlayCount += 1; 
    }
  }
  if (PlayCount < 6){
    PlayCount = PlayCount + 1;
    checksqu = PlayCount + "." + curCol;
    document.getElementById(checksqu).innerHTML = myturn;
    myturn = swapxo(myturn);
    checkwin = win();
  }
  }
}




function ioDemo() {
  if (document.getElementById("myText").value == ""&&document.getElementById("yText").value == ""){
    document.getElementById("myOutput").innerHTML = "Enter Both Names";
  } else if (document.getElementById("myText").value == ""&&document.getElementById("yText").value != "") {
    document.getElementById("myOutput").innerHTML = "Enter Player 1's Name";
  } else if (document.getElementById("yText").value == ""&&document.getElementById("myText").value != "") {
    document.getElementById("myOutput").innerHTML = "Enter Player 2's Name";
  }
  else  {
    if (document.getElementById("myOutput").innerHTML == " "){
    var test_val = document.getElementById("myText").value;
    var test_accum = document.getElementById("yText").value;  


    document.getElementById("myOutput").innerHTML = Math.floor(Math.random() * 2);


    if(document.getElementById("myOutput").innerHTML == "1") {
      document.getElementById("myOutput").innerHTML = test_val + " Goes First";
    } else {
      document.getElementById("myOutput").innerHTML = test_accum + " Goes First";
    }
  }
  }
}








function win(){
  aa = document.getElementById("6.1").innerHTML;
  bb = document.getElementById("6.2").innerHTML;
  cc = document.getElementById("6.3").innerHTML;
  dd = document.getElementById("6.4").innerHTML;
  ee = document.getElementById("6.5").innerHTML;
  ff = document.getElementById("6.6").innerHTML;
  gg = document.getElementById("6.7").innerHTML;
  hh = document.getElementById("5.1").innerHTML;
  ii = document.getElementById("5.2").innerHTML;
  jj = document.getElementById("5.3").innerHTML;
  kk = document.getElementById("5.4").innerHTML;
  ll = document.getElementById("5.5").innerHTML;
  mm = document.getElementById("5.6").innerHTML;
  nn = document.getElementById("5.7").innerHTML;
  oo = document.getElementById("4.1").innerHTML;
  pp = document.getElementById("4.2").innerHTML;
  qq = document.getElementById("4.3").innerHTML;
  rr = document.getElementById("4.4").innerHTML;
  ss = document.getElementById("4.5").innerHTML;
  tt = document.getElementById("4.6").innerHTML;
  uu = document.getElementById("4.7").innerHTML;
  vv = document.getElementById("3.1").innerHTML;
  ww = document.getElementById("3.2").innerHTML;
  xx = document.getElementById("3.3").innerHTML;
  yy = document.getElementById("3.4").innerHTML;
  zz = document.getElementById("3.5").innerHTML;
  aaa = document.getElementById("3.6").innerHTML;
  bbb = document.getElementById("3.7").innerHTML;
  ccc = document.getElementById("2.1").innerHTML;
  ddd = document.getElementById("2.2").innerHTML;
  eee = document.getElementById("2.3").innerHTML;
  fff = document.getElementById("2.4").innerHTML;
  ggg = document.getElementById("2.5").innerHTML;
  hhh = document.getElementById("2.6").innerHTML;
  iii = document.getElementById("2.7").innerHTML;
  jjj = document.getElementById("1.1").innerHTML;
  kkk = document.getElementById("1.2").innerHTML;
  lll = document.getElementById("1.3").innerHTML;
  mmm = document.getElementById("1.4").innerHTML;
  nnn = document.getElementById("1.5").innerHTML;
  ooo = document.getElementById("1.6").innerHTML;
  ppp = document.getElementById("1.7").innerHTML;


  
  // row 6 wins
  if ((aa==bb && bb==cc && cc==dd)&&(aa=="x"||aa=="o")){
    document.getElementById("text").innerHTML=aa + " Wins";
    
  }
  if ((bb==cc && cc==dd && dd==ee)&&(bb=="x"||bb=="o")){
    document.getElementById("text").innerHTML=bb + " Wins";
    
  }
  if ((cc==dd && dd==ee && ee==ff)&&(cc=="x"||cc=="o")){
    document.getElementById("text").innerHTML=cc + " Wins";
    
  }
  if ((dd==ee && ee==ff && ff==gg)&&(dd=="x"||dd=="o")){
    document.getElementById("text").innerHTML=dd + " Wins";
    
  }
  // row 5 wins
  if ((hh==ii && ii==jj && jj==kk)&&(hh=="x"||hh=="o")){
    document.getElementById("text").innerHTML=hh + " Wins";
    
  }
  if ((ii==jj && jj==kk && kk==ll)&&(ii=="x"||ii=="o")){
    document.getElementById("text").innerHTML=ii + " Wins";
    
  }
  if ((jj==kk && kk==ll && ll==mm)&&(jj=="x"||jj=="o")){
    document.getElementById("text").innerHTML=jj + " Wins";
    
  }
  if ((kk==ll && ll==mm && mm==nn)&&(kk=="x"||kk=="o")){
    document.getElementById("text").innerHTML=kk + " Wins";
    
  }
  // row 4 wins
  if ((oo==pp && pp==qq && qq==rr)&&(oo=="x"||oo=="o")){
    document.getElementById("text").innerHTML=oo + " Wins";
    
  }
  if ((pp==qq && qq==rr && rr==ss)&&(pp=="x"||pp=="o")){
    document.getElementById("text").innerHTML=pp + " Wins";
    
  }
  if ((qq==rr && rr==ss && ss==tt)&&(qq=="x"||qq=="o")){
    document.getElementById("text").innerHTML=qq + " Wins";
    
  }
  if ((rr==ss && ss==tt && tt==uu)&&(rr=="x"||rr=="o")){
    document.getElementById("text").innerHTML=rr + " Wins";
    
  }
  // row 3 wins
  if ((vv==ww && ww==xx && xx==yy)&&(vv=="x"||vv=="o")){
    document.getElementById("text").innerHTML=vv + " Wins";
    
  }
  if ((ww==xx && xx==yy && yy==zz)&&(ww=="x"||ww=="o")){
    document.getElementById("text").innerHTML=ww + " Wins";
    
  }
  if ((xx==yy && yy==zz && zz==aaa)&&(xx=="x"||xx=="o")){
    document.getElementById("text").innerHTML=xx + " Wins";
    
  }
  if ((yy==zz && zz==aaa && aaa==bbb)&&(yy=="x"||yy=="o")){
    document.getElementById("text").innerHTML=yy + " Wins";
    
  }
  // row 2 wins
  if ((ccc==ddd && ddd==eee && eee==fff)&&(ccc=="x"||ccc=="o")){
    document.getElementById("text").innerHTML=ccc + " Wins";
    
  }
  if ((ddd==eee && eee==fff && fff==ggg)&&(ddd=="x"||ddd=="o")){
    document.getElementById("text").innerHTML=ddd + " Wins";
    
  }
  if ((eee==fff && fff==ggg && ggg==hhh)&&(eee=="x"||eee=="o")){
    document.getElementById("text").innerHTML=eee + " Wins";
    
  }
  if ((fff==ggg && ggg==hhh && hhh==iii)&&(fff=="x"||fff=="o")){
    document.getElementById("text").innerHTML=fff + " Wins";
    
  }
  // row 1 wins
  if ((jjj==kkk && kkk==lll && lll==mmm)&&(jjj=="x"||jjj=="o")){
    document.getElementById("text").innerHTML=jjj + " Wins";
    
  }
  if ((kkk==lll && lll==mmm && mmm==nnn)&&(kkk=="x"||kkk=="o")){
    document.getElementById("text").innerHTML=kkk + " Wins";
    
  }
  if ((lll==mmm && mmm==nnn && nnn==ooo)&&(lll=="x"||lll=="o")){
    document.getElementById("text").innerHTML=lll + " Wins";
    
  }
  if ((mmm==nnn && nnn==ooo && ooo==ppp)&&(mmm=="x"||mmm=="o")){
    document.getElementById("text").innerHTML=mmm + " Wins";
    
  }
  //column 1 wins
  if ((aa==hh && hh==oo && oo==vv)&&(aa=="x"||aa=="o")){
    document.getElementById("text").innerHTML=aa + " Wins";
    
  }
  if ((hh==oo && oo==vv && vv==ccc)&&(hh=="x"||hh=="o")){
    document.getElementById("text").innerHTML=hh + " Wins";
    
  }
  if ((oo==vv && vv==ccc && ccc==jjj)&&(oo=="x"||oo=="o")){
    document.getElementById("text").innerHTML=oo + " Wins";
    
  }
  //column 2 wins
  if ((bb==ii && ii==pp && pp==ww)&&(bb=="x"||bb=="o")){
    document.getElementById("text").innerHTML=bb + " Wins";
    
  }
  if ((ii==pp && pp==ww && ww==ddd)&&(ii=="x"||ii=="o")){
    document.getElementById("text").innerHTML=ii + " Wins";
    
  }
  if ((pp==ww && ww==ddd && ddd==kkk)&&(pp=="x"||pp=="o")){
    document.getElementById("text").innerHTML=pp + " Wins";
    
  }
  //column 3 wins
  if ((cc==jj && jj==qq && qq==xx)&&(cc=="x"||cc=="o")){
    document.getElementById("text").innerHTML=cc + " Wins";
    
  }
  if ((jj==qq && qq==xx && xx==eee)&&(jj=="x"||jj=="o")){
    document.getElementById("text").innerHTML=jj + " Wins";
    
  }
  if ((qq==xx && xx==eee && eee==lll)&&(qq=="x"||qq=="o")){
    document.getElementById("text").innerHTML=qq + " Wins";
    
  }
  //column 4 wins
  if ((dd==kk && kk==rr && rr==yy)&&(dd=="x"||dd=="o")){
    document.getElementById("text").innerHTML=dd + " Wins";
    
  }
  if ((kk==rr && rr==yy && yy==fff)&&(kk=="x"||kk=="o")){
    document.getElementById("text").innerHTML=kk + " Wins";
    
  }
  if ((rr==yy && yy==fff && fff==mmm)&&(rr=="x"||rr=="o")){
    document.getElementById("text").innerHTML=rr + " Wins";
    
  }
  //column 5 wins
  if ((ee==ll && ll==ss && ss==zz)&&(ee=="x"||ee=="o")){
    document.getElementById("text").innerHTML=ee + " Wins";
    
  }
  if ((ll==ss && ss==zz && zz==ggg)&&(ll=="x"||ll=="o")){
    document.getElementById("text").innerHTML=ll + " Wins";
    
  }
  if ((ss==zz && zz==ggg && ggg==nnn)&&(ss=="x"||ss=="o")){
    document.getElementById("text").innerHTML=ss + " Wins";
    
  }
  //column 6 wins
  if ((ff==mm && mm==tt && tt==aaa)&&(ff=="x"||ff=="o")){
    document.getElementById("text").innerHTML=ff + " Wins";
    
  }
  if ((mm==tt && tt==aaa && aaa==hhh)&&(mm=="x"||mm=="o")){
    document.getElementById("text").innerHTML=mm + " Wins";
    
  }
  if ((tt==aaa && aaa==hhh && hhh==ooo)&&(tt=="x"||tt=="o")){
    document.getElementById("text").innerHTML=tt + " Wins";
    
  }
  //column 7 wins
  if ((gg==nn && nn==uu && uu==bbb)&&(gg=="x"||gg=="o")){
    document.getElementById("text").innerHTML=gg + " Wins";
    
  }
  if ((nn==uu && uu==bbb && bbb==iii)&&(nn=="x"||nn=="o")){
    document.getElementById("text").innerHTML=nn + " Wins";
    
  }
  if ((uu==bbb && bbb==iii && iii==ppp)&&(uu=="x"||uu=="o")){
    document.getElementById("text").innerHTML=uu + " Wins";
    
  }
  //left diagonal wins
  if ((oo==ww && ww==eee && eee==mmm)&&(oo=="x"||oo=="o")){
    document.getElementById("text").innerHTML=oo + " Wins";
    
  }
  if ((hh==pp && pp==xx && xx==fff)&&(hh=="x"||hh=="o")){
    document.getElementById("text").innerHTML=hh + " Wins";
    
  }
  if ((pp==xx && xx==fff && fff==nnn)&&(pp=="x"||pp=="o")){
    document.getElementById("text").innerHTML=pp + " Wins";
    
  }
  if ((aa==ii && ii==qq && qq==yy)&&(aa=="x"||aa=="o")){
    document.getElementById("text").innerHTML=aa + " Wins";
    
  }
  if ((ii==qq && qq==yy && yy==ggg)&&(ii=="x"||ii=="o")){
    document.getElementById("text").innerHTML=ii + " Wins";
    
  }
  if ((qq==yy && yy==ggg && ggg==ooo)&&(qq=="x"||qq=="o")){
    document.getElementById("text").innerHTML=qq + " Wins";
    
  }
  if ((bb==jj && jj==rr && rr==zz)&&(bb=="x"||bb=="o")){
    document.getElementById("text").innerHTML=bb + " Wins";
    
  }
  if ((jj==rr && rr==zz && zz==hhh)&&(jj=="x"||jj=="o")){
    document.getElementById("text").innerHTML=jj + " Wins";
    
  }
  if ((rr==zz && zz==hhh && hhh==ppp)&&(rr=="x"||rr=="o")){
    document.getElementById("text").innerHTML=rr + " Wins";
    
  }
  if ((cc==kk && kk==ss && ss==aaa)&&(cc=="x"||cc=="o")){
    document.getElementById("text").innerHTML=cc + " Wins";
    
  }
  if ((kk==ss && ss==aaa && aaa==iii)&&(kk=="x"||kk=="o")){
    document.getElementById("text").innerHTML=kk + " Wins";
    
  }
  if ((dd==ll && ll==tt && tt==bbb)&&(dd=="x"||dd=="o")){
    document.getElementById("text").innerHTML=dd + " Wins";
    
  }
  //right diagonal wins
  if ((vv==pp && pp==jj && jj==dd)&&(vv=="x"||vv=="o")){
    document.getElementById("text").innerHTML=vv + " Wins";
    
  }
  if ((ccc==ww && ww==qq && qq==kk)&&(ccc=="x"||ccc=="o")){
    document.getElementById("text").innerHTML=ccc + " Wins";
    
  }
  if ((ww==qq && qq==kk && kk==ee)&&(ww=="x"||ww=="o")){
    document.getElementById("text").innerHTML=ww + " Wins";
    
  }
  if ((jjj==ddd && ddd==xx && xx==rr)&&(jjj=="x"||jjj=="o")){
    document.getElementById("text").innerHTML=jjj + " Wins";
    
  }
  if ((ddd==xx && xx==rr && rr==ll)&&(ddd=="x"||ddd=="o")){
    document.getElementById("text").innerHTML=ddd + " Wins";
    
  }
  if ((xx==rr && rr==ll && ll==ff)&&(xx=="x"||xx=="o")){
    document.getElementById("text").innerHTML=xx + " Wins";
    
  }
  if ((kkk==eee && eee==yy && yy==ss)&&(kkk=="x"||kkk=="o")){
    document.getElementById("text").innerHTML=kkk + " Wins";
    
  }
  if ((eee==yy && yy==ss && ss==mm)&&(eee=="x"||eee=="o")){
    document.getElementById("text").innerHTML=eee + " Wins";
    
  }
  if ((yy==ss && ss==mm && mm==gg)&&(yy=="x"||yy=="o")){
    document.getElementById("text").innerHTML=yy + " Wins";
    
  }
  if ((lll==fff && fff==zz && zz==tt)&&(lll=="x"||lll=="o")){
    document.getElementById("text").innerHTML=lll + " Wins";
    
  }
  if ((fff==zz && zz==tt && tt==nn)&&(fff=="x"||fff=="o")){
    document.getElementById("text").innerHTML=fff + " Wins";
    
  }
  if ((mmm==ggg && ggg==aaa && aaa==uu)&&(mmm=="x"||mmm=="o")){
    document.getElementById("text").innerHTML=mmm + " Wins";
    
  }
  //If Nobody Wins
  if ((aa=="x"||aa=="o")&&(bb=="x"||bb=="o")&&(cc=="x"||cc=="o")&&(dd=="x"||dd=="o")&&(ee=="x"||ee=="o")&&(ff=="x"||ff=="o")&&(gg=="x"||gg=="o")&&(hh=="x"||hh=="o")&&(ii=="x"||ii=="o")&&(jj=="x"||jj=="o")&&(kk=="x"||kk=="o")&&(ll=="x"||ll=="o")&&(mm=="x"||mm=="o")&&(nn=="x"||nn=="o")&&(oo=="x"||oo=="o")&&(pp=="x"||pp=="o")&&(qq=="x"||qq=="o")&&(rr=="x"||rr=="o")&&(ss=="x"||ss=="o")&&(tt=="x"||tt=="o")&&(uu=="x"||uu=="o")&&(vv=="x"||vv=="o")&&(ww=="x"||ww=="o")&&(xx=="x"||xx=="o")&&(yy=="x"||yy=="o")&&(zz=="x"||zz=="o")&&(aaa=="x"||aaa=="o")&&(bbb=="x"||bbb=="o")&&(ccc=="x"||ccc=="o")&&(ddd=="x"||ddd=="o")&&(eee=="x"||eee=="o")&&(fff=="x"||fff=="o")&&(ggg=="x"||ggg=="o")&&(hhh=="x"||hhh=="o")&&(iii=="x"||iii=="o")&&(jjj=="x"||jjj=="o")&&(kkk=="x"||kkk=="o")&&(lll=="x"||lll=="o")&&(mmm=="x"||mmm=="o")&&(nnn=="x"||nnn=="o")&&(ooo=="x"||ooo=="o")&&(ppp=="x"||ppp=="o")&&document.getElementById("text").innerHTML == " ") {
    document.getElementById("text").innerHTML = "Nobody Wins";
}
  if(document.getElementById("myOutput").innerHTML == document.getElementById("myText").value + " Goes First"&&document.getElementById("text").innerHTML == "x Wins"){
    document.getElementById("text").innerHTML = document.getElementById("myText").value + " Wins"
  } else if(document.getElementById("myOutput").innerHTML == document.getElementById("myText").value + " Goes First"&&document.getElementById("text").innerHTML == "o Wins"){
    document.getElementById("text").innerHTML = document.getElementById("yText").value + " Wins"
  } else if(document.getElementById("myOutput").innerHTML == document.getElementById("yText").value + " Goes First"&&document.getElementById("text").innerHTML == "x Wins"){
    document.getElementById("text").innerHTML = document.getElementById("yText").value + " Wins"
  }else if(document.getElementById("myOutput").innerHTML == document.getElementById("yText").value + " Goes First"&&document.getElementById("text").innerHTML == "o Wins"){
    document.getElementById("text").innerHTML = document.getElementById("myText").value + " Wins"
  }
}












function swapxo(x){
if (x == "x"){
x="o";
} else{
x = 'x';
}
return x;
}


function reset(){
  document.getElementById("6.1").innerHTML = " ";
  document.getElementById("6.2").innerHTML = " ";
  document.getElementById("6.3").innerHTML = " ";
  document.getElementById("6.4").innerHTML = " ";
  document.getElementById("6.5").innerHTML = " ";
  document.getElementById("6.6").innerHTML = " ";
  document.getElementById("6.7").innerHTML = " ";
  document.getElementById("5.1").innerHTML = " ";
  document.getElementById("5.2").innerHTML = " ";
  document.getElementById("5.3").innerHTML = " ";
  document.getElementById("5.4").innerHTML = " ";
  document.getElementById("5.5").innerHTML = " ";
  document.getElementById("5.6").innerHTML = " ";
  document.getElementById("5.7").innerHTML = " ";
  document.getElementById("4.1").innerHTML = " ";
  document.getElementById("4.2").innerHTML = " ";
  document.getElementById("4.3").innerHTML = " ";
  document.getElementById("4.4").innerHTML = " ";
  document.getElementById("4.5").innerHTML = " ";
  document.getElementById("4.6").innerHTML = " ";
  document.getElementById("4.7").innerHTML = " ";
  document.getElementById("3.1").innerHTML = " ";
  document.getElementById("3.2").innerHTML = " ";
  document.getElementById("3.3").innerHTML = " ";
  document.getElementById("3.4").innerHTML = " ";
  document.getElementById("3.5").innerHTML = " ";
  document.getElementById("3.6").innerHTML = " ";
  document.getElementById("3.7").innerHTML = " ";
  document.getElementById("2.1").innerHTML = " ";
  document.getElementById("2.2").innerHTML = " ";
  document.getElementById("2.3").innerHTML = " ";
  document.getElementById("2.4").innerHTML = " ";
  document.getElementById("2.5").innerHTML = " ";
  document.getElementById("2.6").innerHTML = " ";
  document.getElementById("2.7").innerHTML = " ";
  document.getElementById("1.1").innerHTML = " ";
  document.getElementById("1.2").innerHTML = " ";
  document.getElementById("1.3").innerHTML = " ";
  document.getElementById("1.4").innerHTML = " ";
  document.getElementById("1.5").innerHTML = " ";
  document.getElementById("1.6").innerHTML = " ";
  document.getElementById("1.7").innerHTML = " ";
  document.getElementById("text").innerHTML = " ";
  document.getElementById("myOutput").innerHTML = " ";
  myturn = "x";
}










function rese() {
  document.getElementById("myText").value = "";
  document.getElementById("yText").value = "";
  document.getElementById("myOutput").innerHTML = " ";
}