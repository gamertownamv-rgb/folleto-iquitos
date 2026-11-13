const fotosTarjetas = {
    1: ["img/plazadearmas.jpg", "img/CasaHierro.png"],
    2: ["img/bufeoodelfincolorado.jpg", "img/puentenanay.jpg"],
    3: ["img/faunapacaya.jpg", "img/pacayasamiriaflora.jpg"]
};

let indice = 0;
setInterval(() => {
    indice = indice === 0 ? 1 : 0;
    for (let dia = 1; dia <= 3; dia++) {
        const img = document.getElementById(`img-dia${dia}`);
        img.style.opacity = 0.3;
        setTimeout(() => {
            img.src = fotosTarjetas[dia][indice];
            img.style.opacity = 1;
        }, 250);
    }
}, 4000);

function verHorario(dia) {
    const info = {
        1: "Día 1: Salida 9:00 a.m. desde la Plaza de Armas.",
        2: "Día 2: Embarque 8:30 a.m. en Puerto Bellavista Nanay.",
        3: "Día 3: Tour completo (7:00 a.m. - 5:00 p.m.) con almuerzo."
    };
    alert(info[dia]);
}

function calcularViaje() {
    const p = document.getElementById('personas').value;
    const d = document.getElementById('dias').value;
    document.getElementById('resultado').innerText = "Total: S/ " + (p * d * 250);
}
