const button = document.querySelector(".menu")
const header = document.getElementById("header")
const closeButton = document.createElement("button")
const closeIcon = document.createElement("img")

function openMenu() {
    document.body.style.overflow = "hidden"

    const burgerMenu = document.createElement("div")
    const navigationList = document.createElement("div")

    navigationList.classList.add("navigation__container")

    closeButton.classList.add("navigation__close")
    closeIcon.src = "../image/Icon_close.png"
    burgerMenu.classList.add("navigation--mobile")
    burgerMenu.classList.add("navigation")

    navigationList.innerHTML = `
                <ul class="navigation__list--mobile">
                        <a href="http://localhost:3002/" class="navigation__link"><li class="navigation__item--mobile">Главная</li></a>
                        <a href="" class="navigation__link"><li class="navigation__item--mobile">О Вас</li></a>
                        <a href="http://localhost:3002/services" class="navigation__link"><li class="navigation__item--mobile">Услуги</li></a>
                        <a href="" class="navigation__link"><li class="navigation__item--mobile">Карта сайта</li></a>
                        <a href="" class="navigation__link"><li class="navigation__item--mobile">Контакты</li></a>  
                </ul>
        `

    closeButton.appendChild(closeIcon)
    navigationList.appendChild(closeButton)
    burgerMenu.appendChild(navigationList)
    header.appendChild(burgerMenu)
}

function closeMenu() {
    document.body.style.overflow = "auto"

    const burgerMenu = document.querySelector(".navigation--mobile")

    header.removeChild(burgerMenu)
}

button.addEventListener("click", openMenu)

closeButton.addEventListener("click", closeMenu)
