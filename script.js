const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

galleryItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const bigImageSrc = this.getAttribute('data-big-image');
        modalImage.src = bigImageSrc;
        modal.style.display = 'block';
    });
});

function closeModal() {
    modal.style.display = 'none';
}


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
