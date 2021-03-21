function modal() {
    document.querySelector('.modal_overlay').classList.toggle('active')
}

let date = new Date;

document.querySelector('footer').innerHTML = `<p>Belicio Batista Cardoso &copy; ${date.getFullYear()}</p>`;