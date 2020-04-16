const blessed = require('blessed');
const ApplicationData = require('./ApplicationData');

class Application extends ApplicationData {
    constructor(title) {
        super();
        this.screen = this.createScreen(title);
    }

    createScreen(title) {
        const screen = blessed.screen({
            smartCSR: true
        });
        screen.title = title;
        screen.key(['escape', 'q', 'C-c'], (ch, key) => process.exit(0));
        return screen;
    }

    appendToScreen(box) {
        this.screen.append(box);
    }

    renderScreen() {
        this.screen.render();
    }
}

module.exports = Application;