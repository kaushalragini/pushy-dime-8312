import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToastCompo from "../../CustomHook/useToast";
import { getFeedback } from "../../Redux/Feedback/Feedback.actions";
import AdminFeedbackTable from "../Components/AdminFeedback/AdminFeedbackTable";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const AdminFeedback = () => {
  const { feedback } = useSelector((state) => state.feedbackManager);
  const dispatch = useDispatch();
  const { Toast } = useToastCompo();

  console.log(feedback);
  useEffect(() => {
    dispatch(getFeedback(Toast));
  }, []);
  return (
    <div>
      <div>
        <Navbar />
        <Flex>
          <Sidebar
            color={"hsla(283, 64%, 47%, 0.538)"}
            textColor={"blackAlpha.800"}
          />
          <Box mt="50px" w={{ lg: "80%", md: "75%", sm: "70%", base: "100%" }}>
            <Box></Box>
            <AdminFeedbackTable feedback={feedback} />
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default AdminFeedback;
