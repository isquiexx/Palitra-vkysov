document.addEventListener("DOMContentLoaded", () => {
    const minusButton = document.querySelector(".minus");
    const plusButton = document.querySelector(".plus");
    const quantityInput = document.getElementById("quantity");
  
    minusButton.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value, 10);
      if (currentValue > 0) {
        quantityInput.value = currentValue - 1;
      }
    });
  
    plusButton.addEventListener("click", () => {
      let currentValue = parseInt(quantityInput.value, 10);
      quantityInput.value = currentValue + 1;
    });
  });

  