const app = "I don't do much."
function destructivelyAppendKitten(Ralph){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(Bob){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
  return kittens
}
function appendKitten(){
  kittens = ["Milo", "Otis", "Garfield"]
  return [""]
}