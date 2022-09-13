export default abstract class Layer {
  abstract readonly type: string;
  abstract draw (ctx: CanvasRenderingContext2D): void
}