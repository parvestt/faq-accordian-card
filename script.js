const allFAQ = Array.from(document.querySelectorAll('.faq__head'));

const clearAllActive = () => allFAQ.forEach(faq => {
    faq.classList.remove('active');
});

allFAQ.forEach(faq => {
    faq.addEventListener('click', (e) => {
        clearAllActive();
        faq.classList.add('active');
    });
});

