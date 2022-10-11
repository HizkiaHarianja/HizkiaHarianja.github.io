const scriptURL = 'https://script.google.com/macros/s/AKfycbxlNq3H4FIhajIvy1lDvi7U7amilNoDD8Y8spKT_wC7WIV5W_8K9W4MbJIBnpnWPCYLcw/exec';
const form = document.forms['submit-to-google-sheet'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

  form.addEventListener('submit', e => {
    e.preventDefault();
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        myAlert.classList.toggle('d-none');
        form.reset();
        console.log('Success!', response)
    })
      .catch(error => console.error('Error!', error.message));
})