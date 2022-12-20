var tanya=true;
while(tanya){
  
//menangkap pilihan player
var player=prompt('pilih : gajah semut, orang');
//pilihan komputer

//bilangan random
var comp=Math.random();

if(comp<0.34){
  comp='gajah'
}
else if(comp >=0.34 && comp <0.67){
  comp='orang'
}
else{
  comp='semut'
}
var hasil = '';
//rules
if(player == comp){
  hasil='SERI';
  
}
else if(player =='gajah'){
  hasil=(comp=='orang') ? 'MENANG':'KALAH';
}
else if(player=='orang'){
  hasil=(comp=='semut') ? 'MENANG':'KALAH';
}
else if(player=='semut'){
  hasil=(comp=='gajah') ? 'MENANG':'KALAH';
}
else{
  hasil='MASUKKAN PILIHAN YANG BENAR!!!'
}

//hasil

alert('Kamu memilih : '+player+' \nKomputer memilih : '+comp+ ' \nHasilnya : '+hasil);

tanya=confirm('LAGI ???????');
}
alert('Makasih dah main');