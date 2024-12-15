document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });
  
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });