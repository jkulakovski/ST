class Kingdom {
	constructor(kingdomName,isAutotoph,isSimple) {
		this._kingdomName = kingdomName;
		this._isAutotoph = isAutotoph;
		this._isSimple = isSimple;
	}
	
	getKingdom() {
		return this._kingdomName;
	}
	
	getInfo() {
		return {
			kingdomName:this._kingdomName,
			isAutotoph:this._isAutotoph,
			isSimple:this._isSimple
		}
	}
}

class Class extends Kingdom {
	constructor(className,kingdomName,isAutotoph,isSimple) {
		super(kingdomName,isAutotoph,isSimple)
		this._className = className;
	}
	
	getClass() {
		return this._className;
	}
	
	getInfo() {
		return {
			kingdomName:this.getKingdom(),
			classname: this.getClass(),
			isAutotoph: this._isAutotoph,
			isSimple: this._isSimple
		}
	}
}

class Species extends Class {
	constructor (speciesName,areal,lifespan,isPredator,className,kingdomName,isAutotoph,isSimple) {
		super(className,kingdomName,isAutotoph,isSimple);
		this._speciesName = speciesName;
		this._areal = areal;
		this._lifespan = lifespan;
		this._isPredator = isPredator;
	}
	
	getSpecies() {
		return this._speciesName;
	}
	
	getInfo() {
		return {
			kingdomName: this._kingdomName,
			className: this._className,
			speciesName: this._speciesName,
			areal: this._areal,
			lifespan: this._lifespan,
			isPredator: this._isPredator,
			isAutotoph: this._isAutotoph,
			isSimple: this._isSimple
		}
	}
	
	setLifespan(val) {
		this._lifespan = val;
	}
	
	getLifespan() {
		return this._lifespan;
	}
}
var dog = new Kingdom('Dog', true, false);
console.log(dog.getInfo());

var cat = new Class('Cat','Mammals', true, false);
console.log(cat.getInfo());

var myDog = new Species('Dog','Mammals','Aira','My home', 100, false, true, false);
console.log(myDog.getInfo());
