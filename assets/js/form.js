document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');

    const ajaxSend = async (formData) => {
        const fetchResp = await fetch('https://indie-tracker-feedback.herokuapp.com/', {
            mode: 'no-cors',
            method: 'POST',
            body: formData
        });
        return await fetchResp.text();
    };

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            form.reset();
            modal.classList.add('active-modal');
            ajaxSend(formData);
        });
    });
})