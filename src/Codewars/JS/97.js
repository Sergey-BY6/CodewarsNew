function findShort(s){
  return  Math.min (...(s.split(" ").map(m =>m.length)) )
}