import { defineStore } from "pinia";
import { reactive } from "vue";

export const useItemStor = defineStore("itemStor", {
  state: () => ({
    itemArr: [
      {
        src: "firstCard.png",
        title: "Lira Earrings",
        price: "$ 20,00",
      },
      {
        src: "SecondCard.png",

        title: "Hal Earrings",
        price: "$ 25,00",
      },
      {
        src: "thirdCard.png",
        title: "Kaede Hair Pin Set Of 3 ",
        price: "$ 30,00",
      },
      {
        src: "fourCard.png",
        title: "Hair Pin Set of 3",
        price: "$ 20,00",
      },
      {
        src: "fiveCard.png",
        title: "Plaine Necklace",
        price: "$ 19,00",
      },
      {
        src: "sixCard.png",
        title: "Yuki Hair Pin Set of 3",
        price: "$ 29,00",
      },
    ],
    tabs: [
      { name: "Description", label: "Description" },
      { name: "Aditional information", label: "Aditional information" },
      { name: "Reviews", label: "Reviews" },
    ],
    reviews: reactive([
      {
        namePersone: "Scarlet withch",
        date: "6 May, 2020",
        stars: 5,
        reviewText:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ",
      },
    ]),
  }),
});
