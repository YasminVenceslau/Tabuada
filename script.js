const form = document.getElementById('form')

form.addEventListener('submit',function(e){
    e.preventDefault()//inpede a atualização da página

    tabua() //chama a função tabua

})

function tabua(){
  //recupera os valores dos elementos no HTML, Number converte string para número
    const x = document.getElementById('numero').value
    let resultado = ''
    const tabela = document.getElementById('texto')

    if (x.trim() === '' || isNaN(Number(x))){
        
        alert ('Não foi inserido Valor!');

    }else{

        //inicia a repetição

        Number(x)
        
        for (var mult = 1; mult <= 10 ; mult++ ){
        //faz a funçaõ de x*1 e o resulatdo 
        resultado += `${x} x ${mult} = ${x*mult} 
`
        

    }

        
}
//coloca o resultado na tabela
tabela.innerHTML = resultado





}