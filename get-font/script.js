'use strict'

const getfont = (element, property) => {
    return window
        .getComputedStyle(element, null)
        .getPropertyValue(property)
}

const getId = (obj) => {
    return obj.id
}

addEventListener("mouseover", (event) => {
    console.log(getId(event.target));
})

addEventListener("mouseover", (event) => {
    //console.log(getfont(getId(event.target), "font-family")) // problem with this is I am passig id  instead of element

    const element = event.target
    const id = getId(element)
    if (id){
        console.log(getfont(element, "font-family"))
    }
})
