import { ReactNode, createContext, useContext, useState } from "react";

type ProductContextProviderProps = {
  children: ReactNode;
};

type ProductItem = {
  id: number;
  quantity: number;
};

type ProductContext = {
  getProductQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeQuantity: (id: number) => void;
};

const ProductContext = createContext({} as ProductContext);

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  const [productItem, setProductItem] = useState<ProductItem[]>([]);

  function getProductQuantity(id: number) {
    return productItem.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuantity(id: number) {
    setProductItem((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseQuantity(id: number) {
    setProductItem((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeQuantity(id: number) {
    setProductItem((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ProductContext.Provider
      value={{
        getProductQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
