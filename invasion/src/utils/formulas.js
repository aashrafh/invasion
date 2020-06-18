export const bezierCurve = curve => {
  const { startPoint, firstControlPoint, secondControlPoint, endPoint } = curve;
  return `M ${startPoint.x} ${startPoint.y} c ${firstControlPoint.x} ${firstControlPoint.y} ${secondControlPoint.x} ${secondControlPoint.y} ${endPoint.x} ${endPoint.y}`;
};
