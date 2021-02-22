let options= {
    "Option Agreement":[
      
      "Strongly disagree",
      "Disagree",
      "Somewhat disagree",
      "Somewhat Agree",
      "Agree",
      "Strongly Agree"
      ],
    "Option Frequency":[
      "Hardly ever",
      "Rarely",
      "Sometimes",
      "Often",
      "Usually",
      "Almost Always"
      ],
      "Option Qualities":[
        
        "Aesthetic Appreciation",
        "Caring",
        "Creativity",
        "Critical Thinking",
        "Curiosity",
        "Fairness",
        "Forgiveness",
        "Gratitude",
        "Hope",
        "Humility",
        "Humor",
        "Kindness",
        "Leadership",
        "Love of Learning",
        "Perspective",
        "Prudence",
        "Self Regulation",
        "Spirituality",
        "Teamwork"
        ],
      "Option Scale":[
        "1",
        "2",
        "3",
        "4",
        "5"
        ]  
      
  }



  let answers = {
    "A211": "Hardly ever",
    "A212": "Rarely",
    "A213": "Sometimes",
    "A221": "Sometimes",
    "A222": "Rarely",
    "A223": "Hardly ever",
    "A231": "Often",
    "A232": "Usually",
    "A233": "Almost Always",
    "A241": "Sometimes",
    "A242": "Sometimes",
    "A243": "Sometimes",
    "A251": "Almost Always",
    "A252": "Usually",
    "A253": "Often",
    "A261": "Sometimes",
    "A262": "Sometimes",
    "A263": "Sometimes",
    "B111": "5",
    "B141": "5",
    "B121": "5",
    "B131": "5",
    "B151": "5",
    "A111": "Rarely",
    "A112": "Rarely",
    "A113": "Rarely",
    "A114": "Rarely",
    "A115": "Rarely",
    "A116": "Rarely",
    "A121": "Hardly ever",
    "A122": "Hardly ever",
    "A123": "Hardly ever",
    "A124": "Hardly ever",
    "A125": "Hardly ever",
    "A126": "Hardly ever",
    "A131": "Sometimes",
    "A132": "Sometimes",
    "A133": "Sometimes",
    "A134": "Sometimes",
    "A135": "Sometimes",
    "A136": "Sometimes",
    "A141": "Often",
    "A142": "Often",
    "A143": "Often",
    "A144": "Often",
    "A145": "Often",
    "A146": "Often",
    "A151": "Usually",
    "A152": "Usually",
    "A153": "Usually",
    "A154": "Usually",
    "A155": "Usually",
    "A156": "Usually",
    "A161": "Almost Always",
    "A162": "Almost Always",
    "A163": "Almost Always",
    "A164": "Almost Always",
    "A165": "Almost Always",
    "A166": "Almost Always",
    "B112": "5",
    "B122": "5",
    "B132": "5",
    "B142": "5",
    "B152": "5",
    "C111": "Strongly disagree",
    "C112": "Disagree",
    "C113": "Somewhat disagree",
    "C121": "Somewhat Agree",
    "C122": "Agree",
    "C123": "Agree",
    "C131": "Agree",
    "C132": "Agree",
    "C141": "Agree",
    "C142": "Agree",
    "C151": "Somewhat Agree",
    "C152": "Somewhat Agree",
    "C161": "Somewhat Agree",
    "C162": "Somewhat Agree",
    "D110": [
      "Caring",
      "Critical Thinking",
      "Fairness",
      "Gratitude",
      "Humility"
    ],
    "D120": [
      "Aesthetic Appreciation",
      "Creativity",
      "Curiosity",
      "Hope",
      "Forgiveness"
    ],
    "E111": "Strongly disagree",
    "E112": "Strongly disagree",
    "E113": "Strongly disagree",
    "E114": "Strongly disagree",
    "E115": "Strongly disagree",
    "E121": "Disagree",
    "E122": "Disagree",
    "E123": "Disagree",
    "E124": "Disagree",
    "E125": "Disagree",
    "E131": "Somewhat disagree",
    "E132": "Somewhat disagree",
    "E133": "Somewhat disagree",
    "E134": "Somewhat disagree",
    "E135": "Somewhat disagree",
    "F111": "Often",
    "F112": "Often",
    "F113": "Usually",
    "F121": "Often",
    "F122": "Often",
    "F123": "Usually",
    "F131": "Often",
    "F132": "Usually",
    "F133": "Usually"
   
  }


 function firstLetter(string,letter,letter2){
    if(string.substr(0,1)===letter||string.substr(0,1)===letter2){return true}
    else return false
 }

let keys = Object.keys(answers)

  function randomGen(answers,options){

    let result=answers.map(item=>{
        let random=options[Math.floor(Math.random() * options.length)]; 
        return {[item]:random}
    })

    return result
  }

function randomGen2(answers,options){
    
   let res=answers.map(item=>{ 
    let result=[]
    for (i=0;i<5;i++){
        result.push(options[Math.floor(Math.random() * options.length)])
    }
    return {[item]:result}
})
  return res
}
  let aggreement = keys.filter(item=>{return firstLetter(item,'C','E')})
  let frequency = keys.filter(item=>{return firstLetter(item,'A','F')})
  let qualities=['D110','D120']
  let scale=keys.filter(item=>{return firstLetter(item,'B')})




let resultAgg=randomGen(aggreement,options['Option Agreement'])
let resultF=randomGen(frequency,options['Option Frequency'])
let resultQ=randomGen2(qualities,options['Option Qualities'])
let resultS=randomGen(scale,options['Option Scale'])

let results=resultAgg.concat(resultF).concat(resultQ).concat(resultS)
//console.log(results)
let result=results.reduce(((r, c) => Object.assign(r, c)), {})


console.log(result)
console.log(Object.keys(result).length)

