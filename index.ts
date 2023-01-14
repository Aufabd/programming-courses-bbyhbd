//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################

let nmbr1: number;
let nmbr2: number;
let nmbr3: number;
let nmbr4: number;
let nmbr5: number;

nmbr1 = 50;
nmbr2 = 77;
nmbr3 = 33;
nmbr4 = 10;

nmbr5 = nmbr1 + nmbr2 - nmbr3 + nmbr4;

console.log(nmbr5);

let text: string;

text = 'iraq my best country';
text = text + 'عاش العراق ';

console.log(text);
let nmbr6 = 100;
nmbr6 = 100 + 10;

console.log(nmbr6);

let nmr = 20;
let nmr2 = 10;

nmr = 20 - 10;
nmr2 = 10 + 10;

console.log(nmr);
console.log(nmr2);

let tet1, tet2: number;

tet1 = 155;
tet2 = 145;

console.log('المتغيره الاولى', tet1);
console.log('المتغيره الثانيه', tet2);

let tet3;

tet3 = tet1;
tet1 = tet2;
tet2 = tet3;

console.log('المتغيره الاولى', tet1);
console.log('المتغيره الثانيه', tet2);

let nbr1, nbr2, nbr3: number;

nbr1 = parseInt(prompt('المرجو ادخال الرقم الاول'));
nbr2 = parseInt(prompt('المرجو ادخال الرقم الثاني'));

nbr3 = nbr1 + nbr2;

console.log(nbr3);

let cod: number;

cod = parseInt(prompt('المرجو ادخال الرقم الاول'));

if (cod > 0) {
  console.log('العدد موجب');
} else {
  console.log('العدد سالب');
}
