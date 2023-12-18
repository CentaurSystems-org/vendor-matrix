const fs = require('fs')
let json = fs.readFileSync('worksCategory.json').toString();
let data = JSON.parse(json);
const spell = require('spell-checker-js')
spell.load('en')


data.worksCategoriesMatrix.forEach(Categories => {
    Categories.SubCategories.forEach(SubCategories =>{
        SubCategories.CoreCompetence.forEach(CoreCompetence => {
            let matrix = `${Categories.name} ${SubCategories.name} ${CoreCompetence}`
            const check = spell.check(matrix)
        })

    })
    });