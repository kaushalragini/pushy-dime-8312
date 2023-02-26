import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'

const PendingProgress = () => {
  return (
    <div>
        <CircularProgress value={50} size={"110"} color='orange.400'>
  <CircularProgressLabel fontSize="18px">Pending</CircularProgressLabel>
</CircularProgress>
    </div>
  )
}

export default PendingProgress