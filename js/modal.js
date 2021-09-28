function puxarModal (modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('visualizar');
  
    modal.addEventListener('click', (e) => {
        if (e.target.id == modalID || e.target.className == 'fechar'){
            modal.classList.remove('visualizar');
        }
    });
  }
  
  const button = document.querySelector('#latest-products');
  
  
  button.addEventListener('click', function() {
    puxarModal('modal-produto');
  })
  