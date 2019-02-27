import {JSDOM} from 'jsdom';
import fs = require('fs');

export class App{
    private _logger = console;

    public log(message: string){
        this._logger.log(message);
    }

    public findDivTag(){
        let htmlContent = fs.readFileSync('names.html','utf8');
        let dom = new JSDOM(htmlContent);
        this._logger.log(dom.window.document.querySelector("#me").textContent);
    }
};


let main: App = new App();
main.log('This is your app too.');
main.findDivTag();

