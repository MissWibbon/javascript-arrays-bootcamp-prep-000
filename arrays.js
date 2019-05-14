<<<<<<< HEAD
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
=======
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginngOfArray(array, element) {
>>>>>>> 95717d094f4f3b8bdaa448be75b884d7119c73ed
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element) 
  return array
}
function addElementToEndOfArray(array, element){
  return [...array, element]
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
<<<<<<< HEAD
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
=======
function destructivelyRemoveElementFromBeginningOfArray(){
  return array.shift()
>>>>>>> 95717d094f4f3b8bdaa448be75b884d7119c73ed
}
function accessElementInArray(array, index){
  return array[index]
}
function removeElementFromBeginningOfArray(array){
<<<<<<< HEAD
  return array.slice(1)
=======
  return array.shift()
>>>>>>> 95717d094f4f3b8bdaa448be75b884d7119c73ed
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}