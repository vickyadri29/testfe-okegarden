import minamalisImg from "./assets/information/minimalis.png";
import dryImg from "./assets/information/dry.png";
import tropicalImg from "./assets/information/tropical.png";

export const DateTime = {
  times: [
    {
      id: 1,
      time: "09.00",
    },
    {
      id: 2,
      time: "13.00",
    },
    {
      id: 3,
      time: "10.00",
    },
    {
      id: 4,
      time: "14.00",
    },
    {
      id: 5,
      time: "11.00",
    },
    {
      id: 6,
      time: "15.00",
    },
    {
      id: 7,
      time: "12.00",
    },
    {
      id: 8,
      time: "16.00",
    },
  ],
};

export const DataInformation = {
  gardenLand: [
    {
      id: 1,
      land: '1 Lahan Taman'
    },
    {
      id: 2,
      land: '2 Lahan Taman'
    },
    {
      id: 3,
      land: 'Lebih dari 2 Lahan Taman'
    }
  ],
  gardenTheme: [
    {
      id: 1,
      img: minamalisImg,
      title: "Taman Minimalis",
      desc: "Taman yang indah dilahan yang sempit",
      choose: "Pilih",
    },
    {
      id: 2,
      img: dryImg,
      title: "Taman Kering",
      desc: "Taman yang dirancang untuk menghasilkan suasana alam didalam dan diluar rumah",
      choose: "Pilih",
    },
    {
      id: 3,
      img: tropicalImg,
      title: "Taman Tropis",
      desc: "Taman yang paling sesuai dengan iklim di Indonesia",
      choose: "Pilih",
    },
  ],
  estimate: [
    {
      id: 1,
      size: '<10m2'
    },
    {
      id: 2,
      size: '11-20m2'
    },
    {
      id: 3,
      size: '21-30m2'
    },
    {
      id: 4,
      size: '31-40m2'
    },
    {
      id: 5,
      size: '41-50m2'
    },
    {
      id: 6,
      size: '51-60m2'
    },
    {
      id: 7,
      size: '>100m2'
    },
  ]
};
