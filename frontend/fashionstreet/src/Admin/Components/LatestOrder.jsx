import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import "../styles/LatestOrder.css"
import DeliveredButton from './DeliveredButton'
import FailedButton from './FailedButton'
import PendingButton from './PendingButton'
import axios from "axios"

const LatestOrder = () => {
    const [data,setData]=useState([])

    useEffect(() => {
        getOrderProducts()
    },[])

    const getOrderProducts = () => {
        const token = localStorage.getItem("token")
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_URL}/orderedproducts/all`,
            headers: {
                Authorization: `${token}`
            }
        }).then((res) => {
            setData(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className='latest-main-box'>
        <Heading fontSize={"18px"} >Latest Order</Heading>
        {data?.map((e,i)=>{
            if(i===4){
                return null
            }
            
            return(
                <>
                <Flex gap={"20px"} wrap="wrap" alignItems={"center"} key={e._id}>
                    <Text>{e._id}</Text>
                    <Text>{e.date.split("T")[0]}</Text>
                    <Text>{e.name}</Text>
                    <Text>₹{e.productsId.mrp}</Text>
                    {e.status==="pending"?<PendingButton/>:e.status==="failed"?<FailedButton/>:<DeliveredButton/>}
                </Flex>
                    <div className='latest-line'></div>
                </>
            )
        })}
    </div>
  )
}

export default LatestOrder