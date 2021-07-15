let json = {"answersdatalist_list_custom_respondent":{},"gscalcid_text":"14x5X-ETGRV7B8Zk0AduR74ZUcz5XVofGdq0VoE7uOZY","gspresentid_text":"1ljWy4zFkNda16bjNJBKaHlHHcPh4ntFqtG8pMcwBblQ","im_compass_image":"//s3.amazonaws.com/appforest_uf/f1617629311380x199981640895333900/screenshot%3Ftoken%3D%5Btoken%5D","im_concgruence_image":"//s3.amazonaws.com/appforest_uf/f1617629313614x970635550189455500/screenshot%3Ftoken%3D%5Btoken%5D","im_conditions2_image":null,"im_conditions_image":"//s3.amazonaws.com/appforest_uf/f1617629315918x826687110301382700/screenshot%3Ftoken%3D%5Btoken%5D","im_conduct_contribution_image":"//s3.amazonaws.com/appforest_uf/f1617629318178x351324628803669300/screenshot%3Ftoken%3D%5Btoken%5D","im_conduct_detailed_activator_image":"//s3.amazonaws.com/appforest_uf/f1617629320290x584106667910521900/screenshot%3Ftoken%3D%5Btoken%5D","im_conduct_detailed_adventurer1_image":"//s3.amazonaws.com/appforest_uf/f1617629322233x226016459033431300/screenshot%3Ftoken%3D%5Btoken%5D","im_conduct_detailed_adventurer_image":"//s3.amazonaws.com/appforest_uf/f1617629324210x428564692581041150/screenshot%3Ftoken%3D%5Btoken%5D","im_conduct_detailed_advocate_image":"//s3.amazonaws.com/appforest_uf/f1617629326182x624678787351355800/screenshot%3Ftoken%3D%5Btoken%5D","im_conduct_detailed_architect_image":"//s3.amazonaws.com/appforest_uf/f1617629328786x210951293792225300/screenshot%3Ftoken%3D%5Btoken%5D","im_conduct_detailed_aspirer_image":"//s3.amazonaws.com/appforest_uf/f1617629342224x356828048420708900/screenshot%3Ftoken%3D%5Btoken%5D","im_conduct_image":"//s3.amazonaws.com/appforest_uf/f1617629330760x487032031432525200/screenshot%3Ftoken%3D%5Btoken%5D","im_connections_image":"//s3.amazonaws.com/appforest_uf/f1617629332975x713831450972786100/screenshot%3Ftoken%3D%5Btoken%5D","im_course_continue_image":"//s3.amazonaws.com/appforest_uf/f1617629335365x958019317193058200/screenshot%3Ftoken%3D%5Btoken%5D","im_course_start_image":"//s3.amazonaws.com/appforest_uf/f1617629337474x873568904285707300/screenshot%3Ftoken%3D%5Btoken%5D","im_course_stop_image":"//s3.amazonaws.com/appforest_uf/f1617629335365x958019317193058200/screenshot%3Ftoken%3D%5Btoken%5D","im_cti_image":"//s3.amazonaws.com/appforest_uf/f1617629339887x639454331666111200/screenshot%3Ftoken%3D%5Btoken%5D","im_culture_image":null,"surveyfile_file":"//s3.amazonaws.com/appforest_uf/f1617629878070x922137416800396200/Untitled%20presentation.pdf","Created By":{},"Slug":null,"Created Date":"2021-04-05T06:24:27.551Z","Modified Date":"2021-04-05T13:37:58.607Z","_id":"1617603867004x700608469684977700"}


let images = []
let keys = Object.keys(json)

keys.forEach(item=>{

    if(item.includes('im_')&&json[item]!==null){
        images.push('https'+json[item])

      
    }


})






console.log(images)