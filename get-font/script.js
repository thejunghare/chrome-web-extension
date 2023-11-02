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

    /* const addTooltip = (element) => {
        element.setAttribute("data-bs-toggle", "tooltip")
        element.setAttribute("data-bs-placement", "bottom")
        element.setAttribute("data-bs-title", "Tooltip on top")
        new bootstrap.Tooltip(element)
        console.log(`Tooltip added`)

        // Remove the tooltip when the mouse leaves the element
        element.addEventListener("mouseleave", (event) => {
            const element = event.target

            element.removeAttribute("data-bs-toggle");
            element.removeAttribute("data-bs-placement");
            element.removeAttribute("data-bs-title");
            
            new bootstrap.Tooltip(element);
            /* const element = event.target
            const tooltip = bootstrap.Tooltip.getInstance(element); 
            // tooltip.dispose() // --> not working
            console.log(`Removed`)

        })
    } */
    // solution by @jameshibbard
    const addTooltip = (element) => {
        element.setAttribute('data-bs-toggle', 'tooltip');
        element.setAttribute('data-bs-placement', 'bottom');
        element.setAttribute('data-bs-title', 'Tooltip on top');
    
        const tooltipInstance = new bootstrap.Tooltip(element);
        tooltipInstance.show();
        console.log(`Tooltip added`);
    
        element.addEventListener('mouseleave', (event) => {
          const element = event.target;
    
          const tooltip = bootstrap.Tooltip.getInstance(element);
          if (tooltip) {
            tooltip.dispose();
          }
          console.log('Removed');
        });
      };


    addEventListener("mouseover", (event) => {
        console.log(getId(event.target));
    })

    addEventListener("mouseover", (event) => {
        //console.log(getfont(getId(event.target), "font-family")) // problem with this is I am passig id  instead of element

        const element = event.target
        const id = getId(element)
        if (id) {
            addTooltip(element)
            //console.log(getfont(element, "font-family"))
        }
    })
})
