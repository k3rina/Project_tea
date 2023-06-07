ymaps.ready(init);
function init() {
  const myMap = new ymaps.Map(
    'map',
    {
      center: [0, 0],
      zoom: 2,
    },
    {
      minZoom: 2,
    },
    {
      searchControlProvider: 'yandex#search',
    }
  );
  myFisrt = new ymaps.GeoObject({
    // Описание геометрии.
    geometry: {
      type: 'Point',
      coordinates: [55.8, 37.8],
    },
    // Свойства.
    properties: {
      // Контент метки.
      iconContent: 'Я тащусь',
      hintContent: '<a href = "yandex.ru">Рога и копыта</a><br>',
    },
  });
  myMap.geoObjects.add(myFisrt);

  mySecond = new ymaps.GeoObject({
    // Описание геометрии.
    geometry: {
      type: 'Point',
      coordinates: [20, 20],
    },
    // Свойства.
    properties: {
      // Контент метки.
      iconContent: 'Я тащусь',
      hintContent: '<a href = "google.com">Рога и копыта</a><br>',
    },
  });
  myMap.geoObjects.add(mySecond);
  // }
  // const first = new ymaps.Map(
  //   "map",
  //   {
  //     center: [0, 0],
  //     zoom: 2,
  //     controls: [],
  //   },
  //   {
  //     searchControlProvider: "yandex#search",
  //   }
  // );

  // const placemark = new ymaps.Placemark(first.getCenter(), {
  //   // Зададим содержимое заголовка балуна.
  //   balloonContentHeader:
  //     '<a href = "yandex.ru">Рога и копыта</a><br>' +
  //     '<span class="description">Сеть кинотеатров</span>',
  //   // Зададим содержимое основной части балуна.
  //   balloonContentBody:
  //     '<img src="img/cinema.jpg" height="150" width="200"> <br/> ' +
  //     '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
  //     "<b>Ближайшие сеансы</b> <br/> Сеансов нет.",
  //   // Зададим содержимое нижней части балуна.
  //   balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
  //   // Зададим содержимое всплывающей подсказки.
  //   hintContent: "Рога и копыта",
  // });
  // // Добавим метку на карту.
  // myMap.geoObjects.add(placemark);
  // // Откроем балун на метке.
  // placemark.balloon.open;

  // //   const myMap = new ymaps.Map(
  // //     "map",
  // //     {
  // //       center: [0, 0],
  // //       zoom: 2,
  // //     },
  // //     {
  // //       searchControlProvider: "yandex#search",
  // //     }
  // //   );
  // //   myGeoObject = new ymaps.GeoObject({
  // //     // Описание геометрии.
  // //     geometry: {
  // //       type: "Point",
  // //       coordinates: [55.8, 37.8],
  // //     },
  // //     // Свойства.
  // //     properties: {
  // //       // Контент метки.
  // //       iconContent: "Я тащусь",
  // //       hintContent: "Ну давай уже тащи",
  // //     },
  // //   });
  // //   myMap.geoObjects.add(myGeoObject);
  // // }
  // // const mySss = new ymaps.Map(
  // //   "Sss",
  // //   {
  // //     coordinates: [55.8, 37.8],
  // //     // center: [20, 20],
  // //   },
  // //   {
  // //     searchControlProvider: "yandex#search",
  // //   }
  // // );

  // // const placemark2 = new ymaps.Placemark(mySss.getCenter(), {
  // //   // Зададим содержимое заголовка балуна.
  // //   balloonContentHeader:
  // //     '<a href = "yandex.ru">rrrrrrrrrrrrr</a><br>' +
  // //     '<span class="description">Сеть кинотеатров</span>',
  // //   // Зададим содержимое основной части балуна.
  // //   balloonContentBody:
  // //     '<img src="img/cinema.jpg" height="150" width="200"> <br/> ' +
  // //     '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
  // //     "<b>Ближайшие сеансы</b> <br/> Сеансов нет.",
  // //   // Зададим содержимое нижней части балуна.
  // //   balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
  // //   // Зададим содержимое всплывающей подсказки.
  // //   hintContent: "5643463563543663",
  // // });
  // // // Добавим метку на карту.
  // // myMap.geoObjects.add(placemark2);
  // // // Откроем балун на метке.
  // // placemark2.balloon.open();
}
