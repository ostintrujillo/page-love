// FECHA EN QUE SE CONOCIERON

const startDate = new Date(2022, 1, 13); // 13 febrero 2022

function actualizarTiempo() {

    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    if (days < 0) {

        months--;

        const ultimoMes = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += ultimoMes.getDate();
    }

    if (months < 0) {

        years--;
        months += 12;
    }

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
}

actualizarTiempo();


// ANIMACIONES AL HACER SCROLL

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".fade").forEach(el => {

    observer.observe(el);

});