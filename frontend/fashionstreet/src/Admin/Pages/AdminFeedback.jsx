import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToastCompo from "../../CustomHook/useToast";
import { getFeedback } from "../../Redux/Feedback/Feedback.actions";
import AdminFeedbackTable from "../Components/AdminFeedback/AdminFeedbackTable";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import SidebarWithHeader from "../Components/AdminSidebar";

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
      <SidebarWithHeader>
        <Box mt="10px">
          <AdminFeedbackTable feedback={feedback} />
        </Box>
      </SidebarWithHeader>
    </div>
  );
};

export default AdminFeedback;
