let companyName = 'Philip Morris'
let slugList = ['PHIL', 'PHIM']








const regex = new RegExp('.{4}')
var curSlug = companyName.match(regex)[0].toUpperCase()
var curIndex = 0
var result = true
console.log(curSlug)


function checkSlugList(slugList, curSlug) {
    slugList.forEach(slug => {

        checkSlug(slug, curSlug)
    })

}



function checkSlug(slug, slugToCheck) {

    if (slug === slugToCheck) {

        result = false
    }
}




function genNewSlug(companyName) {



}
console.log(result)

checkSlugList(slugList, curSlug)