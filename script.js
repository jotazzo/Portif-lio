let index = 0;

    function atualizarSlides() {
        const slides = document.getElementById('slides');
        slides.style.transform = 'translateX(' + (-index * 100) + '%)';
    }

    function proximo() {
        index = (index + 1) % 2; 
        atualizarSlides();
    }

    function anterior() {
        index = (index - 1 + 2) % 2; 
        atualizarSlides();
    }

function typeWrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
          
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    
      });
    }
    const titulo = document.querySelector('.titulo-principal');
    typeWrite(titulo);

    
let trilho = document.getElementById('trilho')
let header = document.querySelector('header')
let inicio = document.getElementById('inicio')
let container = document.getElementById('container')
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')
let skills = document.getElementById('skills')
let escuro = document.getElementById('escuro')
let quadrado1 = document.getElementById('quadrado1')
let quadrado2 = document.getElementById('quadrado2')
let quadrado3 = document.getElementById('quadrado3')
let quadrado4 = document.getElementById('quadrado4')
let quadrado5 = document.getElementById('quadrado5')
let quadrado6 = document.getElementById('quadrado6')
let quadrado7 = document.getElementById('quadrado7')
let quadrado8 = document.getElementById('quadrado8')
let quadrado9 = document.getElementById('quadrado9')
let sobremim = document.getElementById('sobremim')
let escuro2 = document.getElementById('escuro2')
let escuro3 = document.getElementById('escuro3')
let carrossel = document.getElementById('carrossel')
let slide1 = document.getElementById('slide1')
let slide2 = document.getElementById('slide2')
let view1 = document.getElementById('view1')
let view2 = document.getElementById('view2')
let contatus = document.getElementById('contatus')
let insnome = document.getElementById('insnome')
let inputmn = document.getElementById('inputmn')
let mensagem = document.getElementById('mensagem')
let enviar2 = document.getElementById('enviar2')
let limpar = document.getElementById('limpar')
let footer = document.getElementById('footer')


trilho.addEventListener('click', ()=>{
  trilho.classList.toggle('dark')
  header.classList.toggle('dark')
  inicio.classList.toggle('dark')
  container.classList.toggle('dark')
  box1.classList.toggle('dark')
  box2.classList.toggle('dark')
  box3.classList.toggle('dark')
  box4.classList.toggle('dark')
  skills.classList.toggle('dark')
  escuro.classList.toggle('dark')
  quadrado1.classList.toggle('dark')
  quadrado2.classList.toggle('dark')
  quadrado3.classList.toggle('dark')
  quadrado4.classList.toggle('dark')
  quadrado5.classList.toggle('dark')
  quadrado6.classList.toggle('dark')
  quadrado7.classList.toggle('dark')
  quadrado8.classList.toggle('dark')
  quadrado9.classList.toggle('dark')
  sobremim.classList.toggle('dark')
  escuro2.classList.toggle('dark')
  escuro3.classList.toggle('dark')
  carrossel.classList.toggle('dark')
  slide1.classList.toggle('dark')
  slide2.classList.toggle('dark')
  view1.classList.toggle('dark')
  view2.classList.toggle('dark')
  contatus.classList.toggle('dark')
  insnome.classList.toggle('dark')
  inputmn.classList.toggle('dark')
  mensagem.classList.toggle('dark')
  enviar2.classList.toggle('dark')
  limpar.classList.toggle('dark')
  footer.classList.toggle('dark')
})


