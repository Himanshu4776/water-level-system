import { useAtom } from "jotai";
import { level1, level2, level3, level4 } from "./atoms";
import { useEffect } from "react";

export interface ContainerProps {
  id: string;
}

export function Container({ id }: ContainerProps) {
  const [initialLevel1, setLevel1] = useAtom(level1);
  const [initialLevel2, setLevel2] = useAtom(level2);
  const [initialLevel3, setLevel3] = useAtom(level3);
  const [initialLevel4, setLevel4] = useAtom(level4);

  function AddWater(id: string) {
    console.log("called", id);

    if (id === "1") {
      if (initialLevel1 <= 80) {
        setLevel1(initialLevel1 + 20);
      }
      console.log("1", initialLevel1);
    } else if (id === "2") {
      if (initialLevel2 <= 80) {
        setLevel2(initialLevel2 + 20);
      }
      console.log("2", initialLevel2);
    } else if (id === "3") {
      if (initialLevel3 <= 80) {
        setLevel3(initialLevel3 + 20);
      }
      console.log("3", initialLevel3);
    } else if (id === "4") {
      if (initialLevel4 <= 80) {
        setLevel4(initialLevel4 + 20);
      }
      console.log("4", initialLevel4);
    }
  }

  function EmptyWater(id: string) {
    console.log("Empty called", id);

    if (id === "1") {
      setLevel1(0);
    } else if (id === "2") {
      setLevel2(0);
    } else if (id === "3") {
      setLevel3(0);
    } else if (id === "4") {
      setLevel4(0);
    }
  }

  let height = 0;
  if (id === "1") {
    height = initialLevel1;
  } else if (id === "2") {
    height = initialLevel2;
  } else if (id === "3") {
    height = initialLevel3;
  } else if (id === "4") {
    height = initialLevel4;
  }

  function calculateAverage(
    num1: number,
    num2: number,
    num3: number,
    num4: number,
  ) {
    const sum = num1 + num2 + num3 + num4;
    const average = sum / 4;
    return average;
  }

  let minValue = calculateAverage(
    initialLevel1,
    initialLevel2,
    initialLevel3,
    initialLevel4,
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Decrease the count value by 1 every second if greater
      // increase the count value by 1 every second if greater
      if (initialLevel1 > minValue && minValue >= 0) {
        setLevel1((initialLevel1) => initialLevel1 - 2.5);
        console.log("set 1", initialLevel1);
      } else if (initialLevel1 < minValue) {
        setLevel1((initialLevel1) => initialLevel1 + 2.5);
      }

      if (initialLevel2 > minValue && minValue >= 0) {
        setLevel2((initialLevel2) => initialLevel2 - 2.5);
        console.log("set 2", initialLevel2);
      } else if (initialLevel2 < minValue) {
        setLevel2((initialLevel2) => initialLevel2 + 2.5);
      }

      if (initialLevel3 > minValue && minValue >= 0) {
        setLevel3((initialLevel3) => initialLevel3 - 2.5);
        console.log("set 3", initialLevel3);
      } else if (initialLevel3 < minValue) {
        setLevel3((initialLevel3) => initialLevel3 + 2.5);
      }

      if (initialLevel4 > minValue && minValue >= 0) {
        setLevel4((initialLevel4) => initialLevel4 - 2.5);
        console.log("set 4", initialLevel4);
      } else if (initialLevel4 < minValue) {
        setLevel4((initialLevel4) => initialLevel4 + 2.5);
      }
    }, 1000);
    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [minValue, initialLevel1, initialLevel2, initialLevel3, initialLevel4]);

  return (
    <div
      className="container"
      id={id}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <button className="GreenButton" onClick={() => AddWater(id)}>
        Add
      </button>
      <button className="RedButton" onClick={() => EmptyWater(id)}>
        Empty
      </button>
      <div
        id={`inner-${id}`}
        style={{
          border: "1px solid grey",
          backgroundColor: "lightblue",
          height: "100px",
        }}
      >
        <div
          key={id}
          style={{
            height: `${100 - height}px`,
            backgroundColor: "white",
            maxHeight: "100px",
            minHeight: "0px",
          }}
        ></div>
      </div>
    </div>
  );
}
