import { ORDER_API } from "@/api/Order";
import { AddToCartRequestDto ,CartProductResponseDto,ConfirmOrderRequestDto, MyOrdersResponseDto } from "@/api/Order/OrderDto";
import { useApi } from "@/composables";

const {GET , POST} = useApi();
export const OrderStore  = defineStore('order',()=>{
    const addToCartDto  = ref<AddToCartRequestDto>(new AddToCartRequestDto())
    const confirmOrderDto  = ref<ConfirmOrderRequestDto>(new ConfirmOrderRequestDto())
    const showCartErrorDialog  = ref(false)
    const showSuccessDialog  = ref(false)
   const myOrdersResponseDto = ref<MyOrdersResponseDto>( new MyOrdersResponseDto())
    const  cartProductsResponseDto = ref<CartProductResponseDto>(new CartProductResponseDto())
const  add_to_cart= async()=>{
    try {
 await get_cart_products ();
 
 if(cartProductsResponseDto.value.data.length==0){
    const res =await POST (ORDER_API.add_to_cart,addToCartDto.value)
    showSuccessDialog.value = true
 }
else {
    const type   = cartProductsResponseDto.value.data.office_id [0]? 'office': cartProductsResponseDto.value.data[0].online_market_id?'online_market':'store'
    const owner_id   = type == 'office'? cartProductsResponseDto.value.data[0].online_market_id:'online_market'?cartProductsResponseDto.value.data[0].online_market_id:cartProductsResponseDto.value.data.store_id
   if(type!==addToCartDto.value.supplier_type&&owner_id !==addToCartDto.value.owner_id){
     showCartErrorDialog.value = true 
   }
   else {
     const res =await POST (ORDER_API.add_to_cart,addToCartDto.value)
     showSuccessDialog.value = true
   }
}
    } catch (error) {
        throw(error)
    }
}


const  remove_from_cart= async(material_id:any)=>{
    try {
        const res =await POST (ORDER_API.remove_from_cart,{
            material_id:material_id
        })
        await get_cart_products()
    } catch (error) {
        throw(error)
    }
}


const  empty_cart= async()=>{
    try {
        const res =await POST (ORDER_API.empty_cart,{});
        cartProductsResponseDto.value.data=[]
    } catch (error) {
        throw(error)
    }
}
const  confirm_order= async()=>{
    try {
        const res =await POST (ORDER_API.confirm_order,confirmOrderDto.value)
    } catch (error) {
        throw(error)
    }
}

const  get_my_orders= async(query :any = {})=>{
    try {
        const res =await GET<any> (ORDER_API.get_orders,{
            my_orders:true , 
            ...query
        })
      return res.data
    } catch (error) {
        throw(error)
    }
}

const  get_orders= async(query :any = {})=>{
    try {
        const res =await GET <MyOrdersResponseDto>(ORDER_API.get_orders,query)
        myOrdersResponseDto.value = res.data
    } catch (error) {
        throw(error)
    }
}

const  get_cart_products= async()=>{
    try {
        const res =await GET <CartProductResponseDto>(ORDER_API.get_cart_products,)
        cartProductsResponseDto.value  = res.data
    } catch (error) {
        throw(error)
    }
}


const deleteOrder = async (order_id:string )=>{
    try {
        const res = await POST (ORDER_API.delete_order , {
            order_id:order_id
        })
    } catch (error) {
        
    }
}

    return {
        addToCartDto,
        confirmOrderDto,
        cartProductsResponseDto,
        myOrdersResponseDto,
        showCartErrorDialog,
        showSuccessDialog,
        add_to_cart,
        get_my_orders,
        get_cart_products,
        get_orders,
        confirm_order,
        empty_cart,
        deleteOrder,
        remove_from_cart
    }
})