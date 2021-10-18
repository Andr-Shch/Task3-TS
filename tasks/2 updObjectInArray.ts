//task 2 

//Function 
function  updateObjectInArray<T>(
    initialArray: Array<T>, 
    keyToFind: keyof T, 
    keyValueToFind: T[typeof keyToFind],
    patch: T[typeof keyToFind])  {
    return  initialArray.map(el => (el[keyToFind] === keyValueToFind ? {...el, [keyToFind]:patch} : el));
  }

 /// Test
 let arr = [{id:1, name:'ddd'}, {id:2, name:'2ddd'}]

 type Obc = {
     id:number;
     name:string
 }
 console.log( updateObjectInArray<Obc>(arr, 'id', 2, 3)) // log {id:1, name:'ddd'}, {id:3, name:'2ddd'}
 