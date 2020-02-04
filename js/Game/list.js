class Pregu {
    constructor() {

        this.tesq = [
            { id: 1, pregunta: "1 + 1", r1: 1, r2: 2, r3: 11, r4: 0, cq: "r2" }

        ]

        this.css = [
            { id: 1, pregunta: "2 + 1", r1: 1, r2: 2, r3: 3, r4: 0, cq: "r3" }

        ]
        this.js = [
            { type: 'return', id: 1, pregunta: `if(!true){  ${`<br>`} return ?${`<br>`}}`, valorreturn: 'Que valor tiene ?', r1: 'true', r2: 'false', r3: 'undefined', r4: 'null', cq: "r2" },
            { type: 'return', id: 1, pregunta: `if(true){  ${`<br>`} return ?${`<br>`}}`, valorreturn: 'Que valor tiene ?', r1: 'true', r2: 'false', r3: 'undefined', r4: 'null', cq: "r1" },


        ]
        this.html = [
            { id: 1, pregunta: "20 + 1", r1: 221, r2: 21, r3: 3, r4: 12, cq: "r2" }

        ]
    }

    getquestion(type) {
        if (type == "css") {
            return this.js[Math.floor(Math.random() * this.js.length - 1) + 1];
        } else if (type == "html") {
            return this.js[Math.floor(Math.random() * this.js.length - 1) + 1];
        } else if (type == "js") {
            return this.js[Math.floor(Math.random() * this.js.length - 1) + 1];
        }


    }

}
