function updateRecords(records, id, prop, value) {
    if(value === ''){
      delete records[id][prop]
    }else if(prop !== "tracks" && value !== ""){
        records[id][props] = value
    }else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }records[id][records].push(value)

  return records;
}
}

function updateRecords(records, id, prop, value) {
  if(value === ""){
    delete [id][prop]
  }else if(prop !== "tracks" && value !== ""){
    records[id][prop] = value
  }else if(prop === "tracks" && value !== ""){
    if(records[id].hasOwnProperty("tracks") === false){
      records[id][prop] = []
    }records[id][prop].push(value)
  }
  return records;
}