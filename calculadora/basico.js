/*class = getElementsByClassName e use o [0]
quando é id se usa getElementById e nao precisa do [0]*/
function inserir(x) {
    document.getElementsByClassName('display')[0].innerHTML += x; //o += permite que apareça todos os numeros digitados na tela
   }

   //função para limpar o display
   function clean(){
    document.getElementsByClassName('display')[0].innerHTML = "";
   }

   function calcular(){
       var resultado = document.getElementsByClassName('display')[0].innerHTML;
       //se caso tiver um valor em resultado
       if(resultado){
           document.getElementsByClassName('display')[0].innerHTML = eval(resultado);
       }
       else //caso contrário (se nao tiver um valor)
       {
           document.getElementsByClassName('display')[0].innerHTML = "Nada para calcular!"
       }
   }
/*eval() é uma função perigosa, que 
executa o código passado com os privilégios do caller. Se você executar o eval() com uma sequência de caracteres 
que podem ser afetados por uma parte maliciosa, você pode acabar executando código malicioso na máquina do usuário 
com as permissões da sua página/extensão. Mais importante ainda, o código de terceiros pode ver o escopo em que eval() 
foi chamado, o que pode levar a possíveis ataques como  Function não é suscetível.*/





//https:pt.stackoverflow.com/questions/433340/como-colocar-a-opera%C3%A7%C3%A3o-soma-multiplica%C3%A7%C3%A3o-dentro-de-uma-vari%C3%A1vel
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval










    /*function setValor1(1) {
        valor1 = 1;
    }
    function setValor2() {
        valor2 = 2;
    }
    function somar() {
        let som = valor1 + valor2;
        console.log(som);
        
    }*/

/*let valor1 =2, valor2=1;
let som = valor1 + valor2;
console.log(som)*/



/*let soma = 2+4/2 - (348 - (150 + 196));*/
/*function setNumber(){
    let listClass = document.getElementsByClassName('display');
    for(let i = 0; i<listClass.length;i++){
    if(x == listClass[i].innerHTML){
    console.log(x,i);
    document.getElementsByClassName('resultado')[0].innerHTML = listClass[i].innerHTML;
    }
    }
    }*/