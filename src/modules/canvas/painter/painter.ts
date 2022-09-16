export interface IPainter {
  type: string;
  size: number;
  color: string;
  [index: string]: unknown;
}