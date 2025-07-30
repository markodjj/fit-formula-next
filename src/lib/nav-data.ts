const navListData = [
  // {
  //     _id: 1,
  //     path: 'home',
  //     name: 'Home',
  //     icon: '',
  //     active: true,
  //     submenu: null
  // },
  {
    _id: 2,
    path: "/plan",
    name: "Plan Ishrane",
    icon: "",
    active: false,
    submenu: [
      // {name: 'Kalkulator Kalorija', path: '/calculator/kalorije-kalkulator'},
      // {name: 'BMR kalkulator', path: '/calculator/bmr-kalkulator'},
      // {name: 'TDEE kalkulator', path: '/calculator/tdee-kalkulator'},
      { name: "Kalkulator Kalorija", path: "/calculator/kalorije-kalkulator" },
      { name: "BMR kalkulator", path: "/calculator/bmr-kalkulator" },
      { name: "TDEE kalkulator", path: "/calculator/tdee-kalkulator" },
    ],
  },
  {
    _id: 3,
    path: "/tablica",
    name: "Tablica Kalorija",
    icon: "",
    active: false,
    submenu: [
      { name: "Meso", path: "/tablica/meso" },
      { name: "Žitarice", path: "/tablica/zitarice" },
      { name: "Povrće", path: "/tablica/povrce" },
      { name: "Voće", path: "/tablica/voce" },
      { name: "Jaja", path: "/tablica/jaja" },
      { name: "Riba", path: "/tablica/riba" },
      { name: "Mlečni proizvodi", path: "/tablica/mlecni-proizvodi" },
    ],
  },
  {
    _id: 4,
    path: "/article",
    name: "Artikli",
    icon: "",
    active: false,
    // submenu: [
    //     {name: 'Meso', path: '/article/meso'},
    //     {name: 'Žitarice', path: '/article/zitarice'},
    //     {name: 'Povrće', path: '/article/povrce'},
    //     {name: 'Voće', path: '/article/voce'},
    //     {name: 'Jaja', path: '/article/jaja'},
    //     {name: 'Riba', path: '/article/riba'},
    //     {name: 'Mlečni proizvodi', path: '/article/mlecni-proizvodi'}
    // ]
  },
  {
    _id: 5,
    path: "/uporedi",
    name: "Uporedi vrednosti",
    icon: "",
    active: false,
    submenu: null,
  },
  {
    _id: 6,
    path: "/onama",
    name: "O nama",
    icon: "",
    active: false,
    submenu: null,
  },
];

export default navListData; 