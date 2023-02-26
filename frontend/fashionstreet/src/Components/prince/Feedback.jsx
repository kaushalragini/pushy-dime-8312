import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure, useToast } from "@chakra-ui/react"
import { useRef, useState } from "react"
import axios from "axios"
const Feedback=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const[feedBack,setFeedBack]=useState("")
    const [name,setName]=useState("")
  
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const toast = useToast()
  const postFeedback=()=>{
    axios({
        method:"post",
        data:{feedBack},
        url:`${process.env.REACT_APP_URL}user/feedback`,
        headers:{
          Authorization:localStorage.getItem("token")
        }
    }).then(res=>{toast({
          title: 'Feedback Sent',
          description: "Thank's For your Feedback ",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        setFeedBack("")
        setName("")
        onClose()
      }).catch(err=>console.log(err))
  }

  console.log(process.env.REACT_APP_URL);
    return (
      <>
        <Button  position={"absolute"} right="0" top="50px" onClick={onOpen} color="white" bgColor={"blue.500"}>Feedback</Button>

  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Give Your Honest Feedback </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>name</FormLabel>
                <Input value={name} onChange={(e)=>setName(e.target.value)} textAlign={"left"} ref={initialRef} placeholder='Name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Feedback</FormLabel>
                <Textarea value={feedBack} onChange={(e)=>setFeedBack(e.target.value)} placeholder='feedback' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=>postFeedback()}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Feedback;