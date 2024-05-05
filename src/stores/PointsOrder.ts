import { POINTS_ORDER_API } from "@/api/PointsOrder";
import { AddToCartRequestDto ,CartProductResponseDto,ConfirmOrderRequestDto } from "@/api/Order/OrderDto";

import { useApi } from "@/composables";
import { ORDER_API } from "@/api/Order";

const {GET , POST} = useApi();
export const PointsOrderStore  = defineStore('points_order',()=>{
    const addToCartPointsDto  = ref<AddToCartRequestDto>()
    const confirmPointsOrderDto  = ref<ConfirmOrderRequestDto>(new ConfirmOrderRequestDto() )
    const totalPoints = ref(0)
    const  cartPointsProductsResponseDto = ref<CartProductResponseDto> (new CartProductResponseDto())
const  add_to_points_cart= async(query:Object = {})=>{
    try {
        const res =await POST (POINTS_ORDER_API.add_to_points_cart,query)
    } catch (error) {
        throw(error)
    }
}


const  remove_from_points_cart= async(material_id:string)=>{
    try {
        const res =await POST (POINTS_ORDER_API.remove_from_points_cart,{
            material_id:material_id
        })
    } catch (error) {
        throw(error)
    }
}
const  get_cart_products= async()=>{
    try {
        const res =await GET <CartProductResponseDto>(ORDER_API.get_cart_products, {points:true})
        cartPointsProductsResponseDto.value  = res.data
    } catch (error) {
        throw(error)
    }
}


const  empty_points_cart= async()=>{
    try {
        const res =await POST (POINTS_ORDER_API.empty_points_cart,{})
    await get_cart_products()
    } catch (error) {
        throw(error)
    }
}
const  confirm_points_order= async()=>{
    try {
        const res =await POST (POINTS_ORDER_API.confirm_points_order,confirmPointsOrderDto.value )
    await get_cart_products()
    } catch (error) {
        throw(error)
    }
}

const  get_points_orders= async(query :Object =  {})=>{
    try {
        const res =await GET (POINTS_ORDER_API.get_points_orders,query)
    } catch (error) {
        throw(error)
    }
}

const  buy_with_points  = async(query:Object = {})=>{
try {
    const res = await GET(POINTS_ORDER_API.buy_with_points,query);

} catch (error) {
    throw(error)
}
} 
const get_points =async ()=>
{
    try {
        const res = await GET(POINTS_ORDER_API.get_points,{})
        totalPoints.value = res.data.data
    } catch (error) {
        throw(error)
    }
}
const get_points_details =async ()=>
{
    try {
        const res = await GET(POINTS_ORDER_API.get_points,{
            details:true
        })
    } catch (error) {
        throw(error)
    }
}

    return {
        addToCartPointsDto,
        confirmPointsOrderDto,
        totalPoints,
        cartPointsProductsResponseDto,
        get_cart_products,
        get_points,
        get_points_details,
        buy_with_points,
        add_to_points_cart,
        remove_from_points_cart,
        empty_points_cart,
        confirm_points_order,
        get_points_orders
    }
})