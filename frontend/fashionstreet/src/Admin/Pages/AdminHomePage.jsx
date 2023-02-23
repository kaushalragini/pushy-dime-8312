import { Flex } from '@chakra-ui/react'
import React from 'react'
import AdminRoute from '../Components/AdminRoute'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
const AdminHomePage = () => {
  return (
    <div>
        <Navbar/>
        <Flex>
            {/* <Sidebar/> */}
            <AdminRoute/>
        </Flex>
    </div>
  )
}

export default AdminHomePage