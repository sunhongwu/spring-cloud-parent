//这样定义的是object类的实例
var obj = {
	property:'This is a property',
	method:function(){
		return 'I am a method';
	},
	toString:function(){
		return 'I am a object';
	}
};

//自定义类,定义类就是定义类的构造函数，定义实例变量前面要加this.。
//js中，函数也算是一个对象，所有也有自己的属性和方法
function Rectangle(width,height){
	this.width = width;
	this.height = height;
	//函数也是一个对象，可以传递，通过area()调用
	this.area = function(){
		return this.width * this.height;
	};
};

//js中，标准的面向对象定义方法
function Rectangle(width,height){
	this.width = width;
	this.height = height;
	//prototype属性是原型属性，每个定义好的构造函数都会指派一个prototype属性，
	//每一个创建好的对象都会有一个prototype属性指向构造函数的prototype属性，
	//所以prototype属性适合定义每个对象都用到的方法。这个方法是多个对象共有，
	//不是每个对象都有一个自己单独有用的实例，这样用以模拟面向对象的继承。
	//js引擎定位方法的顺序是现在实例中找，如果找不到再到实例的prototype属性中找。
	Rectangle.prototype.area = function(){
		return this.width * this.height;
	};
};

//创建对象
var rect = new Rectangle(1,2);

//定义类方法与类属性
function Person(){
	Person.id = 0;
	Person.createAccount = function(){
		Person.id++;
		return new Person();
	}
};
//使用类方法
var person = Person.createAccount();

//类的继承，js中只有类的单一继承，而继承也必须通过prototype属性来实现。
function Person(name,email){
	this.name = name;
	this.email = email;
};

Person.prototype.getInfo = function(){
		return '公共方法';
	};

function Employee(name,email,title){
	//此方法如同java super方法，必须执行this作用域（Employee的实例）
	Person.call(this,name,email);
	this.title = title;
};

//如果要继承person类，那子类的prototype必须指定为person实例。
//Employee的原型为Person
Employee.prototype = new Person();

//删除父类中的同名属性name
delete Employee.prototype.name;

//明确指明子类的构造函数
Employee.constructor = Employee;

//js的委托方式，就是把函数要完成的动作通过调用其他实例的函数属性来完成
function AbstractPerson(){
	
};
AbstractPerson.prototype.getAbs = function(){
	
};

function Employee(name,email){
	this.name = name;
	this.email = email;
	this.person = new AbstractPerson();
};

Employee.prototype.getEmpAbs = function(){
	return this.person.getAbs();
}

//extjs在面向对象方面的支持
//extends 扩展 如java中的extends
//apply/applyif  属性套用
//override 方法重写
//namespace/ns 命名空间

function Vehicle(){
	this.x = 0;
	this.y = 0;
};
Vehicle.prototype.move = function(dx,dy){
	this.x += dx;
	this.y += dy;
}
//方法覆盖,如果是属性覆盖，在子类中定义属性，并删除父类中同名属性即可
function Car(){
	Car.prototype = new Vehicle();
	Car.prototype.move = function(dx){
		this.x += dx;
	};
};
//属性覆盖
function Elevator(dz){
	Elevator.prototype = new Vehicle();
	Elevator.prototype.move = function(dy){
		this.y = dy;
	};
	this.y = dz;
	delete Elevator.prototype.y;
};

//========================EXT js实现同样的功能=================
function Vehicle(config){
	this.x = config.x;
	this.y = config.y;
};

Vehicle.prototype.move = function(dx,dy){
	this.x += dx;
	this.y += dy;
};

Vehicle.prototype.toString = function(){
	return this.x + this.y;
};

function Car(config){
	Vehicle.constructor.call(this,config);
	this.color = config.color;
};

//Car 继承 Vehicle 并重写move和toString方法
Ext.extend(Car,Vehicle,{
	move:function(dx){
		this.x += dx;
	},
	toString:function(){
		return this.color;
	}
});

//使用对象作为设置参数
var carConfig = {
	x:10,
	y:10,
	color:'white'
};

var car = new Car(carConfig);
car.move(150);
console.info(car.toString());

//更简单的直接产生重写的子类
function Vehicle(config){
	this.x = config.x;
	this.y = config.y;
};

Vehicle.prototype.move = function(dx,dy){
	this.x += dx;
	this.y += dy;
};

Vehicle.prototype.toString = function(){
	return this.x + this.y;
};

var Car = Ext.extend(Vehicle,{
	constructor:function(){
		Vehicle.constructor.call(this,config);
		this.color = config.color;
	},
	move:function(dx){
		this.x += dx;
	},
	toString:function(){
		return 'extend';
	}
});

//ext.apply(a,b，c) a是要替换的配置对象，b是替换的源数据，c是默认配置对象
//当c中的属性在a中有默认值的时候，直接忽略，c中有，a中没有的属性直接复制到a，
//a中有属性，没有默认值，c中有同属性并且有值，则值复制到a属性，a与b的处理方式是直接覆盖
//apply与applyif的不同是，有没有默认值都直接覆盖，并且apply有三个参数，支持默认。
//applyif(a,b,c)的处理顺序是：先applyif(a,c) 在apply(a,b).

//重写方法的使用，不是方法也可以重写，重写的是Car的prototype
Ext.override(Car,{
	move:function(){
		
	},
	aaa:'bbb'
});
var car = new Car();
car.move();



Ext.onReady(function(){
	Ext.getBody();
});


