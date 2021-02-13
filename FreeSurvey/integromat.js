let answers = {
    "_id": "1612960251721x455925381705236500",
    "Created By": "1612960115721x501419032080082000",
    "Created Date": "2021-02-10T12:30:52.026Z",
    "Modified Date": "2021-02-10T12:30:52.073Z",
    "A111": "Rarely",
    "A116": "Sometimes",
    "A122": "Rarely",
    "A125": "Sometimes",
    "A132": "Sometimes",
    "A134": "Sometimes",
    "A141": "Sometimes",
    "A145": "Sometimes",
    "A153": "Sometimes",
    "A155": "Sometimes",
    "A161": "Sometimes",
    "A165": "Sometimes",
    "_type": "custom.respondent"
}




let keys = Object.keys(answers)
keys.sort(function(a, b) {
    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  let result = {

    "values":[
        [],
        []
    ]
  }
keys.forEach(item=>{


result.values[0].push(item)
result.values[1].push(answers[item])

})

console.log(JSON.stringify(result))