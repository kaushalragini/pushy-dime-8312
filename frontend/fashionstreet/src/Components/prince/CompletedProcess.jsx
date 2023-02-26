import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'

const CompletedProcess = () => {
  return (
    <div>
                <CircularProgress value={100} size={"120"} color='green.400'>
  <CircularProgressLabel fontSize="18px">Delivered</CircularProgressLabel>
</CircularProgress>
    </div>
  )
}

export default CompletedProcess