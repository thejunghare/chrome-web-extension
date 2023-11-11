'use strict'

document.addEventListener 'DOMContentLoaded', ->
  getProperties = ['color', 'background-color']

  getfont = (element, properties) ->
    computedStyle = window.getComputedStyle(element, null)
    computedValues = {}

    for property in properties
      computedValues[property] = computedStyle.getPropertyValue(property)

    tooltipContent = """
      <div>
          <p>Color: #{computedValues["color"]}</p>
          <p>Background: #{computedValues["background-color"]}</p>
      </div>
    """

    tooltipContent

  getId = (obj) ->
    obj.id

  addTooltip = (element) ->
    $(element)
      .attr 'data-bs-toggle', 'tooltip'
      .attr 'data-bs-placement', 'bottom'
      .attr 'data-bs-html', 'true'
      .attr 'title', ''

    tooltipInstance = new bootstrap.Tooltip(element, { title: getfont(element, getProperties) })

    tooltipInstance.show()
    console.log 'Tooltip added'

    $(element).on 'mouseleave', (event) ->
      element = event.target

      tooltip = bootstrap.Tooltip.getInstance(element)
      if tooltip
        tooltip.dispose()
        console.log 'Tooltip removed'

  addEventListener 'mouseover', (event) ->
    console.log getId(event.target)

  addEventListener 'mouseover', (event) ->
    element = event.target
    id = getId(element)
    if id
      addTooltip element
