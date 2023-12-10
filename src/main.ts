import "./style.scss";
import {
  ArcRotateCamera,
  Engine,
  GaussianSplatting,
  Scene,
  Vector3,
} from "@babylonjs/core";

import splatPath from "../assets/model.splat?url";

const main = async () => {
  const renderCanvas = document.getElementById(
    "renderCanvas"
  ) as HTMLCanvasElement | null;
  if (!renderCanvas) {
    return;
  }

  const engine = new Engine(renderCanvas, true);
  const scene = new Scene(engine);

  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 2,
    Math.PI / 2,
    3.0,
    Vector3.Zero(),
    scene,
    true
  );
  camera.attachControl();

  new GaussianSplatting("splatting", scene).loadFileAsync(splatPath);

  window.addEventListener("resize", () => engine.resize());
  engine.runRenderLoop(() => scene.render());
};

main();
