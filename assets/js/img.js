
document.querySelectorAll('.gallery').forEach(item => {
  item.addEventListener('click', function() {
    const imageUrl = this.style.backgroundImage.slice(5, -2); // extract URL
    const modal = document.getElementById('previewModal');
    const previewImg = document.getElementById('previewImage');
    previewImg.src = imageUrl;
    modal.style.display = 'flex';
  });
});

function close() {
  document.getElementById('previewModal').style.display = 'none';
}

document.getElementById('previewModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = 'none';
  }
});
