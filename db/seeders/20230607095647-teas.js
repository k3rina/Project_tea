"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const seed = [
      {
        name: "Ройбуш",
        location: "Африка",
        image: "OIP.jpg",
        description:
          "Африканский напиток из стеблей и листьев аспалатуса, низкого колючего кустарника. Это напиток без кофеина, чуть сладковатый и очень травянистый на вкус. ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Мате",
        location: "Аргентина",
        image: "OIP.jpg",
        description:
          "Напиток из листьев парагвайского дуба — травянистый, плотный, густой, с высоким содержанием матеина (тот же кофеин).",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Каркаде",
        location: " Судан",
        image: "OIP.jpg",
        description:
          "Отвар цветов гибискуса, напоминает компот. Имеет ярко-красный цвет, кисло-сладкий вкус, тонизирует за счет высокого содержания витамина С, а не кофеина.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Травяной",
        location: "Россия",
        image: "OIP.jpg",
        description:
          "Цветки ромашки и зверобоя, тимьян, душица, зеленый базилик, листья малины и смородины — какие только травы не годятся для напитка! Список трав, подходящих для заваривания, никогда не будет полным. Но все это, строго говоря, особый вид чая, который называют отваром, или фиточаем. И у разных сборов будут разные полезные свойства!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Имбирный",
        location: "Юго-Восточная Азия",
        image: "OIP.jpg",
        description:
          "Часто основу для отвара составляет корень имбиря с добавлением трав и ягод. Острый, пряный, ароматный напиток с противовоспалительным эффектом.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Фруктово-ягодный",
        location: "Малайзия",
        image: "OIP.jpg",
        description:
          "Здесь в основе напитка подсушенные цитрусовые, яблоки, ягоды (от барбариса до клубники), сублимированная слива, реже — порошок из сушеных плодов.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Гречишный",
        location: "Китай",
        image: "OIP.jpg",
        description:
          "Заваривается не из привычной нам гречки, а из татарской черной гречихи. Вкус ее более нежный и мягкий, чем у гречки «на кашу». Родом этот напиток из Китая, и ценят его больше всего за пользу для организма.  ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Синий",
        location: "Австралия",
        image: "OIP.jpg",
        description:
          "Синий чай изготавливают из бутонов синей лианы.Самое необычное, что может делать этот напиток, это менять свой цвет. Если добавить в него дольку или сок лимона, синий чай станет фиолетовым.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Белый",
        location: "Китай",
        image: "OIP.jpg",
        description:
          "Элитный сорт китайского белого чая. Его отличает внешний вид – листочки скручены в маленькие жемчужины, которые красиво раскрываются в горячей воде.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Матча",
        location: "Япония",
        image: "OIP.jpg",
        description:
          "Матча – настоящий концентрат полезных веществ, поскольку его пьют вместе с заваркой. Он обладает бодрящим эффектом, ускоряет обмен веществ.Выглядит сорт необычно – в упаковке находится ярко-зеленая пудра. За такой окрас его часто называют нефритовым напитком.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Рухуна",
        location: "Шри-Ланка",
        image: "OIP.jpg",
        description:
          "Сорт чая, известный самым красивым рубиновым цветом экстракта. Каждый глоток обжигающего напитка раскрывается крепостью вкуса и насыщенным ароматом чернослива.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Хэй Ча",
        location: "Тибет",
        image: "OIP.jpg",
        description:
          "Процесс приготовления этого чая сродни приготовлению вина. После влажного скирдования чайного листа в нем запускаются процессы брожения, проходит длительная ферментация, и не менее длительная сушка. Только в нем единственном на разломе брикета есть та самая благородная золотая плесень с золотисто-желтым  блеском, которая и делает этот черный чай совершенно особенным.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Улун",
        location: "Китай",
        image: "OIP.jpg",
        description:
          "Этот вид чая что-то между красным и зеленым чаем. Своим 'букетом' улун чай напоминает зеленые чаи, а насыщенностью вкуса – черные.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Кенийский",
        location: "Кения",
        image: "OIP.jpg",
        description:
          "Кенийский чай отличается нежным, тонким ароматом, удивительной насыщенностью и особой полнотой янтарного настоя, вкус которого невозможно забыть. Поскольку все кенийские плантации расположены на высоте 1500-2700 м над уровнем моря, то эти чаи обладают не только тонким ароматом, свойственным высокогорным чаям, но и ценятся во всем мире как экологически чистые.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Гранатовый",
        location: "Турция",
        image: "OIP.jpg",
        description:
          "Гранатовый чай имеет и другое название – турецкий. Родом он происходит именно из этой страны. В России он пока не так популярен, как зеленый и черный чай, однако почитателей у него немало. Чай, заваренный из граната, пили еще в античности. Известно, что он был любимым напитком Аристотеля.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    // const seed = [
    //   {
    //     name: "Herbal Tea",
    //     location: "China",
    //     image: "OIP.jpg",
    //     description: "some text herbal",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     name: "Black Tea",
    //     location: "India",
    //     image: "OIP.jpg",
    //     description: "some text black",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     name: "Lemon Tea",
    //     location: "Myanmar",
    //     image: "OIP.jpg",
    //     description: "some text lemon",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     name: "Chai",
    //     location: "South Asia",
    //     image: "OIP.jpg",
    //     description: "some text chai",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ];

    await queryInterface.bulkInsert("Teas", seed);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Teas", null, {});
  },
};
