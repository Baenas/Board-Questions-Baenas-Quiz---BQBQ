class Pregu {
    constructor(type, id, preguntagen, r1, r2, r3, r4, valorreturn, cq) {
        this.id = id;
        this.type = type;
        this.r1 = r1;
        this.r2 = r2;
        this.r3 = r3;
        this.r4 = r4;
        this.valorreturn = valorreturn
        this.cq = cq;
        this.preguntagen = preguntagen;
        // this.tesq = [
        //     { type: 'return', id: this.id, pregunta: "1 + 1", r1: 1, r2: 2, r3: 11, r4: 0, cq: "r2" }

        // 

        // this.css = [
        //     { id: 1, pregunta: "2 + 1", r1: 1, r2: 2, r3: 3, r4: 0, cq: "r3" }

        // ]
        this.js = [
            {
                type: 'return', id: 1, pregunta: `if(a = undefined){  ${`<br>`} return a${`<br>`}}`, valorreturn: 'Que valor tiene a', r1: 'true', r2: 'false', r3: 'undefined', r4: 'null', cq: "r3"
            },
            {
                type: 'return', id: 2, pregunta: `if(a = true){  ${`<br>`} return a${`<br>`}}`, valorreturn: 'Que valor tiene a', r1: 'true', r2: 'false', r3: 'undefined', r4: 'null', cq: "r1"
            },
            {
                type: 'return', id: 3, pregunta: ` let a= 1 ${`<br>`} a.innerHTML = 2 ${`<br>`}}`, valorreturn: 'Que valor tiene a', r1: '1', r2: '2', r3: 'null', r4: 'undefined', cq: "r1"
            },
            {
                type: 'return', id: 4, pregunta: ` let a = 10 ${`<br>`} a.innerHTML += 2; ${`<br>`} a --  ${`<br>`}  console.log(a)}`, valorreturn: 'Que valor tiene a', r1: '9', r2: '0', r3: '10', r4: '2', cq: "r1"
            },
            {
                type: 'return', id: 5, pregunta: ` let name = "Daniel" ${`<br>`} name++ ${`<br>`}   `, valorreturn: 'Que valor tiene name', r1: 'Daniel1', r2: 'DanielDaniel', r3: 'NaN', r4: 'null', cq: "r3"
            },


        ]




    }

    getquestion(type) {
        this.random = Math.floor(Math.random() * this.js.length);
        this.type = this.js[this.random].type
        this.pregunta = this.js[this.random].pregunta
        this.r1 = this.js[this.random].r1
        this.r2 = this.js[this.random].r2
        this.r3 = this.js[this.random].r3
        this.r4 = this.js[this.random].r4

        this.cq = this.js[this.random].cq
        this.valorreturn = this.js[this.random].valorreturn
        console.log(this.js[this.random])






    }


}
