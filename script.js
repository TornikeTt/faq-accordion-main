let items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        let faq_question = document.querySelectorAll(".header-of-faqItem p");
        let faq_button = document.querySelectorAll(".header-of-faqItem img");
        let faq_answer = document.querySelectorAll(".faq-answer");

        for (let i = 0; i < faq_question.length; i++) {
            if (e.target === faq_question[i] || e.target === faq_button[i]) {
                for (let j = 0; j < faq_question.length; j++) {
                    if (j !== i) {
                        faq_answer[j].classList.remove("active");
                        faq_button[j].src = "./assets/images/icon-plus.svg";
                    }
                }

                let check = faq_answer[i].classList.toggle("active");

                faq_button[i].src = check
                    ? "./assets/images/icon-minus.svg"
                    : "./assets/images/icon-plus.svg";
            }
        }
    });
});
