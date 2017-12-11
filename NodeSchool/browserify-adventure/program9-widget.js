var domify = require('domify');
var insertCss = require('insert-css');

const html = '<form class="send">\n' +
    '    <textarea type="text" name="msg"></textarea>\n' +
    '    <input type="submit" value="submit">\n' +
    '  </form>';

const css = '.send textarea {\n' +
    '    background-color: purple;\n' +
    '    color: yellow;\n' +
    '  }\n';

insertCss(css);

class Widget extends require('events').EventEmitter {
    constructor(html) {
        super();
        this.element = domify(html);
        let widget = this;
        this.element.addEventListener('submit', function (ev) {
            ev.preventDefault();
            var msg = this.querySelector('textarea[name="msg"]').value;
            widget.emit('message', msg);
        });
    }

    appendTo(target) {
        target.appendChild(this.element);
    }
}

module.exports = () => new Widget(html);