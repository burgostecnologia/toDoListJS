//parei no 5:44:42
//https://www.youtube.com/watch?v=McKNP3g6VBA&t=2298s
let inputTarefa = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btnAdd");
let main = document.getElementById("areaLista");
let contador = 0;

function addTarefa(){
    //PEGA VALOR DO INPUT
    let valorInput = inputTarefa.value;
    //VALIDA ENTRADA
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {      
        // SE COLOCAR O HTML ENTRE CRASES `` RECONHECE O HTML, SE COLOCAR ENTRE PLIQUES PRECISA CONCATENAR
        // NO HTML ENTRE CRASES SE USAR O ${} DA PARA COLOCAR VARIAVEIS DENTRO

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})"class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>                    
    </div>`;
        //ADICIONAR O ITEM
        main.innerHTML +=  novoItem;
        //LIMPAR E DAR FOCUS
        inputTarefa.value = "";
        inputTarefa.focus();
    }
}

inputTarefa.addEventListener("keyup", function(event){
    if(event.keyCode ===13){
        event.preventDefault();
        btnAdd.click();
    }
})

function deletar(id){
    let tarefaParaExcluir = document.getElementById(id);
    tarefaParaExcluir.remove();
}

function marcarTarefa(id){
    let item  = document.getElementById(id);
    let classe = item.getAttribute('class');
    if (classe == "item"){
        item.classList.add('clicado');
        let icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
        
        item.parentNode.appendChild(item);

    }else{
        item.classList.remove('clicado');
        let icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
    
}