import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
// COmponents
import Item from "./Item/Item"
import { Drawer,LinearProgress,Grid,Badge } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material"
import Cart from "./Cart/Cart"
// Styles
import { Wrapper, StyledButton } from "./App.styles"


export type CartItemType = {
  id: number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  ammount:number;

}

const getProducts = async ():Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
}

function App() {

  const [cartOpen,setCartOpen] = useState(false);
  const [cartItems,setCartItems] = useState([] as CartItemType[]);


  const {data,isLoading,error} = useQuery<CartItemType[]>({
    queryKey:['products'], 
    queryFn:getProducts
  });

  console.log(data);

  const getTotalItems = (items:CartItemType[]) => items.reduce( (ack:number,items) => ack + items.ammount , 0);

  const handleAddToCart = (clickedItem:CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if(isItemInCart){
        return prev.map(item => (
          item.id === clickedItem.id ? {...item,ammount:item.ammount + 1} : item
        ))
      }
      return [...prev,{...clickedItem,ammount:1}];
    })
  };

  const handleRemoveFromCart = (id:number) => {
    setCartItems(prev => (
      prev.reduce((ack,item) => {
        if(item.id === id){
          if(item.ammount === 1) return ack;
          return [...ack,{...item,ammount:item.ammount - 1}]
        }else{
          return [...ack,item]
        }
      }
      ,[] as CartItemType[])
    ))
  };

  if(isLoading) return <LinearProgress />
  if(error) return <div>Something went wrong...</div>


  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={()=>setCartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart} 
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
        <StyledButton onClick={()=>setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color='error'>
            <AddShoppingCart />
          </Badge>
        </StyledButton>
        <Grid container spacing={3} >
          {data?.map((item:CartItemType) => (
            <Grid item key={item.id} xs={12} sm={4}>
                <Item item={item} handleAddToCart={handleAddToCart}/>
            </Grid>
          ))}
        </Grid>
    </Wrapper>
  )
}

export default App
