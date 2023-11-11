'use strict'

document.addEventListener("DOMContentLoaded", function () {
    const getProperties = ["font-family", "font-size", "font-weight"]

    const getfont = (element, properties) => {
        const computedStyle = window.getComputedStyle(element, null)
        const computedValues = {}

        properties.forEach(property => {
            computedValues[property] = computedStyle.getPropertyValue(property)
        })

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
        const element = event.target
        const id = getId(element)
        if (id) {
            addTooltip(element)
        }
    })
})