    // scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const src = this.getAttribute('src');
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `<div class="modal-content"><span class="close-button">&times;</span><img src="${src}" alt="Imagem ampliada"></div>`;
            document.body.appendChild(modal);
            
            const closeButton = modal.querySelector('.close-button');
            closeButton.addEventListener('click', function() {
                modal.remove();
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
});

// Adicione estilo para o modal no CSS (styles.css)
