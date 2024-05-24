import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import StoreItem from "../data/items.json";

type CartItemPros = {
    id: number;
    quantity: number;
}


export function CartItem({id, quantity}: CartItemPros){
 const { removeFromCart } = useShoppingCart();
 const item = StoreItem.find(i => i.id === id);
 if(item == null) return null

 return (
    <Stack direction="horizontal" gap={2} >
        <img src={item.imgUrl} />
    </Stack>
 )

}