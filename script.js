function openModal(image, description, price, bidders, artist) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-image").src = image.src;
    document.getElementById("image-desc").innerText = description;
    document.getElementById("image-price").innerText = price;
    document.getElementById("image-bidders").innerText = bidders;
    document.getElementById("image-artist").innerText = artist;
    modal.style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
  }