function openModal(image, description, price, bidders) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-image").src = image.src;
    document.getElementById("image-desc").innerText = description;
    document.getElementById("image-price").innerText = price;
    document.getElementById("image-bidders").innerText = bidders;
    modal.style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  