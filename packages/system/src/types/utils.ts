export enum Position {
  Left = 'left',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
}

export const oppositePosition = {
  [Position.Left]: Position.Right,
  [Position.Right]: Position.Left,
  [Position.Top]: Position.Bottom,
  [Position.Bottom]: Position.Top,
};

export type XYPosition = {
  x: number;
  y: number;
};

export type XYZPosition = XYPosition & { z: number };

export type Dimensions = {
  width: number;
  height: number;
};

export type Rect = Dimensions & XYPosition;

export type Box = XYPosition & {
  x2: number;
  y2: number;
};

export type Transform = [number, number, number];

export type CoordinateExtent = [[number, number], [number, number]];
