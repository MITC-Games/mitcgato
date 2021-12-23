
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior || {};

/**
 * Behavior generated from Marching squares painter
 */
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior = class MarchingSquaresBehavior extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.AreaLeftBound = behaviorData.AreaLeftBound !== undefined ? behaviorData.AreaLeftBound : Number("0") || 0;
    this._behaviorData.AreaTopBound = behaviorData.AreaTopBound !== undefined ? behaviorData.AreaTopBound : Number("0") || 0;
    this._behaviorData.AreaRightBound = behaviorData.AreaRightBound !== undefined ? behaviorData.AreaRightBound : Number("0") || 0;
    this._behaviorData.AreaBottomBound = behaviorData.AreaBottomBound !== undefined ? behaviorData.AreaBottomBound : Number("0") || 0;
    this._behaviorData.CellWidth = behaviorData.CellWidth !== undefined ? behaviorData.CellWidth : Number("20") || 0;
    this._behaviorData.CellHeight = behaviorData.CellHeight !== undefined ? behaviorData.CellHeight : Number("20") || 0;
    this._behaviorData.FillOutside = behaviorData.FillOutside !== undefined ? behaviorData.FillOutside : false;
    this._behaviorData.Threshold = behaviorData.Threshold !== undefined ? behaviorData.Threshold : Number("1") || 0;
    this._behaviorData.MustOnlyDrawScreen = behaviorData.MustOnlyDrawScreen !== undefined ? behaviorData.MustOnlyDrawScreen : false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.AreaLeftBound !== newBehaviorData.AreaLeftBound)
      this._behaviorData.AreaLeftBound = newBehaviorData.AreaLeftBound;
    if (oldBehaviorData.AreaTopBound !== newBehaviorData.AreaTopBound)
      this._behaviorData.AreaTopBound = newBehaviorData.AreaTopBound;
    if (oldBehaviorData.AreaRightBound !== newBehaviorData.AreaRightBound)
      this._behaviorData.AreaRightBound = newBehaviorData.AreaRightBound;
    if (oldBehaviorData.AreaBottomBound !== newBehaviorData.AreaBottomBound)
      this._behaviorData.AreaBottomBound = newBehaviorData.AreaBottomBound;
    if (oldBehaviorData.CellWidth !== newBehaviorData.CellWidth)
      this._behaviorData.CellWidth = newBehaviorData.CellWidth;
    if (oldBehaviorData.CellHeight !== newBehaviorData.CellHeight)
      this._behaviorData.CellHeight = newBehaviorData.CellHeight;
    if (oldBehaviorData.FillOutside !== newBehaviorData.FillOutside)
      this._behaviorData.FillOutside = newBehaviorData.FillOutside;
    if (oldBehaviorData.Threshold !== newBehaviorData.Threshold)
      this._behaviorData.Threshold = newBehaviorData.Threshold;
    if (oldBehaviorData.MustOnlyDrawScreen !== newBehaviorData.MustOnlyDrawScreen)
      this._behaviorData.MustOnlyDrawScreen = newBehaviorData.MustOnlyDrawScreen;

    return true;
  }

  // Properties:
  
  _getAreaLeftBound() {
    return this._behaviorData.AreaLeftBound !== undefined ? this._behaviorData.AreaLeftBound : Number("0") || 0;
  }
  _setAreaLeftBound(newValue) {
    this._behaviorData.AreaLeftBound = newValue;
  }
  _getAreaTopBound() {
    return this._behaviorData.AreaTopBound !== undefined ? this._behaviorData.AreaTopBound : Number("0") || 0;
  }
  _setAreaTopBound(newValue) {
    this._behaviorData.AreaTopBound = newValue;
  }
  _getAreaRightBound() {
    return this._behaviorData.AreaRightBound !== undefined ? this._behaviorData.AreaRightBound : Number("0") || 0;
  }
  _setAreaRightBound(newValue) {
    this._behaviorData.AreaRightBound = newValue;
  }
  _getAreaBottomBound() {
    return this._behaviorData.AreaBottomBound !== undefined ? this._behaviorData.AreaBottomBound : Number("0") || 0;
  }
  _setAreaBottomBound(newValue) {
    this._behaviorData.AreaBottomBound = newValue;
  }
  _getCellWidth() {
    return this._behaviorData.CellWidth !== undefined ? this._behaviorData.CellWidth : Number("20") || 0;
  }
  _setCellWidth(newValue) {
    this._behaviorData.CellWidth = newValue;
  }
  _getCellHeight() {
    return this._behaviorData.CellHeight !== undefined ? this._behaviorData.CellHeight : Number("20") || 0;
  }
  _setCellHeight(newValue) {
    this._behaviorData.CellHeight = newValue;
  }
  _getFillOutside() {
    return this._behaviorData.FillOutside !== undefined ? this._behaviorData.FillOutside : false;
  }
  _setFillOutside(newValue) {
    this._behaviorData.FillOutside = newValue;
  }
  _getThreshold() {
    return this._behaviorData.Threshold !== undefined ? this._behaviorData.Threshold : Number("1") || 0;
  }
  _setThreshold(newValue) {
    this._behaviorData.Threshold = newValue;
  }
  _getMustOnlyDrawScreen() {
    return this._behaviorData.MustOnlyDrawScreen !== undefined ? this._behaviorData.MustOnlyDrawScreen : false;
  }
  _setMustOnlyDrawScreen(newValue) {
    this._behaviorData.MustOnlyDrawScreen = newValue;
  }
}

// Methods:
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.userFunc0x783338 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

for (const object of objects) {
  const behavior = object.getBehavior(behaviorName);

  /** @type {float} */
  const left = behavior._getAreaLeftBound();
  /** @type {float} */
  const top = behavior._getAreaTopBound();
  /** @type {float} */
  const right = behavior._getAreaRightBound() || game.getGameResolutionWidth();
  /** @type {float} */
  const bottom = behavior._getAreaBottomBound() || game.getGameResolutionHeight();
  /** @type {float} */
  const cellWidth = behavior._getCellWidth();
  /** @type {float} */
  const cellHeight = behavior._getCellHeight();

  // Build the scalar field
  const dimX = 1 + Math.ceil((right - left) / cellWidth);
  const dimY = 1 + Math.ceil((bottom - top) / cellHeight);

  /** @type {Array<number[]>} */
  const fieldValues = new Array(dimY);
  for (var y = 0; y < dimY; y++) {
    fieldValues[y] = new Array(dimX).fill(0);
  }
  behavior.scalarFieldValues = fieldValues;

  /** @type {gdjs.Polygon[]} Avoid allocations when updating hitboxes*/
  behavior.recycledPolygons = [];

  const prototype = Object.getPrototypeOf(behavior);
  if (!prototype.convertToGridBasisX) {
    const South = 0;
    const East = 1;
    const North = 2;
    const West = 3;
    const SouthWest = 4;
    const SouthEast = 5;
    const NorthEast = 6;
    const NorthWest = 7;

    const SouthWestMask = 1;
    const SouthEastMask = 2;
    const NorthEastMask = 4;
    const NorthWestMask = 8;

    gdjs.__marchingSquares = {
      parseOperation: function (operation) {
        switch (operation) {
          case "Addition":
            return (value1, value2) => value1 + value2;
          case "Subtraction":
            return (value1, value2) => value1 - value2;
          case "Minimum":
            return Math.min;
          case "Maximum":
          default:
            return Math.max;
        }
        return;
      }
    };

    /** {FloatPoint} Avoid memory allocations when returning points */
    prototype.workingPoint = [0, 0];
    prototype.marchingSquaresFillVertices = [
      [],
      [South, West, SouthWest],
      [East, South, SouthEast],
      [East, West, SouthWest, SouthEast],

      [North, East, NorthEast],
      [
        South,
        SouthWest,
        West,
        North,
        NorthEast,
        East,
      ],
      [South, North, NorthEast, SouthEast],
      [West, North, NorthEast, SouthEast, SouthWest],

      [West, North, NorthWest],
      [North, South, SouthWest, NorthWest],
      [
        South,
        West,
        NorthWest,
        North,
        East,
        SouthEast,
      ],
      [North, East, SouthEast, SouthWest, NorthWest],

      [East, West, NorthWest, NorthEast],
      [East, South, SouthWest, NorthWest, NorthEast],
      [South, West, NorthWest, NorthEast, SouthEast],
      [],
    ];
    prototype.marchingSquaresOutlineVertices = [
      [[]],
      [[South, West]],
      [[East, South]],
      [[East, West]],

      [[North, East]],
      [
        [East, South],
        [West, North]
      ],
      [[South, North]],
      [[West, North]],

      [[West, North]],
      [[North, South]],
      [
        [South, West],
        [North, East]
      ],
      [[North, East]],

      [[East, West]],
      [[East, South]],
      [[South, West]],
      [[]],
    ];

    /**
     * @param x {float} in the scene basis
     * @return {float} x in the grid basis
     */
    prototype.convertToGridBasisX = function (x) {
      return (x - this._getAreaLeftBound()) / this._getCellWidth();
    }

    /**
     * @param y {float} in the scene basis
     * @return {float} y in the grid basis
     */
    prototype.convertToGridBasisY = function (y) {
      return (y - this._getAreaTopBound()) / this._getCellHeight();
    }

    /**
     * @param x {float} in the grid basis
     * @return {float} x in the scene basis
     */
    prototype.convertFromGridBasisX = function (x) {
      return x * this._getCellWidth() + this._getAreaLeftBound();
    }

    /**
     * @param y {float} in the grid basis
     * @return {float} y in the scene basis
     */
    prototype.convertFromGridBasisY = function (y) {
      return y * this._getCellHeight() + this._getAreaTopBound();
    }

    /**
     * @return {integer} grid dimension on y
     */
    prototype.dimY = function () {
      return this.scalarFieldValues.length;
    }

    /**
     * @return {integer} grid dimension on y
     */
    prototype.dimX = function () {
      const firstColumn = this.scalarFieldValues[0];
      return firstColumn ? firstColumn.length : 0;
    }

    /**
     * @param x {integer} the square top in the grid
     * @param y {integer} the square left in the grid
     * @return {integer} one of the 16 marching squares cases
     */
    prototype.getSquareIndex = function (x, y) {
      /** @type {float} */
      const threshold = this._getThreshold();
      let squareIndex = 0;
      if (this.scalarFieldValues[y + 1][x] > threshold) {
        squareIndex |= SouthWestMask;
      }
      if (this.scalarFieldValues[y + 1][x + 1] > threshold) {
        squareIndex |= SouthEastMask;
      }
      if (this.scalarFieldValues[y][x + 1] > threshold) {
        squareIndex |= NorthEastMask;
      }
      if (this.scalarFieldValues[y][x] > threshold) {
        squareIndex |= NorthWestMask;
      }
      return squareIndex;
    }

    /**
     * @param side {integer} point location
     * @param indexX {integer} the square top in the grid
     * @param indexY {integer} the square left in the grid
     * @param point {FloatPoint} is the result
     */
    prototype.calcPoint = function (
      side,
      indexX,
      indexY,
      point
    ) {
      let gridX = 0;
      let gridY = 0;

      switch (side) {
        case South:
          gridY = indexY + 1;
          gridX = this.betweenX(indexX, gridY, indexX + 1, gridY);
          break;

        case East:
          gridX = indexX + 1;
          gridY = this.betweenY(gridX, indexY, gridX, indexY + 1);
          break;

        case North:
          gridY = indexY;
          gridX = this.betweenX(indexX, gridY, indexX + 1, gridY);
          break;

        case West:
          gridX = indexX;
          gridY = this.betweenY(gridX, indexY, gridX, indexY + 1);
          break;

        case SouthWest:
          gridX = indexX;
          gridY = indexY + 1;
          break;

        case SouthEast:
          gridX = indexX + 1;
          gridY = indexY + 1;
          break;

        case NorthEast:
          gridX = indexX + 1;
          gridY = indexY;
          break;

        case NorthWest:
          gridX = indexX;
          gridY = indexY;
          break;
      }

      point[0] = this.convertFromGridBasisX(gridX);
      point[1] = this.convertFromGridBasisY(gridY);
    }

    /**
     * Returns the mean between 2 corners weighted by their field value.
     * @param indexX1 {integer} first corner x
     * @param indexY1 {integer} first corner y
     * @param indexX2 {integer} second corner x
     * @param indexY2 {integer} second corner y
     * @return {float} x in the grid
     */
    prototype.betweenX = function (
      indexX1,
      indexY1,
      indexX2,
      indexY2
    ) {
      const value1 = this.scalarFieldValues[indexY1][indexX1];
      const value2 = this.scalarFieldValues[indexY2][indexX2];

      /** @type {float} */
      const threshold = this._getThreshold();
      const wight1 = Math.abs(value1 - threshold);
      const wight2 = Math.abs(value2 - threshold);

      return (wight2 * indexX1 + wight1 * indexX2) / (wight1 + wight2);
    }

    /**
     * Returns the mean between 2 corners weighted by their field value.
     * @param indexX1 {integer} first corner x
     * @param indexY1 {integer} first corner y
     * @param indexX2 {integer} second corner x
     * @param indexY2 {integer} second corner y
     * @return {float} y in the grid
     */
    prototype.betweenY = function (
      indexX1,
      indexY1,
      indexX2,
      indexY2
    ) {
      const value1 = this.scalarFieldValues[indexY1][indexX1];
      const value2 = this.scalarFieldValues[indexY2][indexX2];

      /** @type {float} */
      const threshold = this._getThreshold();
      const weight1 = Math.abs(value1 - threshold);
      const weight2 = Math.abs(value2 - threshold);

      return (weight2 * indexY1 + weight1 * indexY2) / (weight1 + weight2);
    }

    /**
     * @param pointX {float} in scene basis
     * @param pointY {float} in scene basis
     * @return {float} the field value
     */
    prototype.getFieldValue = function (
      pointX,
      pointY,
    ) {
      /** @type {Array<number[]>} */
      const fieldValues = this.scalarFieldValues;

      const x = this.convertToGridBasisX(pointX);
      const y = this.convertToGridBasisY(pointY);

      const squareX = Math.floor(x);
      const squareY = Math.floor(y);

      if (squareX < 0 || squareY < 0 || squareX >= behavior.dimX() || squareY >= behavior.dimY()) {
        return 0;
      }

      // Extrapolate
      let weigtedValueSum = 0;
      let weightSum = 0;
      for (let vertexX = squareX; vertexX <= squareX + 1; vertexX++) {
        for (let vertexY = squareY; vertexY <= squareY + 1; vertexY++) {
          const value = fieldValues[vertexY][vertexX];
          const dx = vertexX - x;
          const dy = vertexY - y;
          if (dx === 0 && dy === 0) {
            // No interpolation needed.
            return value;
          }
          else {
            const distance = Math.hypot(dx, dy);
            weigtedValueSum += value / distance;
            weightSum += 1 / distance;
          }
        }
      }
      const mean = weigtedValueSum / weightSum;
      return mean;
    }

    /**
     * @param pointX {float} in scene basis
     * @param pointY {float} in scene basis
     * @return {[float, float, float]} the normal
     */
    prototype.getFieldNormal = function (
      pointX,
      pointY
    ) {
      if (!this.lastNormal) {
        this.lastNormal = [0, 0, 0];
      }
      else if (this.lastNormalPointX === pointX && this.lastNormalPointY === pointY) {
        return this.lastNormal;
      }
      const normal = this.lastNormal;

      /** @type {Array<number[]>} */
      const fieldValues = this.scalarFieldValues;

      let x = this.convertToGridBasisX(pointX);
      let y = this.convertToGridBasisY(pointY);

      let squareX = Math.floor(x);
      let squareY = Math.floor(y);

      if (squareX < 0 || squareY < 0 || squareX >= behavior.dimX() || squareY >= behavior.dimY()) {
        return 0;
      }

      // This gives very approximative values on borders
      // but it's the easiest way to avoid to be out of bounds.
      // Why 1 but dim - 3?
      // - 1 margin for the normal calculus on both side
      // - 1 extra because extrapolation asks values on right and bottom.
      if (squareX < 1) {
        squareX = 1;
        x = squareX;
      }
      if (squareX > behavior.dimX() - 3) {
        squareX = behavior.dimX() - 3;
        x = squareX;
      }
      if (squareY < 1) {
        squareY = 1;
        y = squareY;
      }
      if (squareY > behavior.dimY() - 3) {
        squareY = behavior.dimY() - 3;
        y = squareY;
      }

      // Extrapolate
      let weigtedValueSumX = 0;
      let weigtedValueSumY = 0;
      let weigtedValueSumZ = 0;
      for (let vertexX = squareX; vertexX <= squareX + 1; vertexX++) {
        for (let vertexY = squareY; vertexY <= squareY + 1; vertexY++) {
          normal[0] = 0;
          normal[1] = 0;
          normal[2] = 0;
          this._addGridPointdNormal(vertexX, vertexY, normal);
          const dx = vertexX - x;
          const dy = vertexY - y;
          if (dx === 0 && dy === 0) {
            // Double break, no interpolation needed.
            vertexX += 2;
            vertexY += 2;
          }
          else {
            const distance = Math.hypot(dx, dy);
            weigtedValueSumX += normal[0] / distance;
            weigtedValueSumY += normal[1] / distance;
            weigtedValueSumZ += normal[2] / distance;
          }
        }
      }
      const length = Math.hypot(normal[0], normal[1], normal[2]);
      normal[0] /= length;
      normal[1] /= length;
      normal[2] /= length;
      return normal
    }

    /**
     * Evaluate the normal at a given grid point.
     * 
     * The normal is not normalized.
     * 
     * @param x {integer} grid index
     * @param y {integer} grid index
     * @param {[float, float, float]} the result
     */
    prototype._addGridPointdNormal = function (
      x,
      y,
      normal
    ) {
      /** @type {Array<number[]>} */
      const fieldValues = this.scalarFieldValues;

      const z = fieldValues[y][x];

      let rightX = 1;
      const rightY = 0;
      let rightZ = fieldValues[y][x + 1] - z;
      const rightLength = Math.hypot(rightX, rightZ);
      rightX /= rightLength;
      rightZ /= rightLength;

      let leftX = -1;
      const leftY = 0;
      let leftZ = fieldValues[y][x - 1] - z;
      const leftLength = Math.hypot(leftX, leftZ);
      leftX /= leftLength;
      leftZ /= leftLength;

      const bottomX = 0;
      let bottomY = 1;
      let bottomZ = fieldValues[y + 1][x] - z;
      const bottomLength = Math.hypot(bottomY, bottomZ);
      bottomY /= bottomLength;
      bottomZ /= bottomLength;

      const topX = 0;
      let topY = -1;
      let topZ = fieldValues[y - 1][x] - z;
      const topLength = Math.hypot(topY, topZ);
      topY /= topLength;
      topZ /= topLength;

      // The mean of the normal of the 4 triangles around the grid point.
      this._addNormal(topX, topY, topZ, rightX, rightY, rightZ, normal);
      this._addNormal(rightX, rightY, rightZ, bottomX, bottomY, bottomZ, normal);
      this._addNormal(bottomX, bottomY, bottomZ, leftX, leftY, leftZ, normal);
      this._addNormal(leftX, leftY, leftZ, topX, topY, topZ, normal);
    }

    /**
     * @param uX {float}
     * @param uY {float}
     * @param uZ {float}
     * @param vX {float}
     * @param vY {float}
     * @param vZ {float}
     * @param {[float, float, float]} the result
     */
    prototype._addNormal = function (
      uX,
      uY,
      uZ,
      vX,
      vY,
      vZ,
      normal
    ) {
      normal[0] += uY * vZ - uZ * vY;
      normal[1] += uZ * vX - uX * vZ;
      normal[2] += uX * vY - uY * vX;
    }

    /**
     * @param x1 {float} fist point x
     * @param y1 {float} fist point y
     * @param x2 {float} second point x
     * @param y2 {float} second point y
     * @return {float} the square distance between 2 points
     */
    prototype.distanceSq = function (x1, y1, x2, y2) {
      const deltaX = x2 - x1;
      const deltaY = y2 - y1;
      return deltaX * deltaX + deltaY * deltaY;
    }

    /**
     * @param x {float} point x
     * @param y {float} point y
     * @param x1 {float} segment extremity x
     * @param y1 {float} segment extremity y
     * @param x2 {float} segment extremity x
     * @param y2 {float} segment extremity y
     * @return {float} the square distance between a point and a segment
     */
    prototype.distanceSqToSegment = function (x, y, x1, y1, x2, y2) {
      const length2 = this.distanceSq(x1, y1, x2, y2);
      if (length2 === 0) return this.distanceSq(x, y, x1, y1);
      const t = Math.max(0, Math.min(1, ((x - x1) * (x2 - x1) + (y - y1) * (y2 - y1)) / length2));
      return this.distanceSq(
        x, y, x1 + t * (x2 - x1),
        y1 + t * (y2 - y1));
    }

    /**
     * Merge a disk in the field.
     * @param centerX {float} in scene basis
     * @param centerY {float} in scene basis
     * @param radius {float} in scene basis
     * @param cappingRadiusRatio {float}
     * @param operation {function(float, float):float}
     */
    prototype.mergeDisk = function (centerX, centerY, radius, cappingRadiusRatio, operation) {
      /** @type {float} */
      const cellWidth = this._getCellWidth();
      /** @type {float} */
      const cellHeight = this._getCellHeight();

      /** @type {Array<number[]>} */
      const fieldValues = this.scalarFieldValues;

      /** @type {float} */
      const cX = this.convertToGridBasisX(centerX);
      /** @type {float} */
      const cY = this.convertToGridBasisY(centerY);

      const cappingRadius = cappingRadiusRatio * radius;
      const minX = Math.max(
        0,
        Math.floor(this.convertToGridBasisX(centerX - cappingRadius))
      );
      const minY = Math.max(
        0,
        Math.floor(this.convertToGridBasisY(centerY - cappingRadius))
      );
      const maxX = Math.min(
        this.dimX() - 1,
        Math.ceil(this.convertToGridBasisX(centerX + cappingRadius))
      );
      const maxY = Math.min(
        this.dimY() - 1,
        Math.ceil(this.convertToGridBasisY(centerY + cappingRadius))
      );

      const radiusSq = radius * radius / cellWidth / cellWidth;
      // Avoid too big values
      const minDistanceSq = 1 / 1024 / 1024;
      for (let y = minY; y <= maxY; y++) {
        const rowValues = fieldValues[y];
        for (let x = minX; x <= maxX; x++) {
          const distanceSq = Math.max(minDistanceSq, behavior.distanceSq(x, y, cX, cY));
          rowValues[x] = operation(
            rowValues[x],
            radiusSq / distanceSq
          );
        }
      }
    }

    /**
     * Merge a segment in the field.
     * @param startX {float} in scene basis
     * @param startY {float} in scene basis
     * @param endX {float} in scene basis
     * @param endY {float} in scene basis
     * @param radius {float} in scene basis
     * @param cappingRadiusRatio {float}
     * @param operation {function(float, float):float}
     */
    prototype.mergeSegment = function (startX, startY, endX, endY, trickness, cappingRadiusRatio, operation) {
      /** @type {float} */
      const cellWidth = this._getCellWidth();
      /** @type {float} */
      const cellHeight = this._getCellHeight();

      /** @type {Array<number[]>} */
      const fieldValues = this.scalarFieldValues;

      /** @type {float} */
      const x1 = this.convertToGridBasisX(startX);
      /** @type {float} */
      const y1 = this.convertToGridBasisY(startY);
      /** @type {float} */
      const x2 = this.convertToGridBasisX(endX);
      /** @type {float} */
      const y2 = this.convertToGridBasisY(endY);

      const cappingRadius = cappingRadiusRatio * trickness;
      const minX = Math.max(
        0,
        Math.floor(this.convertToGridBasisX(Math.min(startX, endX) - cappingRadius))
      );
      const minY = Math.max(
        0,
        Math.floor(this.convertToGridBasisY(Math.min(startY, endY) - cappingRadius))
      );
      const maxX = Math.min(
        this.dimX() - 1,
        Math.ceil(this.convertToGridBasisX(Math.max(startX, endX) + cappingRadius))
      );
      const maxY = Math.min(
        this.dimY() - 1,
        Math.ceil(this.convertToGridBasisY(Math.max(startY, endY) + cappingRadius))
      );

      const tricknessSq = trickness * trickness / cellWidth / cellWidth;
      // Avoid too big values
      const minDistanceSq = 1 / 1024 / 1024;
      for (let y = minY; y <= maxY; y++) {
        const rowValues = fieldValues[y];
        for (let x = minX; x <= maxX; x++) {
          const distanceSq = Math.max(minDistanceSq, behavior.distanceSqToSegment(x, y, x1, y1, x2, y2));
          rowValues[x] = operation(
            rowValues[x],
            tricknessSq / distanceSq
          );
        }
      }
    }

    /**
     * Merge a hill in the field.
     * @param centerX {float} in scene basis
     * @param centerY {float} in scene basis
     * @param height {float} 
     * @param radius {float} in scene basis
     * @param opacity {float} 
     * @param cappingRadiusRatio {float}
     * @param operation {function(float, float):float}
     */
    prototype.mergeHill = function (centerX, centerY, height, radius, opacity, cappingRadiusRatio, operation) {
      /** @type {float} */
      const cellWidth = this._getCellWidth();
      /** @type {float} */
      const cellHeight = this._getCellHeight();

      /** @type {Array<number[]>} */
      const fieldValues = this.scalarFieldValues;

      /** @type {float} */
      const cX = this.convertToGridBasisX(centerX);
      /** @type {float} */
      const cY = this.convertToGridBasisY(centerY);

      const cappingRadius = cappingRadiusRatio * radius;
      const minX = Math.max(
        0,
        Math.floor(this.convertToGridBasisX(centerX - cappingRadius))
      );
      const minY = Math.max(
        0,
        Math.floor(this.convertToGridBasisY(centerY - cappingRadius))
      );
      const maxX = Math.min(
        this.dimX() - 1,
        Math.ceil(this.convertToGridBasisX(centerX + cappingRadius))
      );
      const maxY = Math.min(
        this.dimY() - 1,
        Math.ceil(this.convertToGridBasisY(centerY + cappingRadius))
      );

      const logHeightDividedByRadiusSq = Math.log(height) * cellWidth * cellWidth / (radius * radius);
      const opacityMultipliedByHeight = opacity * height;
      // Avoid too big values
      const minDistanceSq = 1 / 1024 / 1024;
      for (let y = minY; y <= maxY; y++) {
        const rowValues = fieldValues[y];
        for (let x = minX; x <= maxX; x++) {
          const distanceSq = Math.max(minDistanceSq, behavior.distanceSq(x, y, cX, cY));
          // This is like a gaussian, but parametrized differently.
          rowValues[x] = operation(
            rowValues[x],
            opacityMultipliedByHeight * Math.exp(-distanceSq * logHeightDividedByRadiusSq)
          );
        }
      }
    }

    /**
     * Flood an area from a given location until a maximum field value is reached.
     * @param originX {float} in scene basis
     * @param originY {float} in scene basis
     * @param maximum {float} maximum field value to go through
     */
    prototype.floodFrom = function (originX, originY, maximum) {
      /** @type {Array<number[]>} */
      const fieldValues = this.scalarFieldValues;

      if (!this.marchingSquareFloodStackX) {
        this.marchingSquareFloodStackX = [];
      }
      if (!this.marchingSquareFloodStackY) {
        this.marchingSquareFloodStackY = [];
      }
      /** @type {Array<integer>} */
      const floodStackX = this.marchingSquareFloodStackX;
      /** @type {Array<integer>} */
      const floodStackY = this.marchingSquareFloodStackY;
      floodStackX.push(Math.round(this.convertToGridBasisX(originX)));
      floodStackY.push(Math.round(this.convertToGridBasisY(originY)));
      while (floodStackX.length > 0) {
        const x = floodStackX.pop();
        const y = floodStackY.pop();
        if (x < 0 || x >= this.dimX()
          || y < 0 || y >= this.dimY()) {
          continue;
        }
        const fieldValue = fieldValues[y][x];
        if (fieldValue < maximum) {
          fieldValues[y][x] = maximum;

          floodStackX.push(x - 1);
          floodStackY.push(y);

          floodStackX.push(x + 1);
          floodStackY.push(y);

          floodStackX.push(x);
          floodStackY.push(y - 1);

          floodStackX.push(x);
          floodStackY.push(y + 1);
        }
      }
    }

    /**
     * @param pointX {float} in scene basis
     * @param pointY {float} in scene basis
     * @return {boolean} true if the point is inside the contour
     */
    prototype.containsPoint = function (
      pointX,
      pointY,
    ) {
      /** @type {boolean} */
      const drawUnder = this._getFillOutside();

      // It's a bit more precise than the contour
      // so it's not completly accurate.
      return !drawUnder && this.getFieldValue(pointX, pointY) > this._getThreshold() ||
        drawUnder && this.getFieldValue(pointX, pointY) < this._getThreshold();
    }

    /**
     * Draw the field squares
     * @param minX {integer} left
     * @param minY {integer} top
     * @param maxX {integer} right
     * @param maxY {integer} bottom
     */
    prototype.drawField = function (
      minX,
      minY,
      maxX,
      maxY
    ) {
      /** @type {boolean} */
      const drawUnder = this._getFillOutside();

      /** @type {Array<number[]>} */
      const fieldValues = this.scalarFieldValues;

      const point = this.workingPoint;

      const shapePainter = this.owner;

      const fillOpacity = shapePainter.getFillOpacity();
      const outlineSize = shapePainter.getOutlineSize();

      // It draws bands and small polygons.
      // The coutline is in a second loop, it's more efficient
      // than switching the style constently.

      // fill
      if (fillOpacity !== 0) {
        shapePainter.setOutlineSize(0);
        for (let squareY = minY; squareY < maxY - 1; squareY++) {
          let first15SquareX = -1;
          for (let squareX = minX; squareX < maxX - 1; squareX++) {
            let squareIndex = this.getSquareIndex(squareX, squareY);
            if (drawUnder) {
              squareIndex = 15 - squareIndex;
            }

            if (first15SquareX === -1 && squareIndex === 15) {
              first15SquareX = squareX;
            }
            if (first15SquareX !== -1) {
              if (squareIndex !== 15) {
                shapePainter.drawRectangle(
                  this.convertFromGridBasisX(first15SquareX),
                  this.convertFromGridBasisY(squareY),
                  this.convertFromGridBasisX(squareX),
                  this.convertFromGridBasisY(squareY + 1)
                );
                first15SquareX = -1;
              }
              else if (squareX === maxX - 2) {
                shapePainter.drawRectangle(
                  this.convertFromGridBasisX(first15SquareX),
                  this.convertFromGridBasisY(squareY),
                  this.convertFromGridBasisX(squareX + 1),
                  this.convertFromGridBasisY(squareY + 1)
                );
                first15SquareX = -1;
              }
            }
            if (squareIndex !== 0) {
              let fillVertices = this.marchingSquaresFillVertices[squareIndex];
              this.calcPoint(fillVertices[0], squareX, squareY, point);
              shapePainter.beginFillPath(point[0], point[1]);
              for (let index = 1; index < fillVertices.length; index++) {
                this.calcPoint(fillVertices[index], squareX, squareY, point);
                shapePainter.drawPathLineTo(point[0], point[1]);
              }
              shapePainter.closePath();
              shapePainter.endFillPath();
            }
          }
        }
        shapePainter.setOutlineSize(outlineSize);
      }
      // outline
      if (outlineSize !== 0) {
        shapePainter.setFillOpacity(0);
        for (let squareY = minY; squareY < maxY - 1; squareY++) {
          for (let squareX = minX; squareX < maxX - 1; squareX++) {
            let squareIndex = this.getSquareIndex(squareX, squareY);
            if (drawUnder) {
              squareIndex = 15 - squareIndex;
            }

            if (squareIndex !== 0 && squareIndex !== 15) {
              for (let outlineVertices of this.marchingSquaresOutlineVertices[squareIndex]) {
                this.calcPoint(outlineVertices[0], squareX, squareY, point);
                shapePainter.beginFillPath(point[0], point[1]);
                for (let index = 1; index < outlineVertices.length; index++) {
                  this.calcPoint(outlineVertices[index], squareX, squareY, point);
                  shapePainter.drawPathLineTo(point[0], point[1]);
                }
                shapePainter.endFillPath();
              }
            }
          }
        }
        shapePainter.setFillOpacity(fillOpacity);
      }
    }

    /**
     * Update the field hitboxes
     * @param minX {integer} left
     * @param minY {integer} top
     * @param maxX {integer} right
     * @param maxY {integer} bottom
     */
    prototype.updateMarchingSquareHitboxes = function (
      minX,
      minY,
      maxX,
      maxY
    ) {
      /** @type {boolean} */
      const drawUnder = this._getFillOutside();

      /** @type {Array<number[]>} */
      const fieldValues = this.scalarFieldValues;

      const point = this.workingPoint;

      /** @type {gdjs.ShapePainterRuntimeObject} */
      const shapePainter = this.owner;

      // Move all Polygons to recycledPolygons
      if (this.recycledPolygons.length < shapePainter._defaultHitBoxes.length) {
        const swapPolygons = this.recycledPolygons;
        this.recycledPolygons = shapePainter._defaultHitBoxes;
        shapePainter._defaultHitBoxes = swapPolygons;
      }
      const hitboxes = shapePainter._defaultHitBoxes;
      this.recycledPolygons.push.apply(this, hitboxes);
      hitboxes.length = 0;

      for (let squareY = minY; squareY < maxY - 1; squareY++) {
        for (let squareX = minX; squareX < maxX - 1; squareX++) {
          let squareIndex = this.getSquareIndex(squareX, squareY);
          if (squareIndex === 0 || squareIndex === 15) {
            continue;
          }
          if (drawUnder) {
            squareIndex = 15 - squareIndex;
          }
          let fillVertices = this.marchingSquaresFillVertices[squareIndex];
          const polygon = this.recycledPolygons.length === 0 ? new gdjs.Polygon() : this.recycledPolygons.pop();
          polygon.vertices.length = fillVertices.length;
          for (let index = 0; index < fillVertices.length; index++) {
            this.calcPoint(fillVertices[index], squareX, squareY, point);
            polygon.vertices[index] = [point[0], point[1]];
          }
          hitboxes.push(polygon);
        }
      }
      shapePainter.hitBoxes = hitboxes;
      shapePainter.hitBoxesDirty = false;
      shapePainter.aabb.min[0] = this._getAreaLeftBound();
      shapePainter.aabb.min[1] = this._getAreaTopBound();
      shapePainter.aabb.max[0] = shapePainter.aabb.min[0] + this.dimX() * this._getCellWidth();
      shapePainter.aabb.max[1] = shapePainter.aabb.min[1] + this.dimY() * this._getCellHeight();

      // Hack for the "separate" action that calculates a bounding disk with dimensions.
      shapePainter.width = this.dimX() * this._getCellWidth();
      shapePainter.height = this.dimY() * this._getCellHeight();
      shapePainter.getWidth = function () {
        return this.width;
      }
      shapePainter.getHeight = function () {
        return this.height;
      }
    }
  }
}

};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.userFunc0x783338(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.userFunc0x77d008 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);

/** @type {float} */
const left = behavior._getAreaLeftBound();
/** @type {float} */
const top = behavior._getAreaTopBound();
/** @type {float} */
const right = behavior._getAreaRightBound() || game.getGameResolutionWidth();
/** @type {float} */
const bottom = behavior._getAreaBottomBound() || game.getGameResolutionHeight();
/** @type {float} */
const cellWidth = behavior._getCellWidth();
/** @type {float} */
const cellHeight = behavior._getCellHeight();

const dimX = 1 + Math.ceil((right - left) / cellWidth);
const dimY = 1 + Math.ceil((bottom - top) / cellHeight);

const oldDimX = behavior.dimX();
const oldDimY = behavior.dimY();

/** @type {Array<number[]>} */
const fieldValues = behavior.scalarFieldValues;

// Update the grid dimension if properties changed.
if (dimY !== oldDimY) {
    fieldValues.length = dimY;
}
for (let y = oldDimY; y < dimY; y++) {
    fieldValues[y] = new Array(dimX);
}
if (dimX !== behavior.dimX()) {
    for (let rowValues of fieldValues) {
        rowValues.length = dimX;
    }
}

// Fill the grid with 0
for (let rowValues of fieldValues) {
    for (let x = 0; x < rowValues.length; x++) {
        rowValues[x] = 0;
    }
}
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.userFunc0x77d008(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearField = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.userFunc0x77f840 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const originX = eventsFunctionContext.getArgument("OriginX");
const originY = eventsFunctionContext.getArgument("OriginY");
const maximum = eventsFunctionContext.getArgument("Maximum");

const behavior = objects[0].getBehavior(behaviorName);

behavior.floodFrom(originX, originY, maximum);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.userFunc0x77f840(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFrom = function(OriginX, OriginY, Maximum, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "OriginX") return OriginX;
if (argName === "OriginY") return OriginY;
if (argName === "Maximum") return Maximum;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.userFunc0x7d23d8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const a = eventsFunctionContext.getArgument("Coefficient");
const b = eventsFunctionContext.getArgument("Offset");

const behavior = objects[0].getBehavior(behaviorName);

/** @type {Array<number[]>} */
const fieldValues = behavior.scalarFieldValues;

for (let rowValues of fieldValues) {
    for (let x = 0; x < rowValues.length; x++) {
        rowValues[x] = a * rowValues[x] + b;
    }
}
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.userFunc0x7d23d8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformField = function(Coefficient, Offset, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Coefficient") return Coefficient;
if (argName === "Offset") return Offset;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.userFunc0x77d118 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const centerX = eventsFunctionContext.getArgument("CenterX");
const centerY = eventsFunctionContext.getArgument("CenterY");
const height = Math.max(1, eventsFunctionContext.getArgument("Height"));
const radius = eventsFunctionContext.getArgument("Radius");
const opacity = eventsFunctionContext.getArgument("Opacity");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");
const operation = gdjs.__marchingSquares.parseOperation(eventsFunctionContext.getArgument("Operation"));

const behavior = objects[0].getBehavior(behaviorName);

behavior.mergeHill(centerX, centerY, height, radius, opacity, cappingRadiusRatio, operation);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.userFunc0x77d118(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHill = function(CenterX, CenterY, Height, Radius, Opacity, CappingRadiusRatio, Operation, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CenterX") return CenterX;
if (argName === "CenterY") return CenterY;
if (argName === "Height") return Height;
if (argName === "Radius") return Radius;
if (argName === "Opacity") return Opacity;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
if (argName === "Operation") return Operation;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.userFunc0x785a20 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const centerX = eventsFunctionContext.getArgument("CenterX");
const centerY = eventsFunctionContext.getArgument("CenterY");
const radius = eventsFunctionContext.getArgument("Radius");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");
const operation = gdjs.__marchingSquares.parseOperation(eventsFunctionContext.getArgument("Operation"));

const behavior = objects[0].getBehavior(behaviorName);

behavior.mergeDisk(centerX, centerY, radius, cappingRadiusRatio, operation);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.userFunc0x785a20(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDisk = function(CenterX, CenterY, Radius, CappingRadiusRatio, Operation, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CenterX") return CenterX;
if (argName === "CenterY") return CenterY;
if (argName === "Radius") return Radius;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
if (argName === "Operation") return Operation;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.userFunc0x7d23d8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const centerX = eventsFunctionContext.getArgument("CenterX");
const centerY = eventsFunctionContext.getArgument("CenterY");
const radius = eventsFunctionContext.getArgument("Radius");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");
const cappingRadius = cappingRadiusRatio * radius;

const behavior = objects[0].getBehavior(behaviorName);

behavior.mergeDisk(centerX, centerY, radius, cappingRadiusRatio, (fieldValue, value) => Math.min(fieldValue, 1 / value));
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.userFunc0x7d23d8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDisk = function(CenterX, CenterY, Radius, CappingRadiusRatio, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CenterX") return CenterX;
if (argName === "CenterY") return CenterY;
if (argName === "Radius") return Radius;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.userFunc0x77d008 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const startX = eventsFunctionContext.getArgument("StartX");
const startY = eventsFunctionContext.getArgument("StartY");
const endX = eventsFunctionContext.getArgument("EndX");
const endY = eventsFunctionContext.getArgument("EndY");
const thickness = eventsFunctionContext.getArgument("Thickness");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");
const operation = gdjs.__marchingSquares.parseOperation(eventsFunctionContext.getArgument("Operation"));

const behavior = objects[0].getBehavior(behaviorName);

behavior.mergeSegment(startX, startY, endX, endY, thickness, cappingRadiusRatio, operation);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.userFunc0x77d008(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLine = function(StartX, StartY, EndX, EndY, Thickness, CappingRadiusRatio, Operation, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "StartX") return StartX;
if (argName === "StartY") return StartY;
if (argName === "EndX") return EndX;
if (argName === "EndY") return EndY;
if (argName === "Thickness") return Thickness;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
if (argName === "Operation") return Operation;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.userFunc0x7d23d8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const startX = eventsFunctionContext.getArgument("StartX");
const startY = eventsFunctionContext.getArgument("StartY");
const endX = eventsFunctionContext.getArgument("EndX");
const endY = eventsFunctionContext.getArgument("EndY");
const thickness = eventsFunctionContext.getArgument("Thickness");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");

const behavior = objects[0].getBehavior(behaviorName);

behavior.mergeSegment(startX, startY, endX, endY, thickness, cappingRadiusRatio, (fieldValue, value) => Math.min(fieldValue, 1 / value));
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.userFunc0x7d23d8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLine = function(StartX, StartY, EndX, EndY, Thickness, CappingRadiusRatio, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "StartX") return StartX;
if (argName === "StartY") return StartY;
if (argName === "EndX") return EndX;
if (argName === "EndY") return EndY;
if (argName === "Thickness") return Thickness;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDFieldObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.userFunc0x783128 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const fieldObjects = eventsFunctionContext.getObjects("FieldObject");
const fieldBehaviorName = eventsFunctionContext.getArgument("FieldBehavior");
const operation = gdjs.__marchingSquares.parseOperation(eventsFunctionContext.getArgument("Operation"));

const behavior = objects[0].getBehavior(behaviorName);

/** @type {Array<number[]>} */
const fieldValues = behavior.scalarFieldValues;

for (const fieldObject of fieldObjects) {
    const otherBehavior = fieldObject.getBehavior(behaviorName);
    if (!otherBehavior) {
        continue;
    }
    const otherFieldValues = otherBehavior.scalarFieldValues;

    for (let y = 0; y < fieldValues.length; y++) {
        const thisRowValues = fieldValues[y];
        const otherRowValues = otherFieldValues[y];
        for (let x = 0; x < thisRowValues.length; x++) {
            thisRowValues[x] = operation(thisRowValues[x], otherRowValues[x]);
        }
    }
}
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.userFunc0x783128(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeField = function(FieldObject, FieldBehavior, Operation, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FieldObject": FieldObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "FieldObject": gdjs.objectsListsToArray(FieldObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "FieldBehavior": FieldBehavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Operation") return Operation;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDFieldObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.userFunc0x789098 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const behavior = objects[0].getBehavior(behaviorName);

behavior.updateMarchingSquareHitboxes(0, 0, behavior.dimX(), behavior.dimY());
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.userFunc0x789098(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxes = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.userFunc0x789098 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const screenWidth = runtimeScene.getGame().getGameResolutionWidth();
const screenHeight = runtimeScene.getGame().getGameResolutionWidth();

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const object = objects[0];
const behavior = object.getBehavior(behaviorName);

if (behavior._behaviorData.MustOnlyDrawScreen) {
    const layer = runtimeScene.getLayer(object.getLayer());
    const screen1 = layer.convertCoords(0, 0);
    const screen2 = layer.convertCoords(screenWidth, 0);
    const screen3 = layer.convertCoords(0, screenHeight);
    const screen4 = layer.convertCoords(screenWidth, screenHeight);

    const screenLeft = Math.min(screen1[0], screen2[0], screen3[0], screen4[0]);
    const screenTop = Math.min(screen1[1], screen2[1], screen3[1], screen4[1]);
    const screenRight = Math.max(screen1[0], screen2[0], screen3[0], screen4[0]);
    const screenBottom = Math.max(screen1[1], screen2[1], screen3[1], screen4[1]);

    const minX = Math.max(0, Math.floor(behavior.convertToGridBasisX(screenLeft)));
    const minY = Math.max(0, Math.floor(behavior.convertToGridBasisY(screenTop)));
    // I don't know why the + 1 is needed
    const maxX = Math.min(behavior.dimX(), 1 + Math.ceil(behavior.convertToGridBasisX(screenRight)));
    const maxY = Math.min(behavior.dimY(), Math.ceil(behavior.convertToGridBasisY(screenBottom)));

    behavior.drawField(minX, minY, maxX, maxY);
}
else {
    // This is useful for static content or games without scrolling.
    behavior.drawField(0, 0, behavior.dimX(), behavior.dimY());
}
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.userFunc0x789098(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawField = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCellWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidth = function(CellWidth, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CellWidth") return CellWidth;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCellHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeight = function(CellHeight, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CellHeight") return CellHeight;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFillOutside(false);
}
}}

}


{


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.conditionTrue_1 = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition0IsTrue_0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("FillOutside") : false);
}
}if (gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFillOutside(true);
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutside = function(FillOutside, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "FillOutside") return FillOutside;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThreshold((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Threshold")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThreshold = function(Threshold, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Threshold") return Threshold;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaLeftBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LeftBound")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaLeftBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TopBound")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaLeftBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RightBound")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaLeftBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BottomBound")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBounds = function(LeftBound, TopBound, RightBound, BottomBound, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "LeftBound") return LeftBound;
if (argName === "TopBound") return TopBound;
if (argName === "RightBound") return RightBound;
if (argName === "BottomBound") return BottomBound;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaLeftBound()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeft = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaTopBound()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTop = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaRightBound()); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1);

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.conditionTrue_1 = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.condition0IsTrue_0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.conditionTrue_1.val = ((( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaLeftBound()) == (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaRightBound()));
}
}if (gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaLeftBound()) + gdjs.evtTools.window.getGameResolutionWidth(runtimeScene); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaBottomBound()); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1);

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.conditionTrue_1 = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.condition0IsTrue_0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.conditionTrue_1.val = ((( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaTopBound()) == (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaBottomBound()));
}
}if (gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaTopBound()) + gdjs.evtTools.window.getGameResolutionHeight(runtimeScene); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottom = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCellWidth()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidth = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCellHeight()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThreshold()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThreshold = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.userFunc0x789d20 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.getFieldNormal(pointX, pointY)[0];
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.userFunc0x789d20(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalX = function(PointX, PointY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.userFunc0x789d20 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.getFieldNormal(pointX, pointY)[1];
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.userFunc0x789d20(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalY = function(PointX, PointY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.userFunc0x789d20 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.getFieldNormal(pointX, pointY)[2];
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.userFunc0x789d20(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZ = function(PointX, PointY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.userFunc0x789d20 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.getFieldValue(pointX, pointY);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.userFunc0x789d20(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValue = function(PointX, PointY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects2= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1);

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFillOutside() ) {
        gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1[k] = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutside = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.userFunc0x789d20 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");
const value = eventsFunctionContext.getArgument("Value");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.getFieldValue(pointX, pointY) > value;
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.userFunc0x789d20(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValue = function(PointX, PointY, Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1= [];

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.userFunc0x789d20 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.containsPoint(pointX, pointY);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.userFunc0x789d20(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPoint = function(PointX, PointY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("MarchingSquares::MarchingSquaresBehavior", gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior);
