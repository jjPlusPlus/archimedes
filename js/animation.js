const run = (config) => {
  const settings = {
    numCoils: 30,
    chord: 15,
    numGroups: 50,
    iterations: 80,
    ...config,
  }

  const coils = drawCoils(settings.numCoils, settings.chord)
  const spiralLength = document.getElementById('spiral').childElementCount

  let animationGroups = generateAnimationGroups(settings.numGroups, settings.iterations, spiralLength)

  // helpers for running every n frames
  let totalIteration = 0
  let last = 0;

  const animate = (now) => {
    // every other frame:
    if (now - last >= 20) {
      animationGroups.forEach((group, index) => {
        // for the element at the index group.start + group.iteration
        const position = group.start + group.iteration
        const elementID = `character-${position}`
        const element = document.getElementById(elementID)

        // reset the iterations for this group if it's reached the length
        group.iteration < settings.iterations ? group.iteration += 1 : group.iteration = 0

        // toggle the animation for this element
        element && element.classList.add('rainDrops')

        // update the timer
        last = now
      })

      // increase the total counter
      if (totalIteration < settings.iterations) {
        totalIteration += 1
      } else {
        totalIteration = 0
        animationGroups = generateAnimationGroups(settings.numGroups, settings.iterations, spiralLength)
      }
    }
    animationFrameRunner = requestAnimationFrame(animate)
  }
  animate()
}
