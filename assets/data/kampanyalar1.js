import React, { useState } from 'react';








const KAMPAN1 = [
  
  {
    id: '0',
    firma: "ceran",
    img:require("../firmalar/sandoz.jpg"),
    bas: "2021-11-20",
    bit: "2021-12-20",
    akalansaat: 8,
    akalangun: 0,
    kamp: [
      {
        ilacid: 10,
        ilacname: "Acidpass 12 Çiğneme Tableti",
        ilacfoto :require('../haplar/acidpass.png'),
        odeme: "50 + 25",
        odemeler: [         
            {kosul:5,mf:1},
            {kosul:10, mf:3},
            {kosul:20, mf:8},
            {kosul:50, mf:25},
        ],

      },
      {
        ilacid: 1,
        ilacname: "Alecast 10 Mg 28 Film Tablet",
        
        ilacfoto: require('../haplar/alecast.png'),
        odeme: "50 + 25",
        odemeler: [         
            {kosul:5,mf:1},
            {kosul:10, mf:3},
            {kosul:20, mf:8},
            {kosul:50, mf:25},
        ],
      },
      {
        ilacid: 2,
        ilacname: "Alerinit 5 Mg 20 Film Tablet",
        ilacfoto: require('../haplar/alerinit.png'),
        odeme: "50 + 25",
        odemeler: [         
            {kosul:5,mf:1},
            {kosul:10, mf:3},
            {kosul:20, mf:8},
            {kosul:50, mf:25},
        ],

      },
      {
        ilacid: 3,
        ilacname: "Alfazan 600 Mg 30 Film Tablet",
        ilacfoto: require('../haplar/alfazan.png'),
        odeme: "50 + 25",
        odemeler: [         
            {kosul:5,mf:1},
            {kosul:10, mf:3},
            {kosul:20, mf:8},
            {kosul:50, mf:25},
        ],

      },
      {
        ilacid: 4,
        ilacname: "Algopet 100 Mg 15 Film Tablet",
        ilacfoto: require('../haplar/algopet.png'),
        odeme: "50 + 25",
        odemeler: [         
            {kosul:5,mf:1},
            {kosul:10, mf:3},
            {kosul:20, mf:8},
            {kosul:50, mf:25},
        ],

      },
      
    ],
  },
];



export default KAMPAN1;


