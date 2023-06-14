class SuperHero{
    constructor(name){
        this.name = name;
    }

    getname(){
        return this.name;
    }

    setname(name){
        this.name = name;
    }
}

module.exports = new SuperHero("Batman");