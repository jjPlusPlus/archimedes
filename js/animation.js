function run(animationGroups, iterations, numGroups, spiralLength) {
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
        group.iteration < iterations ? group.iteration += 1 : group.iteration = 0

        // toggle the animation for this element
        element && element.classList.add('rainDrops')

        // update the timer
        last = now
      })

      // increase the total counter
      if (totalIteration < iterations) {
        totalIteration += 1
      } else {
        console.log('resetting animation groups')
        totalIteration = 0
        animationGroups = generateAnimationGroups(numGroups, iterations, spiralLength)
      }
    }
    requestAnimationFrame(animate)
  }
  animate()
}
