export const curve = (startPos, endPos) => {
	
  /*
	this this method which calculates the curve
	which needs to be specified for the connection
	
	
	> if needed straight lines set curve to zero.
	> if needed less curve increase the param CURVE_LEVEL
	> if needed less curve decrease the param CURVE_LEVEL
	
	refer svg path for M x y C curve params 
	
	
  */
  const width = Math.abs(startPos.x - endPos.x)
  const height = Math.abs(startPos.y - endPos.y)
  const leftToRight = startPos.x < endPos.x
  const topToBottom = startPos.y < endPos.y
  const isHorizontal = width > height
  const CURVE_LEVEL = 3

  let start
  let end
  if (isHorizontal) {
    start = leftToRight ? startPos : endPos
    end = leftToRight ? endPos : startPos
  } else {
    start = topToBottom ? startPos : endPos
    end = topToBottom ? endPos : startPos
  }

  const curve = isHorizontal ? width / CURVE_LEVEL : height / CURVE_LEVEL
  const curveX = isHorizontal ? curve : 0
  const curveY = isHorizontal ? 0 : curve

  return `M${start.x},${start.y} C ${start.x + curveX},${start.y + curveY} ${end.x - curveX},${end.y - curveY} ${end.x},${end.y}`
}