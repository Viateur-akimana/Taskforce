document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.gallery-item');

  items.forEach(item => {
    item.addEventListener('click', () => {
    
      items.forEach(i => i.classList.remove('expanded'));
    
      item.classList.add('expanded');
    });

    const moreButton = item.querySelector('.item-more');
    moreButton.addEventListener('click', (e) => {
      e.stopPropagation(); 
    });
  });
});
