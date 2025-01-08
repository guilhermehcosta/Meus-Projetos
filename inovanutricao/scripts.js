
document.addEventListener('DOMContentLoaded', function() {
  // Aguarda 2 segundos antes de remover a tela de carregamento
  setTimeout(function() {
      const loadingScreen = document.querySelector('.loading-screen');
      const body = document.body;
      
      // Adiciona classe para esconder a tela de carregamento
      loadingScreen.classList.add('hidden');
      
      // Mostra o conteúdo do site
      body.classList.add('loaded');
      
      // Remove a tela de carregamento do DOM após a transição
      setTimeout(() => {
          loadingScreen.remove();
      }, 500);
  }, 1000);
});

// Garante que todos os recursos (imagens, etc) estejam carregados
window.addEventListener('load', function() {
  console.log('Todos os recursos foram carregados');
});



const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.mobile-menu nav a');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
       e.preventDefault();
       
       const targetId = this.getAttribute('href').slice(1);
       const target = document.getElementById(targetId);
       
       if (target) {
         window.scrollTo({
           top: target.offsetTop - 80, // -80 compensa a altura do header fixo
           behavior: 'smooth'
         });
       }
     });
   });

   // Função para verificar qual seção está visível
function updateActiveSection() {
     const sections = document.querySelectorAll('section');
     const navLinks = document.querySelectorAll('header a[href^="#"], .mobile-menu a[href^="#"]');
     
     sections.forEach(section => {
       const rect = section.getBoundingClientRect();
       const isVisible = (rect.top <= 150) && (rect.bottom >= 150);
       
       if (isVisible) {
         const id = section.getAttribute('id');
         navLinks.forEach(link => {
           if (link.getAttribute('href') === `#${id}`) {
             link.classList.add('active-link');
           } else {
             link.classList.remove('active-link');
           }
         });
       }
     });
   }
   
   // Atualiza ao rolar a página
   window.addEventListener('scroll', updateActiveSection);

   function reveal() {
     const reveals = document.querySelectorAll('.reveal');
     const buttonReveals = document.querySelectorAll('.button-reveal');
   
     reveals.forEach(element => {
       const elementTop = element.getBoundingClientRect().top;
       const windowHeight = window.innerHeight;
       
       if (elementTop < windowHeight - 100) {
         element.classList.add('active');
       }
     });
   
     buttonReveals.forEach(button => {
       const buttonTop = button.getBoundingClientRect().top;
       const windowHeight = window.innerHeight;
       
       if (buttonTop < windowHeight - 100) {
         button.classList.add('active');
       }
     });
   }
   
   window.addEventListener('scroll', reveal);
   reveal(); // Executa ao carregar a página

   function addWiggleAnimation() {
     const buttons = document.querySelectorAll('button, .strong a');
     
     buttons.forEach(button => {
       if (button.getBoundingClientRect().top < window.innerHeight - 50 && !button.classList.contains('wiggled')) {
         button.classList.add('wiggle-animation');
         button.classList.add('wiggled'); // Marca que já foi animado
         
         // Remove a classe após 2 segundos
         setTimeout(() => {
           button.classList.remove('wiggle-animation');
         }, 2000);
       }
     });
   }
   
   window.addEventListener('scroll', addWiggleAnimation);

   