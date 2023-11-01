'use strict'
document.addEventListener("DOMContentLoaded", function () {
    const getfont = (element, property) => {
        return window
            .getComputedStyle(element, null)
            .getPropertyValue(property)
    }

    const getId = (obj) => {
        return obj.id
    }

    const addTooltip = (element) => {
        console.log(`added`);
        element.setAttribute("data-bs-toggle", "tooltip")
        element.setAttribute("data-bs-placement", "bottom")
        element.setAttribute("data-bs-title", "Tooltip on top")
        new bootstrap.Tooltip(element)

        // Remove the tooltip when the mouse leaves the element
        element.addEventListener("mouseleave", () => {
            console.log(`Removed`);
            // Remove the attributes to disable the tooltip
            element.removeAttribute("data-bs-toggle");
            element.removeAttribute("data-bs-placement");
            element.removeAttribute("data-bs-title");

            // Dispose of the tooltip
           // tooltip.dispose();
        })
    }


    addEventListener("mouseover", (event) => {
        console.log(getId(event.target));
    })

    addEventListener("mouseover", (event) => {
        //console.log(getfont(getId(event.target), "font-family")) // problem with this is I am passig id  instead of element

        const element = event.target
        const id = getId(element)
        if (id) {
            addTooltip(element)
            console.log(getfont(element, "font-family"))
        }
    })
})
