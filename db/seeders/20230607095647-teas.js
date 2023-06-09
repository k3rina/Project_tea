"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const seed = [
      {
        name: "Ройбуш",
        location: "Африка",
        image:
          "https://teateachay.ru/ssl/u/1f/34837eb37a11e4a86198ff669099b4/-/%D0%A0%D0%BE%D0%B9%D0%B1%D1%83%D1%88%20%28%D1%80%D0%BE%D0%B9%D0%B1%D1%83%D1%81%29%20%D0%BD%D0%B0%D1%82%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9.jpg",
        description:
          "Африканский напиток из стеблей и листьев аспалатуса, низкого колючего кустарника. Это напиток без кофеина, чуть сладковатый и очень травянистый на вкус. ",
        map: "-33.919785 18.425596",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Мате",
        location: "Аргентина",
        image:
          "https://sunmag.me/wp-content/uploads/2021/03/sunmag-2-mate-polza-i-vred-napitka-dlya-organizma.jpg",
        description:
          "Напиток из листьев парагвайского дуба — травянистый, плотный, густой, с высоким содержанием матеина (тот же кофеин).",
        map: "-22.952584 -58.491177",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Каркаде",
        location: " Судан",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAw1t_HzN4fvDigvq6ad6H_3sYPf6MDh9sYA&usqp=CAU",
        description:
          "Отвар цветов гибискуса, напоминает компот. Имеет ярко-красный цвет, кисло-сладкий вкус, тонизирует за счет высокого содержания витамина С, а не кофеина.",
        map: "17.977449 30.296725",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Травяной",
        location: "Россия",
        image:
          "https://7cups.ru/images/thumbnails/1024/755/detailed/4/17148.jpg",
        description:
          "Цветки ромашки и зверобоя, тимьян, душица, зеленый базилик, листья малины и смородины — какие только травы не годятся для напитка! Список трав, подходящих для заваривания, никогда не будет полным. Но все это, строго говоря, особый вид чая, который называют отваром, или фиточаем. И у разных сборов будут разные полезные свойства!",
        map: "67.236783 95.968486",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Имбирный",
        location: "Юго-Восточная Азия",
        image: "https://www.teanadin.ru/UserFiles/Image/img116_38297_big.jpg",
        description:
          "Часто основу для отвара составляет корень имбиря с добавлением трав и ягод. Острый, пряный, ароматный напиток с противовоспалительным эффектом.",
        map: "1.356218 103.808308",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Фруктово-ягодный",
        location: "Малайзия",
        image:
          "https://samovartime.ru/image/catalog/%20%D1%81%D0%B0%D0%B9%D1%82/1596647370.jpg",
        description:
          "Здесь в основе напитка подсушенные цитрусовые, яблоки, ягоды (от барбариса до клубники), сублимированная слива, реже — порошок из сушеных плодов.",
        map: "3.749270 102.157932",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Гречишный",
        location: "Китай",
        image:
          "https://aromatcofe.ru/wa-data/public/shop/products/80/38/3880/images/7801/7801.750x0.jpg",
        description:
          "Заваривается не из привычной нам гречки, а из татарской черной гречихи. Вкус ее более нежный и мягкий, чем у гречки «на кашу». Родом этот напиток из Китая, и ценят его больше всего за пользу для организма.  ",
        map: "53.33 123.16",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Синий",
        location: "Авсралия",
        image:
          "https://chai-chai.ru/4020-large_default/tajskij-sinij-chaj-anchan.jpg",
        description:
          "Синий чай изготавливают из бутонов синей лианы.Самое необычное, что может делать этот напиток, это менять свой цвет. Если добавить в него дольку или сок лимона, синий чай станет фиолетовым.",
        map: "-25.694776 133.795393",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Белый",
        location: "Китай",
        image:
          "https://domhu.ru/upload/iblock/3cd/3cd264097ad3acea791814d5d482edf1.jpg",
        description:
          "Элитный сорт китайского белого чая. Его отличает внешний вид – листочки скручены в маленькие жемчужины, которые красиво раскрываются в горячей воде.",
        map: "39.901850 116.391441",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Матча",
        location: "Япония",
        image:
          "https://pirogeevo.ru/wp-content/uploads/2018/11/match-tea-2.jpg",

        description:
          "Матча – настоящий концентрат полезных веществ, поскольку его пьют вместе с заваркой. Он обладает бодрящим эффектом, ускоряет обмен веществ.Выглядит сорт необычно – в упаковке находится ярко-зеленая пудра. За такой окрас его часто называют нефритовым напитком.",
        map: "36.724510 139.268181",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Рухуна",
        location: "Шри-Ланка",
        image:
          "https://coffeestate.ru/upload/resize_cache/iblock/0e6/340_340_140cd750bba9870f18aada2478b24840a/0e6bc02ecf4eeda6ca89687d80f571cb.jpg",
        description:
          "Сорт чая, известный самым красивым рубиновым цветом экстракта. Каждый глоток обжигающего напитка раскрывается крепостью вкуса и насыщенным ароматом чернослива.",
        map: "7.612990 80.704933",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Хэй Ча",
        location: "Тибет",
        image:
          "https://cdn.teaworkshop.ru/media/cache/sylius_shop_api/93/f6/d5d68f02be74a9d3da20fc66b49a.jpeg",
        description:
          "Процесс приготовления этого чая сродни приготовлению вина. После влажного скирдования чайного листа в нем запускаются процессы брожения, проходит длительная ферментация, и не менее длительная сушка. Только в нем единственном на разломе брикета есть та самая благородная золотая плесень с золотисто-желтым  блеском, которая и делает этот черный чай совершенно особенным.",
        map: "31.518361 88.408534",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Улун",
        location: "Китай",
        image:
          "https://resizer.mail.ru/p/8334aa0c-a48c-5132-b4dc-51150dd8624f/AAAcaFNatSdrDTDK07yj7BLSKR706RWq0qZzDo97RKattcN2clHBkdqCaVl3pQz4Z6hAdSN2Y6yKlI_KaRME8pCc9ok.jpg",
        description:
          "Этот вид чая что-то между красным и зеленым чаем. Своим 'букетом' улун чай напоминает зеленые чаи, а насыщенностью вкуса – черные.",
        map: "19.184717 109.718522",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Кенийский",
        location: "Кения",
        image:
          "https://planet-coffee.ru/thumb/2/hfmthylngItQCADSTwCO7w/580r450/d/k5.jpg",
        description:
          "Кенийский чай отличается нежным, тонким ароматом, удивительной насыщенностью и особой полнотой янтарного настоя, вкус которого невозможно забыть. Поскольку все кенийские плантации расположены на высоте 1500-2700 м над уровнем моря, то эти чаи обладают не только тонким ароматом, свойственным высокогорным чаям, но и ценятся во всем мире как экологически чистые.",
        map: "1.661923 37.716549",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Гранатовый",
        location: "Турция",
        image:
          "https://i.pinimg.com/736x/60/27/8d/60278d188e89b9c751c167e81df0fd13.jpg",
        description:
          "Гранатовый чай имеет и другое название – турецкий. Родом он происходит именно из этой страны. В России он пока не так популярен, как зеленый и черный чай, однако почитателей у него немало. Чай, заваренный из граната, пили еще в античности. Известно, что он был любимым напитком Аристотеля.",
        map: "39.056256 35.302075",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Teas", seed);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Teas", null, {});
  },
};
