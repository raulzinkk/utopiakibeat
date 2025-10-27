// Criar partículas animadas no fundo
        document.addEventListener('DOMContentLoaded', function() {
            const particlesContainer = document.getElementById('particles');
            const particlesCount = 30;
            
            for (let i = 0; i < particlesCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Tamanho aleatório
                const size = Math.random() * 10 + 5;
                particle.style.width = ${size}px;
                particle.style.height = ${size}px;
                
                // Posição inicial aleatória
                particle.style.left = ${Math.random() * 100}vw;
                particle.style.top = ${Math.random() * 100}vh;
                
                // Atraso de animação aleatório
                particle.style.animationDelay = ${Math.random() * 15}s;
                
                particlesContainer.appendChild(particle);
            }
            
            // Efeito de digitação no título
            const title = document.querySelector('.logo');
            const originalText = title.textContent;
            title.textContent = '';
            
            let i = 0;
            function typeWriter() {
                if (i < originalText.length) {
                    title.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 150);
                }
            }
            
            // Iniciar efeito de digitação após um breve delay
            setTimeout(typeWriter, 500);
        });