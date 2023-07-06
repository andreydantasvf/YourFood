import pomoBourbon from "../assets/pomo-bourbon.png";
import tedautunno from "../assets/te-dautunno.png";
import espresso from "../assets/espresso.png";
import sucoDeMaracuja from "../assets/suco-de-maracuja.png";
import boloDeDamasco from "../assets/bolo-de-damasco.png";
import macarons from "../assets/macarons.png";
import peachyPastrie from "../assets/peachy-pastrie.png";
import prugnaPie from "../assets/prugna-pie.png";
import saladaMolla from "../assets/salada-molla.png";
import spaguettiGambe from "../assets/spaguetti-gambe.png";
import torradasDeArma from "../assets/torradas-de-arma.png";
import saladaRavanello from "../assets/salada-ravanello.png";

export const dishes = [
  {
    "id": 8,
    "title": "Bolo de damasco",
    "description": "Damascos frescos em uma massa sem glúten.",
    "category": "dessert",
    "image": boloDeDamasco,
    "price": 19.99,
    "created_at": "2023-02-06 19:27:04",
    "updated_at": "2023-02-06 19:27:04",
    "ingredients": [
      {
        "id": 19,
        "name": "damasco",
        "dish_id": 8
      },
      {
        "id": 20,
        "name": "farinha",
        "dish_id": 8
      }
    ]
  },
  {
    "id": 10,
    "title": "Espresso",
    "description": "Café cremoso feito na temperatura e pressões perfeitas.",
    "category": "drink",
    "image": espresso,
    "price": 49.99,
    "created_at": "2023-02-06 19:28:23",
    "updated_at": "2023-02-06 19:28:23",
    "ingredients": [
      {
        "id": 22,
        "name": "café",
        "dish_id": 10
      }
    ]
  },
  {
    "id": 7,
    "title": "Macarons",
    "description": "Farinha de amêndoas, manteiga, claras e açúcar.",
    "category": "dessert",
    "image": macarons,
    "price": 79.99,
    "created_at": "2023-02-06 19:26:09",
    "updated_at": "2023-02-06 19:26:09",
    "ingredients": [
      {
        "id": 17,
        "name": "amêndoas",
        "dish_id": 7
      },
      {
        "id": 18,
        "name": "claras",
        "dish_id": 7
      }
    ]
  },
  {
    "id": 6,
    "title": "Peachy pastrie",
    "description": "Delicioso folheado de pêssego com folhas de hortelã.",
    "category": "dessert",
    "image": peachyPastrie,
    "price": 32.99,
    "created_at": "2023-02-06 19:25:29",
    "updated_at": "2023-02-06 19:25:29",
    "ingredients": [
      {
        "id": 15,
        "name": "pêssego",
        "dish_id": 6
      },
      {
        "id": 16,
        "name": "farinha",
        "dish_id": 6
      }
    ]
  },
  {
    "id": 12,
    "title": "Pomo bourbon ",
    "description": "Maçã, whisky, canela. On the rocks.",
    "category": "drink",
    "image": pomoBourbon,
    "price": 79.99,
    "created_at": "2023-02-06 19:30:17",
    "updated_at": "2023-02-06 19:30:17",
    "ingredients": [
      {
        "id": 26,
        "name": "canela",
        "dish_id": 12
      },
      {
        "id": 27,
        "name": "whiskey",
        "dish_id": 12
      },
      {
        "id": 28,
        "name": "maçã",
        "dish_id": 12
      }
    ]
  },
  {
    "id": 5,
    "title": "Prugna Pie",
    "description": "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
    "category": "dessert",
    "image": prugnaPie,
    "price": 49.99,
    "created_at": "2023-02-06 19:24:32",
    "updated_at": "2023-02-06 19:24:32",
    "ingredients": [
      {
        "id": 13,
        "name": "ameixa",
        "dish_id": 5
      },
      {
        "id": 14,
        "name": "farinha",
        "dish_id": 5
      }
    ]
  },
  {
    "id": 4,
    "title": "Salada Molla ",
    "description": "Tomates, coentro, pepino, cebola roxa. Frescos e temperados.",
    "category": "main",
    "image": saladaMolla,
    "price": 19.99,
    "created_at": "2023-02-06 19:23:40",
    "updated_at": "2023-02-06 19:23:40",
    "ingredients": [
      {
        "id": 11,
        "name": "alface",
        "dish_id": 4
      },
      {
        "id": 12,
        "name": "tomate",
        "dish_id": 4
      }
    ]
  },
  {
    "id": 1,
    "title": "Salada Ravanello",
    "description": "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
    "category": "main",
    "image": saladaRavanello,
    "price": 49.97,
    "created_at": "2023-02-06 19:14:50",
    "updated_at": "2023-02-06 19:14:50",
    "ingredients": [
      {
        "id": 1,
        "name": "alface",
        "dish_id": 1
      },
      {
        "id": 2,
        "name": "tomate",
        "dish_id": 1
      },
      {
        "id": 3,
        "name": "rabanete",
        "dish_id": 1
      },
      {
        "id": 4,
        "name": "pão naan",
        "dish_id": 1
      }
    ]
  },
  {
    "id": 3,
    "title": "Spaguetti Gambe ",
    "description": "Massa fresca com camarões e pesto. ",
    "category": "main",
    "image": spaguettiGambe,
    "price": 79.97,
    "created_at": "2023-02-06 19:22:42",
    "updated_at": "2023-02-06 19:22:42",
    "ingredients": [
      {
        "id": 8,
        "name": "camarão",
        "dish_id": 3
      },
      {
        "id": 9,
        "name": "massa",
        "dish_id": 3
      },
      {
        "id": 10,
        "name": "pesto",
        "dish_id": 3
      }
    ]
  },
  {
    "id": 9,
    "title": "Suco de maracujá",
    "description": "Suco de maracujá gelado, cremoso, docinho.",
    "category": "drink",
    "image": sucoDeMaracuja,
    "price": 32.99,
    "created_at": "2023-02-06 19:27:43",
    "updated_at": "2023-02-06 19:27:43",
    "ingredients": [
      {
        "id": 21,
        "name": "maracujá",
        "dish_id": 9
      }
    ]
  },
  {
    "id": 2,
    "title": "Torradas de Parma",
    "description": "Presunto de parma e rúcula em um pão com fermentação natural.",
    "category": "main",
    "image": torradasDeArma,
    "price": 25.97,
    "created_at": "2023-02-06 19:21:37",
    "updated_at": "2023-02-06 19:21:37",
    "ingredients": [
      {
        "id": 5,
        "name": "presunto",
        "dish_id": 2
      },
      {
        "id": 6,
        "name": "pão",
        "dish_id": 2
      },
      {
        "id": 7,
        "name": "rúcula",
        "dish_id": 2
      }
    ]
  },
  {
    "id": 11,
    "title": "Tè d'autunno >",
    "description": "Chá de anis, canela e limão. Sinta o outono italiano.",
    "category": "drink",
    "image": tedautunno,
    "price": 19.99,
    "created_at": "2023-02-06 19:29:35",
    "updated_at": "2023-02-06 19:29:35",
    "ingredients": [
      {
        "id": 23,
        "name": "canela",
        "dish_id": 11
      },
      {
        "id": 24,
        "name": "aniz",
        "dish_id": 11
      },
      {
        "id": 25,
        "name": "limão",
        "dish_id": 11
      }
    ]
  }
]