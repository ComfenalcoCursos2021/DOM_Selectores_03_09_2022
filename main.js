

let myStyle = {
    width: "150px",
    height: "150px",
    background: "rebeccapurple",
    color: "white",
    "border-radius": "5px",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": "1.5rem",
    "text-decoration": "none"
}
function $(selector) {
    return document.querySelector(`a[title='${selector}']`);
}
function Compañia(callback, selector) {
    Object.assign(callback(selector).style, myStyle);
}

Compañia($,'PayPal');
Compañia($,'SolarCity');
Compañia($,'SpaceX');
Compañia($,'Forbes');