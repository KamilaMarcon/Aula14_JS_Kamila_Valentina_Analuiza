//sintaxe da função
//function cadastrar (){console.log('A casa caiu')}

//sintaxe de função com parametros
//function somar(a,b){return somar(3,4)};

function somar(a,b){
 let total = a+b;
console.log(total);

}

somar(3,2);

//sintaxe da funçaõ anõnima -arrow function
//()=>{}
//():por onde a função recebe os arguentos (parâmetros)
// como ocorre nas funçoes tradicionais
//=>: responsavel pelo nome arrow
//{}: o bloco de codigo que representa o escopo da função

let subtrair =(valor1,valor2)=>{
    let resultado = valor1-valor2;
    console.log(resultado);
}

subtrair(10,6);

let numeros = [1,3,5,10];

numeros.map((item)=>{
    console.log(item);
});

