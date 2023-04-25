// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise
const checkIfPropertyExistsAndTruthy = (a, b) => {
   
    return a.hasOwnProperty(b) && Boolean(a[b]);
    
    
  };
  console.log(checkIfPropertyExistsAndTruthy({a:1,b:2,c:3},'b'));
  /*
  Test cases:
  myFunction({a:1,b:2,c:3},'b') Expected true
  myFunction({x:'a',y:null,z:'c'},'y') Expected false
  myFunction({x:'a',b:'b',z:undefined},'z') Expected false
  */
  
  // ========================================
  
  // Write a function that takes an object with two properties as argument
  // It should return the value of the property with key country
  const getCountry = (obj) => {
    return obj.country;
  };
  console.log(getCountry({ continent: 'Asia', country: 'Japan' }));
  /*
  Test cases:
  myFunction({ continent: 'Asia', country: 'Japan' }) Expected 'Japan'
  myFunction({ country: 'Sweden', continent: 'Europe' }) Expected 'Sweden'
  */
  
  // ========================================
  
  // Write a function that takes an object with two properties as argument
  // It should return the value of the property with key 'prop-2'
  // Tip: you might want to use the square brackets to access the property
  const getWeirdKeyValue = (obj) => {
    return obj["prop-2"];
  };

  console.log(getWeirdKeyValue({  one: 1,  'prop-2': 2}));
  
  /*
  Test cases:
  myFunction({  one: 1,  'prop-2': 2}) Expected 2
  myFunction({  'prop-2': 'two',  prop: 'test'}) Expected 'two'
  */
  
  // ========================================
  
  // Write a function that takes an object with two properties and a string as arguments
  // It should return the value of the property with key equal to the value of the string
  const getPropertyByString = (obj, key) => {
    return obj[key];
  };
  console.log(getPropertyByString({  continent: 'Asia',  country: 'Japan'}, 'continent'));
  /*
  Test cases:
  myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent') Expected 'Asia'
  myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country') Expected 'Sweden'
  */
  
  // ========================================
  
  // Write a function that takes an object (a) and a string (b) as argument
  // Return true if the object has a property with key 'b'
  // Return false otherwise
  // NOTE: Test case 3 is a bit tricky because the value of property 'z' is undefined, but the property itself exists
  const checkIfPropertyExists = (a, b) => {
    return a.hasOwnProperty(b);
  };

  console.log(checkIfPropertyExists({a:1,b:2,c:3},"b"));
  
  /*
  Test cases:
  myFunction({a:1,b:2,c:3},'b') Expected true
  myFunction({x:'a',y:'b',z:'c'},'a') Expected false
  myFunction({x:'a',y:'b',z:undefined},'z') Expected true
  */
  
  // ========================================
  
  // Write a function that takes a string as argument
  // Create an object that has a property with key 'key' and a value equal to the string
  // Return the object
  const createObjectWithKeyValue = (a) => {
    const obj = {key: a};
    return obj;

   
  };

  console.log(createObjectWithKeyValue("a"));
  
  /*
  Test cases:
  myFunction('a') Expected {key:'a'}
  myFunction('z') Expected {key:'z'}
  myFunction('b') Expected {key:'b'}
  */
  
  // ========================================
  
  // Write a function that takes two strings (a and b) as arguments
  // Create an object that has a property with key 'a' and a value of 'b'
  // Return the object
  const createObjectWithKeyAndValue = (a, b) => {
    const obj = {};
    obj[a] = b;
    return obj;
  };
  
  console.log(createObjectWithKeyAndValue(('a','b')));
  
  /*
  Test cases:
  myFunction('a','b') Expected {a:'b'}
  myFunction('z','x') Expected {z:'x'}
  myFunction('b','w') Expected {b:'w'}
  */
  
  // ========================================
  
  // Write a function that takes two arrays (a and b) as arguments
  // Create an object that has properties with keys 'a' and corresponding values 'b'
  // Return the object
  const createObjectFromArrays = (a, b) => {
  obj ={};
  for(let i; i< a.lenght; i++){
    obj[a[i]] = b[i];
  }
  return obj;
  }
  
  
  
  console.log(createObjectFromArrays(['a','b','c'],[1,2,3])); 
  /*
  Test cases:
  myFunction(['a','b','c'],[1,2,3]) Expected {a:1,b:2,c:3}
  myFunction(['w','x','y','z'],[10,9,5,2]) Expected {w:10,x:9,y:5,z:2}
  myFunction([1,'b'],['a',2]) Expected {1:'a',b:2}
  */
  
  // ========================================
  // Write a function that takes an object (a) as argument
  // Return an array with all object keys
  // Tip: Object.keys()
  const extractKeysFromObject = (a) => {
    return Object.keys(a);
  };

  console.log(extractKeysFromObject({a:1,b:2,c:3}));
  
  /*
  Test cases:
  myFunction({a:1,b:2,c:3}) Expected ['a','b','c']
  myFunction({j:9,i:2,x:3,z:4}) Expected ['j','i','x','z']
  myFunction({w:15,x:22,y:13}) Expected ['w','x','y']
  */
  
  // ========================================
  // Write a function that takes an object as argument
  // In some cases the object contains other objects with some deeply nested properties
  // Return the property 'b' of object 'a' inside the original object if it exists
  // If not, return undefined
  const getNestedProperty = (obj) => {
    if (obj && obj.b) {
        return obj.b;
      }
      return undefined;
    };
  console.log(getNestedProperty({b:{a:1}}));
  
  /*
  Test cases:
  myFunction({a:1}) Expected undefined
  myFunction({a:{b:{c:3}}}) Expected {c:3}
  myFunction({b:{a:1}}) Expected undefined
  myFunction({a:{b:2}}) Expected 2
  */
  
  // ========================================
  // Write a function that takes an object (a) as argument
  // Return the sum of all object values
  // Tip: Object.values()
  const calcSumOfAllObjectValues = (a) => {
    const valuesArray = Object.values(a);
    const sum = valuesArray.reduce((acc, val) => acc + val, 0);
    return sum;
  };
  
  console.log(calcSumOfAllObjectValues({a:1, b:2, c:3}))
  /*
  Test cases:
  myFunction({a:1,b:2,c:3}) Expected 6
  myFunction({j:9,i:2,x:3,z:4}) Expected 18
  myFunction({w:15,x:22,y:13}) Expected 50
  */
  // ========================================
  
  // Write a function that takes an object as argument
  // It should return an object with all original object properties
  // except for the property with key 'b'
  // Tip: Spread syntax
  const removePropertyB = (obj) => {
    
        const { b, ...rest } = obj;
        return rest;
      };
    
      
      console.log(removePropertyB({a:1, b:2, c:3}));
  /*
  Test cases:
  myFunction({ a: 1, b: 7, c: 3 }) Expected { a: 1, c: 3 }
  myFunction({ b: 0, a: 7, d: 8 }) Expected { a: 7, d: 8 }
  myFunction({ e: 6, f: 4, b: 5, a: 3 }) Expected { e: 6, f: 4, a: 3 }
  */
  
  // ========================================
  
  // Write a function that takes two objects as arguments
  // Unfortunately, the property 'b' in the second object has the wrong key
  // It should be named 'd' instead
  // Merge both objects and correct the wrong property name
  // Return the resulting object
  // It should have the properties 'a', 'b', 'c', 'd', and 'e'
  // Tip: Spread syntax
  const mergeAndFixObjects = (x, y) => {
  
    const merged = { ...x, ...y, d: y.b };
    return merged;
  };
  
  console.log(mergeAndFixObjects({a:1, b:2, c:3}, {d:4, e:5, b:6})); 
  /*
  Test cases:
  myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }) Expected { a: 1, b: 2, c: 3, e: 5, d: 4}
  myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }) Expected { a: 5, b: 4, c: 3, e: 2, d: 1}
  */
  
  // ========================================
  
  // Write a function that takes an object (a) and a number (b) as arguments
  // Multiply all values of 'a' by 'b'
  // Return the resulting object
  const multipyAllValuesByB = (a, b) => {
    const entries = Object.entries(a);
    const updatedEntries = entries.map(([key, value]) => [key, value * b]);
    const updatedObject = Object.fromEntries(updatedEntries);
    return updatedObject;
  };
  
  console.log(multipyAllValuesByB({a:1, b:2, c:3}, 5)); 
  
  /*
  Test cases:
  myFunction({a:1,b:2,c:3},3) Expected {a:3,b:6,c:9}
  myFunction({j:9,i:2,x:3,z:4},10) Expected {j:90,i:20,x:30,z:40}
  myFunction({w:15,x:22,y:13},6) Expected {w:90,x:132,y:78}
  */