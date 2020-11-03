var data = [{ name: 'spir', data: 9, sort: 11 },  
    { name: 'appr', data: 20, sort: 12 },  
    { name: 'social', data: 33, sort: 12 },  
    { name: 'caring', data: 34, sort: 15 },  
    { name: 'selfRefulation', data: 60, sort: 15 },  
    { name: 'creativity', data: 67, sort: 12 },  
    { name: 'prudence', data: 99, sort: 17 },  
    { name: 'critical', data: 31, sort: 12 },  
    { name: 'perspective', data: 54, sort: 19 },  
    { name: 'curosity', data: 73, sort: 20 },  
    { name: 'love', data: 24, sort: 1 },  
    { name: 'fair', data: 98, sort: 6 },  
    { name: 'leader', data: 11, sort: 5 },  
    { name: 'forgive', data: 75, sort: 5 },  
    { name: 'kindness', data: 27, sort: 2 },  
    { name: 'gratitude', data: 100, sort: 5 },  
    { name: 'humor', data: 69, sort: 2 },  
    { name: 'humility', data: 70, sort: 4 },  
    { name: 'hope', data: 2, sort: 58 },  
    { name: 'teamwork', data: 97, sort: 2 }
] 
var map = {
    spir: 'SPIRITUALITY',
     
    appr: 'APPRECIATION OF AESTHETICS & EXCELLENCE',
     
    social: 'SOCIAL INTELLIGENCE',
     
    caring: 'CARING',
     
    selfRefulation: 'SELF REGULATION',
     
    creativity: 'CREATIVITY',
     
    prudence: 'PRUDENCE',
     
    critical: 'CRITICAL THINKING',
     
    perspective: 'PERSPECTIVE',
     
    curosity: 'CURIOSITY',
     
    love: 'LOVE OF LEARNING',
     
    fair: 'FAIRNESS',
     
    leader: 'LEADERSHIP',
     
    forgive: 'FORGIVENESS',
     
    kindness: 'KINDNESS',
     
    gratitude: 'GRATITUDE',
     
    humor: 'HUMOR',
     
    humility: 'HUMILITY',
     
    hope: 'HOPE',
     
    teamwork: 'TEAMWORK'
}
data.sort(function(a, b) {
    if (a.sort !== b.sort) {
        return a.sort - b.sort
    } else return a.data - b.data
})


var genLabels = []

data.forEach(item => {
    let label = map[item.name]
    console.log(item)
    if (item.name !== "appr") {
        genLabels.push(label)
    } else genLabels.push(['APPRECIATION OF AESTHETICS', 'EXCELLENCE'])
});
var genData = []

data.forEach(item => {
    genData.push(item.data)
});
console.log(genLabels)