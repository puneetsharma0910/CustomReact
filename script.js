const mainContainer = document.querySelector('#root');

const reactElement  = {
    type : 'a',
    props : {
        href : "https://www.google.com",
        target : "_blank",
    },
    children : "click here to google"
}

renderIt(reactElement, mainContainer);

function renderIt(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]); // ✅ Fix
    }

    mainContainer.appendChild(domElement);
}
