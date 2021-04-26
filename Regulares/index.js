/*

i: iginore case. No hay diferencias entre las minúsculas y mayúsculas.

g: globally. Busca de forma global, es decir, no se para después de la primera coincidencia 

 */

text = document.getElementById('text').textContent;
//const redex = /lorem/gi
// const redex = new RegExp('lorem', 'gi');
 const redex = new RegExp('/lorem/', 'gi')

console.log(redex.test(text))
console.log(text.includes('Lorem '))

/* 
 Comodines
^ : antes de esto no puede haber nada escrito
$ : después de este no puede haber nada escrito

{n} : Se tiene que repetir n veces
{n,m} : Se tiene que repetir n y m  veces, ambas incluidas 

{n, } : Se tiene que repetir n veces

^[a-zA-Z]{0,9}@{1}$ : ^ y $, todo entre estos dos. {n, m}, las letras se repites min n y max m.



.*@.*\..* : Lo que está delante de * puede estar, no estar y se puede repetir


^[ae]?$ :  Lo que está delante dde * puede estar, no estar, pero si está solo se puede repetir una vez


*/
///[A-z, 0-9]/gi

// Nombre y Apellidos
/*  /^[a-zA-Z]+\s[a-zA-Z]+$/gm : Nombre y Apellidos con espacio en el medio 
                                                       la +\s signica que hay un espacio ej: Angel Luis*/
/*
^\S{n}$ : Palabra de n letras sin espacios

^\d{n}$ : Obligacion de n numeros.... ej DNI, # TELEFONO
               TODO NUMERICO con d minúscula es para números


^\d{n}$ : N caracteres y ninguno puede ser número

^\W+@$ : Caracteres alfanuméricos y barra baja( _ ) 

^\W+$ : Caracteres raros *-$%, etc................................
--------------------------------------------------------------------------------
___LIBRERIA__________

 */
