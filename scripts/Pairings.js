import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let kidsIdol = null

    for (const celebrity of celebrityArray) {
        if (celebrity.id == kidObject.celebrityId){
            kidsIdol = celebrity 
        }
    }

    return kidsIdol
}

export const Pairings = () => {
    let html = "<ul>"
    const kids = getChildren()
    const celebrities = getCelebrities()
    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

