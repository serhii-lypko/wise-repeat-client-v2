import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

export default function Charts({ data }: any) {
  const options = {
    responsive: true,
  };

  const labels = data.map((d: any) => d.label);

  const dataToRender = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: data.map((d: any) => d.val),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <span>Charts</span>

      <div className="max-h-96">
        <Line options={options} data={dataToRender} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://wr-api.sl-tech-playground.com`);
  const data = await res.json();

  const toRender = data.map((pair: any) => {
    return {
      label: pair.eng,
      val: pair.eng.length,
    };
  });

  return { props: { data: toRender } };
}
