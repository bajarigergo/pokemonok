export default class Pokemon{

    #nev=""
    #kep=""
    #mondat=""
    constructor(nev, kep, mondat, szuloELEM){
        this.#nev = nev
        this.#kep = kep
        this.#mondat = mondat
        this.szuloELEM = szuloELEM
        this.#megjelenit()
    }
    get nev(){
        return this.#nev
    }
    set mondat(szoveg){
        this.#mondat=szoveg
    }
    beszel(){
        console.log(this.#mondat);
    }
    #htmlOsszeallit(){
        let txt=`
        <div class="pokemon">
                <h3>${this.#nev}</h3>
                <img src="${this.#kep}" alt="${this.#nev} pokemon">
                </div>`
                return txt
    }
    #megjelenit(){
        this.szuloELEM.append(this.#htmlOsszeallit())
    }
}