function ghostBusters(building){
  if (building.includes(' ')) {
    return building.split('').join('')
  } else {
    return('You just wanted my autograph')
  }
}