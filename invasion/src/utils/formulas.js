export const bezierCurve = curve => {
  const { startPoint, firstControlPoint, secondControlPoint, endPoint } = curve;
  return `M ${startPoint.x} ${startPoint.y} c ${firstControlPoint.x} ${firstControlPoint.y} ${secondControlPoint.x} ${secondControlPoint.y} ${endPoint.x} ${endPoint.y}`;
};

export const radToDeg = rad => (rad * 180) / Math.PI;
export const degToRad = deg => (deg * Math.PI) / 180;
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

export const calculateNextPosition = (x, y, angle, divisor = 300) => {
  const tAngle = -1 * angle + 90;
  const stepX = radToDeg(Math.cos(degToRad(tAngle))) / divisor;
  const stepY = radToDeg(Math.sin(degToRad(tAngle))) / divisor;
  return {
    x: x + stepX,
    y: y - stepY
  };
};

export const checkCollision = (a, b) => {
  return a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1;
};
