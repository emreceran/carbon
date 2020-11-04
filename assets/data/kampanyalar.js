import React, { useState } from 'react';








const KAMPAN = [
  
  {
    id: '1',
    firma: "SANDOZ",
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
  {
    id: '2',
    firma: "Bilim İlaç",
    img:require("../firmalar/bilim.jpg"),
    bas: "20-11-2022",
    bit: "2020-12-01",
    akalansaat: 28,
    akalangun: 1,
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
  {
    id: '3',
    firma: "İlko",
    img:require("../firmalar/bilim.jpg"),
    bas: "20-09-2020",
    bit: "2021-10-20",
    akalansaat: 38,
    akalangun: 2,
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
  {
    id: '4',
    firma: "Abbott",
    img: require("../firmalar/abbott.jpg"),
    bas: "22-11-2020",
    bit: "2020-10-20",
    akalansaat: 38,
    akalangun: 2,
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
  {
    id: '5',
    firma: "Roche",
    img:require("../firmalar/roche.jpg"),
    bas: "2020-10-19",
    bit: "20-10-2020",
    akalansaat: 48,
    akalangun: 3,
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



export default KAMPAN;


