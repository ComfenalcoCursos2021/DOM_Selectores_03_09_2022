const peticion = new Worker('conponentes/template.js');
let div = document.querySelector("#plantilla");

peticion.postMessage({componente: "Myhtml", style: "caja", html: "caja"});
peticion.postMessage({componente: "Mytitulo", style: "titulo", html: "titulo"});
peticion.addEventListener("message", (e)=>{
    switch (e.data.componente) {
        case "Myhtml":
            div.insertAdjacentHTML("beforeend", `
                ${e.data.style}
                ${e.data.html}
            `);
            break;
        case "Mytitulo":
            div.insertAdjacentHTML("beforeend", `
                ${e.data.style}
                ${e.data.html}
            `);
            break;
        default:
            console.log(e.data);
            break;
    }
})


