class Pregu {
    constructor(type, id, pregunta, r1, r2, r3, r4, valorreturn, cq) {
        this.id = id;
        this.type = type;
        this.r1 = r1;
        this.r2 = r2;
        this.r3 = r3;
        this.r4 = r4;
        this.valorreturn = valorreturn
        this.cq = cq;
        this.pregunta = pregunta;
        // this.tesq = [
        //     { type: 'return', id: this.id, pregunta: "1 + 1", r1: 1, r2: 2, r3: 11, r4: 0, cq: "r2" }

        // 

        // this.css = [
        //     { id: 1, pregunta: "2 + 1", r1: 1, r2: 2, r3: 3, r4: 0, cq: "r3" }

        // ]
        this.idlist = [];
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
            }, {
                type: 'return', id: 6, pregunta: ` let a = [1,2,3]" ${`<br>`} b = a[2] + a ${`<br>`}   `, valorreturn: 'Que valor tiene b', r1: 'a[2][1,2,3]', r2: '31,2,3', r3: '3,1,2,3', r4: '3 [1,2,3]', cq: "r2"
            }, {
                type: 'return', id: 7, pregunta: ` let u = ['abc','def'] " ${`<br>`} u = u[1] += u[0]; ${`<br>`}   `, valorreturn: 'Que valor tiene u', r1: 'abcdef', r2: "defabcdef", r3: '["abc", "defabc"]', r4: "defabc", cq: "r4"
            }, {
                type: 'return', id: 8, pregunta: ` let str = "Daniel!"; " ${`<br>`}let  res = str[3+1].toUpperCase(); ${`<br>`}   `, valorreturn: 'Que vale STR', r1: 'e', r2: "i", r3: 'l', r4: "E", cq: "r1"
            }, {
                type: 'return', id: 9, pregunta: `var str= ["a", "b", "c", "d", "e"]; ${`<br>`}var mod = str.slice(1, 3-1);${`<br>`}   `, valorreturn: 'Que vale STR', r1: 'c', r2: "b", r3: 'd', r4: "e", cq: "r2"
            }, {
                type: 'return', id: 10, pregunta: `var str= [["a", "b"],['1','2']]; ${`<br>`}var mod = str.slice(1, 1);${`<br>`}   `, valorreturn: 'Que vale mod', r1: '[["1"]]', r2: '[["1", "2"]]', r3: '[]', r4: "a", cq: "r3"
            },


        ]



        this.res = this.js.sort(function () {
            return 0.5 - Math.random();
        });

        this.incremento = 0;

    }

    getquestion() {



        let valores = this.res.slice(this.js, 100)


        this.type = valores[this.incremento].type;
        this.pregunta = valores[this.incremento].pregunta
        this.r1 = valores[this.incremento].r1
        this.r2 = valores[this.incremento].r2
        this.r3 = valores[this.incremento].r3
        this.r4 = valores[this.incremento].r4

        this.id = valores[this.incremento].d;
        this.cq = valores[this.incremento].cq
        this.valorreturn = valores[this.incremento].valorreturn
        console.log(valores)
        console.log(valores[this.incremento].pregunta);

        // this.idlist.push(this.js[this.random].id)


        this.incremento++;



        // Sconsole.log(this.idlist[0])




    }


}
