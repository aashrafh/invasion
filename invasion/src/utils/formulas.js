export const bezierCurve = curve => {
  const { startPoint, firstControlPoint, secondControlPoint, endPoint } = curve;
  return `M ${startPoint.x} ${startPoint.y} c ${firstControlPoint.x} ${firstControlPoint.y} ${secondControlPoint.x} ${secondControlPoint.y} ${endPoint.x} ${endPoint.y}`;
};

export const radToDeg = rad => (rad * 180) / Math.PI;
export const calculateAngle = (x1, y1, x2, y2) => {
  if (x2 >= 0 && y2 >= 0) return 90;
  else if (x2 < 0 && y2 >= 0) return -90;

  const slope = (x2 - x1) / (y2 - y1);
  return -1 * radToDeg(Math.atan(slope));
};

export const calculateCanvasPosition = e => {
  const canvas = document.getElementById("game-canvas");
  const point = canvas.createSVGPoint();
  point.x = e.clientX;
  point.y = e.clientY;
  const { x, y } = point.matrixTransform(canvas.getScreenCTM().inverse());
  return { x, y };
};
