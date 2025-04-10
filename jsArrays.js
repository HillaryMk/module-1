// const names = []  /// array declaration

let names = ['Hilary','Rhema','Mary']  /// array initializing with 3 names


 const numberOfNames = names.length   // 3 

 let firstNameInNamesArray = names[0]   // "Hilary"
 let lastNameInNamesArray = names[names.length-1] // "mary"
///Assign at a position 

        names[2] = ""  /// this works but the length of the array may remain unchanged so this is not a conventional way to delete elements
        let snames1 = ["Hilary","Rhema"]
        names = snames




 //// Array Manipulation /////
   let snames2 =  names.slice(0,1)

   names =snames2

   names = names.filter(item => item !=='Mary') // returns an array of all elments which are not mary-['Hilary','Rhema']
  // names = names.filter(item => item ==='Mary') // returns an array of all elments which are mary -['Mary']



 
//  [0,1,2] length =3   lastPosition = length -1 = lastposition
//[0,1] length = 2


//Assignment

// X2O ==> XXO
// X1O2A ===> XOO - A= Change the first O to X  second result = XXO or XOX