'use strict'

document.addEventListener("DOMContentLoaded", function () {
    const getProperties = ["font-family", "font-size", "font-weight"]

    const getfont = (element, properties) => {
        const computedStyle = window.getComputedStyle(element, null)
        const computedValues = {}

        properties.forEach(property => {
            computedValues[property] = computedStyle.getPropertyValue(property)
        })

        //return computedValues // --> this will return objects

        // convert object to json
        /*  const computedValuesJSON = JSON.stringify(computedValues)
         return computedValuesJSON */

        // Create a custom HTML content for the tooltip
        const tooltipContent = `
        <div>
            <p>Font Family: ${computedValues["font-family"]}</p>
            <p>Font Size: ${computedValues["font-size"]}</p>
            <p>Font Weight: ${computedValues["font-weight"]}</p>
        </div>
     `

        return tooltipContent
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
    /*   const addTooltip = (element) => {
          element.setAttribute('data-bs-toggle', 'tooltip')
          element.setAttribute('data-bs-placement', 'bottom')
          element.setAttribute('data-bs-title', getfont(element, getProperties))
  
          const tooltipInstance = new bootstrap.Tooltip(element)
          tooltipInstance.show()
          console.log(`Tooltip added`)
  
          element.addEventListener('mouseleave', (event) => {
              const element = event.target
  
              const tooltip = bootstrap.Tooltip.getInstance(element);
              if (tooltip) {
                  tooltip.dispose()
              }
              console.log('Removed')
          })
      } */

    const addTooltip = (element) => {
        element.setAttribute('data-bs-toggle', 'tooltip');
        element.setAttribute('data-bs-placement', 'bottom');
        element.setAttribute('data-bs-html', 'true'); // Enable HTML content in the tooltip
        element.setAttribute('title', ''); // Set an empty title (required for Bootstrap)

        const tooltipInstance = new bootstrap.Tooltip(element, {
            title: getfont(element, getProperties) // Use a function to set the title
        });
        tooltipInstance.show();
        console.log('Tooltip added');

        element.addEventListener('mouseleave', (event) => {
            const element = event.target;

            const tooltip = bootstrap.Tooltip.getInstance(element);
            if (tooltip) {
                tooltip.dispose();
                console.log('Tooltip removed');
            }
        });
    }


    addEventListener("mouseover", (event) => {
        console.log(getId(event.target))
    })

    addEventListener("mouseover", (event) => {
        //console.log(getfont(getId(event.target), "font-family")) // problem with this is I am passig id  instead of element

        const element = event.target
        const id = getId(element)
        if (id) {
            addTooltip(element)
            // console.log(getfont(element, getProperties))
        }
    })
})