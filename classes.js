class Triangle{
	constructor(height,base){
		this.height = height;
		this.base = base;
	}


	calcArea(){
		return 0.5*(this.height*this.base)
	}
}

const triangle = Triangle(12,30)
console.log(triangle.calcArea());