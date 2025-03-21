export type Category = {
  _id: string;
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
  count: number;
};

export type foodType = {
  _id?: string | any;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: {
    categoryName: string;
    _id: string;
  };
  quantity?: number;
};

export type UserType = {
  _id?: string;
  email: string;
  password: string;
  phoneNumber?: string;
  address?: string;
  role?: "USER" | "ADMIN";
  orderedFoods?: string[];
  // isVerified: boolean;
};

export type FoodOrderType = {
  _id: string;
  user: string;
  totalPrice: number;
  foodOrderItems: [foodType];
  status: "PENDING" | "CANCELED" | "DELIVERED";
};

export type FoodOrderItemType = {
  food: string;
  quantity: number;
};
