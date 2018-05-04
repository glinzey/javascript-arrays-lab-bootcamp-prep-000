const app = "I don't do much."
function destructivelyAppendKitten(Ralph){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(Ralph){
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift("Ralph")
  return kittens
}