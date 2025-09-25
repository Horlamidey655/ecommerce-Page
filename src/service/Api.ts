export const menuList = ["collections", "men", "Woman", "about", "contact"];

import firstThumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import firstImage from "../assets/images/image-product-1.jpg";
import secondImage from "../assets/images/image-product-2.jpg";
import secondThumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import thirdImage from "../assets/images/image-product-3.jpg";
import thirdThumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import fourthImage from "../assets/images/image-product-4.jpg";
import fourthThumbnail from "../assets/images/image-product-4-thumbnail.jpg";

export const imgArray = [
  { img: firstImage, thumb: firstThumbnail },
  { img: secondImage, thumb: secondThumbnail },
  { img: thirdImage, thumb: thirdThumbnail },
  { img: fourthImage, thumb: fourthThumbnail },
];

export interface CartItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number; // percentage
  oldPrice: number;
  quantity: number;
  image: string;
}

export const cartItems = [
  {
    id: 1,
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125.0,
    discount: 50, // percentage
    oldPrice: 250.0,
    quantity: 1,
    image: thirdThumbnail, // placeholder path
  },
];
