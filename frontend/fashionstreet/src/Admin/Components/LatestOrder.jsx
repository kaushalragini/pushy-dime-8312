import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "../styles/LatestOrder.css"
import DeliveredButton from './DeliveredButton'
import FailedButton from './FailedButton'
import PendingButton from './PendingButton'
const LatestOrder = () => {
    const data=[{
        order:"#12345678",
        date: "jan 6,2023",
        name:"james",
        bill:"$153",
        status:"pending"
    }]
  return (
    <div className='latest-main-box'>
        <Heading fontSize={"18px"} >Latest Order</Heading>
        {data.map(e=>{
            return(
                <>
                <Flex gap="20px" alignItems={"center"}>
                    <Text>{e.order}</Text>
                    <Text>{e.date}</Text>
                    <Text>{e.name}</Text>
                    <Text>{e.bill}</Text>
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