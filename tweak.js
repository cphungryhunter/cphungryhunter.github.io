console.log('starting tweak')
const wrapper = document.getElementById ("wrapper")
const newBox = document.getElementById ("newBox")
const productBox1 = document.getElementById ("productBox1")
const productBox2 = document.getElementById ("productBox2")
const productBox3 = document.getElementById ("productBox3")
// nav
const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('nav ul');

function getDetail(nomor) {
    console.log('produk: ', nomor)

    newBox.style.display = "block"
    wrapper.style.display = "none"

    if (nomor == 1) {
        productBox1.style.display = "flex"
    }
    if (nomor == 2) {
        productBox2.style.display = "flex"
    }
    if (nomor == 3) {
        productBox3.style.display = "flex"
    }
}

function back(nomor) {
    newBox.style.display = "none"
    wrapper.style.display = "flex"

    if (nomor == 1) {
        productBox1.style.display = "none"
    }
    if (nomor == 2) {
        productBox2.style.display = "none"
    }
    if (nomor == 3) {
        productBox3.style.display = "none"
    }
}

// navbar
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide')
})