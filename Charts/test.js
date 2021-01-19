const data = {
    "SPIRITUALITY": {
        label: "SPIRITUALITY"
    },
    "APPRECIATION OF AESTHETICS & EXCELLENCE": {},
    "SOCIAL INTELLIGENCE": {},
    "CARING": {},
    "SELF REGULATION": {},
    "CREATIVITY": {},
    "PRUDENCE": {},
    "CRITICAL THINKING": {},
    "PERSPECTIVE": {},
    "CURIOSITY": {},
    "LOVE OF LEARNING": {},
    "FAIRNESS": {},
    "LEADERSHIP": {},
    "FORGIVENESS": {},
    "KINDNESS": {},
    "GRATITUDE": {},
    "HUMOR": {},
    "HUMILITY": {},
    "HOPE": {},
    "TEAMWORK": {}
}

var gen = {}

var map = {}

function genData(item, index) {
    gen[item] = {}
    gen[item].label = item
    gen[item].data = Math.round(Math.random(10, 20) * 100)
    gen[item].sort = Math.round(Math.random(10, 20) * 100)
}

Object.keys(data).forEach(genData)
console.log(gen)
console.log(map)