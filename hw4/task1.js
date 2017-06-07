function Kingdom (kingdomName,isAutotoph,isSimple) {
	this._kingdomName = kingdomName;
	this._isAutotoph = isAutotoph;
	this._isSimple = isSimple;
	
	this.getKingdom = function () {
		return this._kingdomName;
	}
	
	this.getInfo = function () {
		return {
			kingdomName:this._kingdomName,
			isAutotoph:this._isAutotoph,
			isSimple:this._isSimple
		}
	}
}

function Class (className,kingdomName,isAutotoph,isSimple) {
	Kingdom.call(this,kingdomName, isAutotoph, isSimple);
	this._className = className;
	
	this.getClass = function () {
		return this._className;
	}
	
	this.getInfo = function () {
		return {
			kingdomName:this.getKingdom(),
			classname: this.getClass(),
			isAutotoph: this._isAutotoph,
			isSimple: this._isSimple
		}
	}
}

function Species (speciesName,areal,lifespan,isPredator,className,kingdomName,isAutotoph,isSimple) {
	Class.call(this, className, kingdomName, isAutotoph, isSimple);
	this._speciesName = speciesName;
	this._areal = areal;
	this._lifespan = lifespan;
	this._isPredator = isPredator;
	
	this.getSpecies = function () {
		return this._speciesName;
	}
	
	this.getInfo = function () {
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
	
	this.setLifespan = function (val) {
		this._lifespan = val;
	}
	
	this.getLifespan = function () {
		return this._lifespan;
	}
}

var dog = new Kingdom('Dog', true, false);
console.log(dog.getInfo());

var cat = new Class('Cat','Mammals', true, false);
console.log(cat.getInfo());

var myDog = new Species('Dog','Mammals','Aira','My home', 100, false, true, false);
console.log(myDog.getInfo());
