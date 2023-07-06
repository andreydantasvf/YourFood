import saladaMolla from "../assets/salada-molla.png"
import espresso from "../assets/espresso.png"

export const cart = [
  {
    "id": 1,
    "quantity": 2,
    "request_id": null,
    "dish_id": 4,
    "user_id": 2,
    "created_at": "2023-02-08 01:41:21",
    "dish": [
      {
        "id": 4,
        "title": "Salada Molla ",
        "description": "Tomates, coentro, pepino, cebola roxa. Frescos e temperados.",
        "category": "main",
        "image": saladaMolla,
        "price": 19.99,
        "created_at": "2023-02-06 19:23:40",
        "updated_at": "2023-02-06 19:23:40"
      }
    ]
  },
  {
    "id": 4,
    "quantity": 1,
    "request_id": null,
    "dish_id": 10,
    "user_id": 2,
    "created_at": "2023-02-09 01:25:42",
    "dish": [
      {
        "id": 10,
        "title": "Espresso",
        "description": "Café cremoso feito na temperatura e pressões perfeitas.",
        "category": "drink",
        "image": espresso,
        "price": 49.99,
        "created_at": "2023-02-06 19:28:23",
        "updated_at": "2023-02-06 19:28:23"
      }
    ]
  }
]