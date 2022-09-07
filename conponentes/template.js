
let Componente = async(componente, style, html)=>{
    let Style = await fetch(`${style}.css`);
    let myStyle = await Style.text();
    let HTML = await fetch(`${html}.html`);
    let myHTML = await HTML.text();
    return {componente: componente, style: `<style>${myStyle}</style>`, html: myHTML};
}
addEventListener("message", async(e)=>{
    postMessage(await Componente(e.data.componente, e.data.style, e.data.html));
})

