const menuIcon = document.getElementById('menuIcon')
const menuBox = document.getElementById('menuBox')

menuIcon.addEventListener("click", function(){
    menuBox.classList.toggle("hidden")
})