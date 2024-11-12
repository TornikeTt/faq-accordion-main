let item = document.querySelectorAll(".faq-item");

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", (e) => {
        let faq_question = document.querySelectorAll(".header-of-faqItem p");
        let faq_button = document.querySelectorAll(".header-of-faqItem img");
        let faq_answer = document.querySelectorAll(".faq-answer");

        for (let i = 0; i < faq_question.length; i++) {
            if (e.target === faq_question[i] || e.target === faq_button[i]) {
                for (let j = 0; j < faq_question.length; j++) {
                    if (j !== i) {
                        faq_answer[j].classList.remove("active");
                        faq_button[j].src = "./assets/images/icon-plus.svg"; // Reset button to plus icon
                    }
                }

                let check = faq_answer[i].classList.toggle("active");

                faq_button[i].src = check
                    ? "./assets/images/icon-minus.svg"
                    : "./assets/images/icon-plus.svg";
            }
        }
    });
}

/* 


        if (e.target === faq_question || e.target === faq_button) {
            let checking = faq_answer.classList.toggle("active");

            if (checking) {
                faq_button.src = "./assets/images/icon-minus.svg";
            } else {
                faq_button.src = "./assets/images/icon-plus.svg";
            }
        }


*/
