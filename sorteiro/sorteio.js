const $conteinerGrupos = document.getElementById ("conteinerGrupos");

const numerosAleatorio = () => Math.trunc(Math.random() * 3)  -1;

const nomes = ["cleyde","ana","maria","jose","pedro","marta", "hugo","111","2222","333","4444","5555","6666"];

const embaralharArray = ( arr ) => nomes.sort(numerosAleatorio);

function dividirGrupos ( arr, qtd ) {
    
    const arrGrupos = [];
    const max = arr.length;
    
    const salto = Math.ceil (max / qtd );
    for ( i=0; i<max; i=i+salto){
        aux = arr.slice (i, i+salto).join(" - ");
        arrGrupos.push ({
            "nome":i/salto, 
            "integrantes":aux
        }); 
    }
    return arrGrupos;
}
const criarCards = ( grupos ) => {

    const criarCard = ( html, grupo ) => {
        return `${html}
        <div class='card bg-success border-success text-center'>
            <div class='card-header'>Grupo - ${grupo.nome+1}</div>
            <div class='card-body bg-white'>
                <p class='card-text'>${grupo.integrantes} </p>
            </div>
        </div>`
    }
    
    
    return grupos.reduce ( criarCard , "");
 }

 const grupos = dividirGrupos(embaralharArray(nomes),5);

 console.table (grupos);

 $conteinerGrupos.innerHTML = criarCards(grupos,"Grupos");