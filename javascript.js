// =========================
// SERVICE CARD FUNCTIONALITY
// =========================

document.addEventListener("DOMContentLoaded", function() {
  
  const serviceCards =
    document.querySelectorAll(".service-card");
  
  serviceCards.forEach(function(card) {
    
    card.addEventListener("click", function() {
      
      const isFlipped = card.classList.toggle("flipped");
      
      card.setAttribute("aria-pressed", String(isFlipped));
      
    });
    
  });
  
});