type TCircle = {
  shape: "circle";
  radius: number;
};

type TRectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

const calculateShapeArea = (data: TCircle | TRectangle): void => {
  let area: number = 0;
  if (data?.shape === "circle") {
    area = Math.PI * Math.pow(data?.radius, 2);
  } else if (data?.shape === "rectangle") {
    area = data?.width * data?.height;
  }

  if (Number.isInteger(area)) {
    console.log(area);
  } else {
    console.log(area.toFixed(2));
  }
};
