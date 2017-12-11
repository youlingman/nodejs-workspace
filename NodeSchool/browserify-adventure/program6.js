let setName = (str) => this.elem.querySelector('.name').textContent = str;

let appendTo = (target) => target.appendChild(this.elem);

let buildElem = (html) => {
    let elem = document.createElement('div');
    elem.innerHTML = html;
    return elem;
};

module.exports = function () {
    return {
        elem: buildElem('Hello <span class=\"name\"></span>!'),
        setName: setName,
        appendTo: appendTo
    }
};