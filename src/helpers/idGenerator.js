
const IdKey = "id_generator";

export function getNextId() {
  let item = localStorage.getItem(IdKey);
  if (!item){
    item = 1234;
    localStorage.setItem(IdKey, item.toString());
    return item;
  }
  let nextInt = parseInt(item);
  nextInt++;
  localStorage.setItem(IdKey,nextInt.toString())
  return nextInt;
}