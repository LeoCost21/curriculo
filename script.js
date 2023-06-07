

    const titulo = document.querySelector('.digitanto')

    function ativaLetra (elemento) {
    
        const arrText = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrText.forEach((letra, i) =>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            },75 * i);
        });
    }
    
    ativaLetra(titulo)



const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .nav-primaria')



ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})
