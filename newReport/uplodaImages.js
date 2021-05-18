let response = {
    "_id": "1617603867004x700608469684977700",
    "im_compass": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_concgruence": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_conditions": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_conduct_contribution": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_conduct_detailed_activator": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_conduct_detailed_architect": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_conduct_detailed_adventurer": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_conduct_detailed_advocate": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_conduct_detailed_ambassador": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_conduct": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_connections": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_course_continue": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_course_start": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_course_stop": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "im_cti": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "Created By": "1610719086133x821289346243953900",
    "Created Date": 1617603867551,
    "Modified Date": 1617627584022,
    "answersDataList": [
        "1613553721724x151922543420274240",
        "1617603717556x455297531539882000"
    ],
    "im_conduct_detailed_aspirer": "//s3.amazonaws.com/appforest_uf/f1617627583300x582416954593518700/screenshot%3Ftoken%3D%5Btoken%5D",
    "_type": "custom.reports"
}

console.log(bubbleToGoogleSlides(response))
function bubbleToGoogleSlides(response){

let result = []

     Object.keys(response).map(item=>{

            let regex=/im_/g
            if(regex.test(item)){
        result.push({text:"{{"+item+"}}",imageUrl:"http:"+response[item]})
            }
    })
return result
}