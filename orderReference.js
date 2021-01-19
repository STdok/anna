let companyNumber = 'STE-04_'

let pad = '0000'

let teamNumber = '1'

let regex = new RegExp('.{4}$')

let concat = pad + teamNumber

let result = companyNumber + concat.match(regex)[0]

result