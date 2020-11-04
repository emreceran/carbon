import React, { useState } from 'react';








const KAMPAN = [
  
  {
    id: '1',
    firma: "Sandoz",
    img:require("../assets/firmalar/sandoz.jpg"),
    bas: "2021-11-20",
    bit: "2021-12-20",
    akalansaat: 8,
    akalangun: 0,
    kamp: [
      {
        ilacid: 10,
        ilacname: "asprin1",
        odeme: "50+25",
        odemeler: [         
            {kosul:"5+1"},
            {kosul: "10+3"},
            {kosul: "20+8"},
            {kosul: "50+25"},
        ],

      },
      {
        ilacid: 1,
        ilacname: "asprin1",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 2,
        ilacname: "asprin2",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 3,
        ilacname: "asprin3",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      }, 
      {
        ilacid: 4,
        ilacname: "asprin4",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 5,
        ilacname: "asprin5",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 6,
        ilacname: "asprin5",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
    ],
  },
  {
    id: '2',
    firma: "Bilim İlaç",
    img:require("../assets/firmalar/bilim.jpg"),
    bas: "20-11-2022",
    bit: "2020-12-01",
    akalansaat: 28,
    akalangun: 1,
    kamp: [
      {
        ilacid: 10,
        ilacname: "asprin1",
        odeme: "50+25",
        odemeler: [         
            {kosul:"5+1"},
            {kosul: "10+3"},
            {kosul: "20+8"},
            {kosul: "50+25"},
        ],

      },
      {
        ilacid: 1,
        ilacname: "asprin1",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 2,
        ilacname: "asprin2",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 3,
        ilacname: "asprin3",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 4,
        ilacname: "asprin4",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 5,
        ilacname: "asprin5",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 6,
        ilacname: "asprin5",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
    ],
  },
  {
    id: '3',
    firma: "İlko",
    img:require("../assets/firmalar/bilim.jpg"),
    bas: "20-09-2020",
    bit: "2021-10-20",
    akalansaat: 38,
    akalangun: 2,
    kamp: [
      {
        ilacid: 10,
        ilacname: "asprin1",
        odeme: "50+25",
        odemeler: [         
            {kosul:"5+1"},
            {kosul: "10+3"},
            {kosul: "20+8"},
            {kosul: "50+25"},
        ],

      },
      {
        ilacid: 1,
        ilacname: "asprin1",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 2,
        ilacname: "asprin2",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 3,
        ilacname: "asprin3",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 4,
        ilacname: "asprin4",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 5,
        ilacname: "asprin5",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 6,
        ilacname: "asprin5",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
    ],
  },
  {
    id: '4',
    firma: "Abbott",
    img: require("../assets/firmalar/abbott.jpg"),
    bas: "22-11-2020",
    bit: "2020-10-20",
    akalansaat: 38,
    akalangun: 2,
    kamp: [
      {
        ilacid: 10,
        ilacname: "asprin1",
        odeme: "50+25",
        odemeler: [         
            {kosul:"5+1"},
            {kosul: "10+3"},
            {kosul: "20+8"},
            {kosul: "50+25"},
        ],

      },
      {
        ilacid: 1,
        ilacname: "asprin1",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 2,
        ilacname: "asprin2",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 3,
        ilacname: "asprin3",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 4,
        ilacname: "asprin4",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 5,
        ilacname: "asprin5",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 6,
        ilacname: "asprin5",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
    ],
  },
  {
    id: '5',
    firma: "Roche",
    img:require("../assets/firmalar/roche.jpg"),
    bas: "2020-10-19",
    bit: "20-10-2020",
    akalansaat: 48,
    akalangun: 3,
    kamp: [
      {
        ilacid: 10,
        ilacname: "asprin1",
        odeme: "50+25",
        odemeler: [         
            {kosul:"5+1"},
            {kosul: "10+3"},
            {kosul: "20+8"},
            {kosul: "50+25"},
        ],

      },
      {
        ilacid: 1,
        ilacname: "asprin1",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 2,
        ilacname: "asprin2",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 3,
        ilacname: "asprin3",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 4,
        ilacname: "asprin4",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 5,
        ilacname: "asprin5",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
      {
        ilacid: 6,
        ilacname: "asprin5",
        odeme: "50+25",
        odemeler: [         
          {kosul:"5+1"},
          {kosul: "10+3"},
          {kosul: "20+8"},
          {kosul: "50+25"},
      ],

      },
    ],
  },
];
export default KAMPAN;
