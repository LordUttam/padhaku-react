import { v4 as uuid } from "uuid";
import featImg1 from "assets/images/categories/bitsat.jpg";
import featImg2 from "assets/images/categories/selfhelp.png";
import featImg3 from "assets/images/categories/classics.jpg";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryId: "fiction",
    categoryName: "Fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    featImg: featImg3,
    cardSubtitle: "75% off Rs. 99/book",
  },
  {
    _id: uuid(),
    categoryId: "selfhelp",
    categoryName: "Self Help",
    description:
      "A self-help book is one that is written with the intention to instruct its readers on solving personal problems",
    featImg: featImg2,
    cardSubtitle: "75% off Rs. 149/book",
  },
  {
    _id: uuid(),
    categoryId: "exams",
    categoryName: "Exam Preparation",
    description:
      "Preparing for exams? Checkout books which can boost your scores. We have a large collection of them.",
    featImg: featImg1,
    cardSubtitle: "75% off Rs. 99/book",
  },
];
