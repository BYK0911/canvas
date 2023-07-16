export interface IPainter {
  type: string;
  size: number;
  color?: string;
  force?: number;
  [index: string]: unknown;
}