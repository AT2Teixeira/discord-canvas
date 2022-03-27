const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "Olá";
        this.textMessage = "Bem Vindo(a) ao {server}";
        this.colorTitle = "#e403f4";
    }
};
