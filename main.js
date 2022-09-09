let from = document.querySelector("#myFormulario");

from.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let fileJs = new Worker(`${from.action}`);
    fileJs.postMessage(data);
    fileJs.addEventListener("message", (event)=>{
        console.log(event.data);
        fileJs.terminate();
    }) 
});


