const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {

    faqItems.forEach(faq => {
      if(faq !== item){
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");

  });
});