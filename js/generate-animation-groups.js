function generateAnimationGroups(numGroups, groupLength, spiralLength) {
  const groups = []
  for (var i = 0; i < numGroups; i++) {
    const start = Math.floor(Math.random() * spiralLength - 100)
    const group = {
      iteration: 0,
      start,
      end: start + groupLength
    }
    groups.push(group)
  }
  return groups
}
