const request = {
    "response": {
        "cursor": 0,
        "results": [{
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
                "A242": "Often",
                "A243": "Sometimes",
                "A251": "Almost Always",
                "A252": "Usually",
                "A253": "Often",
                "A261": "Often",
                "A262": "Sometimes",
                "A263": "Often",
                "Created Date": "2020-11-04T09:01:22.233Z",
                "Created By": "1604412649029x786859966463393400",
                "Modified Date": "2020-11-04T12:41:17.526Z",
                "B111": "5",
                "B141": "5",
                "B121": "5",
                "B131": "5",
                "B151": "5",
                "A111": "Hardly ever",
                "A112": "Hardly ever",
                "A113": "Hardly ever",
                "A114": "Hardly ever",
                "A115": "Hardly ever",
                "A116": "Hardly ever",
                "A121": "Rarely",
                "A122": "Rarely",
                "A123": "Rarely",
                "A124": "Rarely",
                "A125": "Rarely",
                "A126": "Rarely",
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
                "B112": "0",
                "B122": "0",
                "B132": "0",
                "B142": "0",
                "B152": "0",
                "C111": "Strongly Agree",
                "C112": "Strongly disagree",
                "C113": "Strongly Agree",
                "C121": "Strongly disagree",
                "C122": "Strongly Agree",
                "C123": "Strongly disagree",
                "C131": "Strongly Agree",
                "C132": "Strongly disagree",
                "C141": "Strongly Agree",
                "C142": "Strongly disagree",
                "C151": "Disagree",
                "C152": "Agree",
                "C161": "Disagree",
                "C162": "Agree",
                "D110": [
                    "Aesthetic Appreciation",
                    "Creativity",
                    "Curiosity",
                    "Forgiveness",
                    "Hope",
                    "Humor",
                    "Leadership",
                    "Perspective",
                    "Self Regulation",
                    "Spirituality"
                ],
                "D120": [
                    "Caring",
                    "Critical Thinking",
                    "Fairness",
                    "Gratitude",
                    "Humility",
                    "Kindness",
                    "Love of Learning",
                    "Prudence",
                    "Social Intelligence",
                    "Teamwork"
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
                "F133": "Usually",
                "_id": "1604480481819x613790281029386200",
                "_type": "custom.respondent"
            },
            {
                "Created Date": "2020-11-04T09:02:40.448Z",
                "Created By": "1604412649029x786859966463393400",
                "Modified Date": "2020-11-04T10:54:13.888Z",
                "D110": [
                    "Aesthetic Appreciation",
                    "Creativity",
                    "Forgiveness",
                    "Gratitude",
                    "Curiosity",
                    "Fairness",
                    "Caring",
                    "Critical Thinking"
                ],
                "D120": [
                    "Hope",
                    "Humility",
                    "Humor",
                    "Creativity"
                ],
                "_id": "1604480560276x651851182423670800",
                "_type": "custom.respondent"
            }
        ],
        "remaining": 0,
        "count": 2
    }
}

const data = request.response.results
console.log(data)




console.log(data[0].B111)

function getData(data, objects) {
    let result = []

    objects.forEach(element => {

        result.push(result)
    });

    console.log(result)
}


const congruence = ["B111",
    "B121",
    "B131",
    "B141",
    "B151",
    "B112",
    "B122",
    "B132",
    "B142",
    "B152"
]