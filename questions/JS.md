# Javascript

    TC39
        - Its a comitte that manages JS
        - All proposals pass to five-stage process
    
    Backwards compatibilty
        -  The code is accepted allways for the old browsers
    
    Transpiling
        - Covert the new source code to old versions, Babel, TypeScript
    
    Polyfill
        - Provide a definition of a new API in old environment, example polyfill for Intersection Observer
    
    Strict Mode
        - ES5 added strict mode, to avoid errors, example avoid to name two functions equal
    
    Let / Var / Const
        - Let "block scoping", prevent overlap names
		- Var is global, can be access in anywhere
		- Const it's similar to let, but at the moment is created, cannot be re-assigned

    Functions
        - Declaration: it's not a expression, it's in compile before code run
		- Expresion: it's not asociated only in runtime
		
        FirstClass values, can be assigned and passed around to params
    
    Comparisons
		- Triple equals === strict equality operator

    Coercion
	    - Converts one value to respective representation of annother type, if its posible 42 == '42' //true
    
    Classes
        - The term is the object oriented, type of custom data structure. An instance of a class
    
    Modules
		- Group data and behavior together into logical units
		- AMD (Asynchronous Module Definition)
		- UMD (Universal Module Definition)
		- CommonJS (classic Node.js-style modules)
    
    ES Modules
		- Is introduced to the js language in ES6, are singletons

    Iterator
		- Similar to SQL with a cursor
		- Javascript defined a data structure called an "iterator" with expose the method next()
		it has a property value and done, done it's a boolean when is true its finished

    Closure
		- Is when a function remember and continues to access variables from outside its scope
    
    This
		- Its a special identifier keyword that define the scope of a every function

	Proptotypes
		- Create an object without proptypes Object.create(null)
    
    Hoisting
		- When all variables declared anywhere in a scope are treated as if declared at the beginning

    Web Workers
		- Allows to run a js file in other thread, not the current main
		- Havent access to DOM    
    
    Concurrency
		- Concurrency is when two or more "processes" are executing simultaneously over the same period

	Map vs Object

		- Map is a type of object holds key/value pairs is introduced in ES6
		- Is distinct to an object
			- The Map not store keys default, for example an object has the keys of the prototype
			- The Map support the key can be functions, objects, an object only strings or numbers
			- The Map has size property
			- The Map is iterable with "for of"

    Set
		- Set is an object can be store uniques values 
    
    Promise
		- Is a object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
		
        - States: pending, fulfilled, rejected
		- Methods 
			then: access to the value
			catch: handle errors

		- Promise.resolve : Returns a new Promise object that is resolved with the given value.
		- Promise.reject: Returns a new Promise object that is rejected with the given reason.
		- Promise.all: Wait for all promises to be resolved, or for any to be rejected.

    RequestAnimationFrame

     - The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the 
     browser calls a specified function to update an animation before the next repaint

    JSON 
		- (JavaScript Object Notation) is a lightweight format that is used for data interchanging. 
		It is based on a subset of JavaScript language

	    Are Javascript objects and JSON equivalent?

		No, JSON is only key value pairs, no have methods, comments...
