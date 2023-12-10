import "./style.scss";

const main = () => {
  const renderCanvas = document.getElementById(
    "renderCanvas"
  ) as HTMLCanvasElement | null;
  if (!renderCanvas) {
    return;
  }

  console.log("Hello");
};

main();
