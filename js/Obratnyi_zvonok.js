const scriptURL = 'https://script.google.com/macros/s/AKfycbyhETMv4d2drOq4PqjO_Hk3jpSRfpXm52KbNkumt7tEMQhZodO0vEexgpPJEALdgPo/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.massage))
})
