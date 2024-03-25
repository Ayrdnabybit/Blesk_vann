const scriptURL = 'https://script.google.com/macros/s/AKfycbwAscHqPfhpGm-kmU_FRf_ibMBZTlxOH1KQGegLnBueJMdlfwBZpSjMtK1lxXoUUE_F/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.massage))
})
