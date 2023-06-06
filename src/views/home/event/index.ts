import Canvas from "@/modules/canvas";
import panzoom from "./panzoom";
import draw from "./draw";
import buket from "./buket";

export default function (cvs: Canvas): void {
  draw(cvs)
  panzoom(cvs)
  buket(cvs)
}