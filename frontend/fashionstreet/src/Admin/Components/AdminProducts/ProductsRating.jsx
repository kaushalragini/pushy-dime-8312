import { SmallCloseIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToastCompo from "../../../CustomHook/useToast";
import {
  deleteRatings,
  getRatings,
} from "../../../Redux/Ratings/Ratings.actions";
import "./ProductsRating.css";

const ProductsRating = ({ product }) => {
  const { ratings } = useSelector((state) => state.ratingsManager);
  const dispatch = useDispatch();
  const { Toast } = useToastCompo();

  useEffect(() => {
    dispatch(getRatings(Toast, true, product._id));
  }, []);

  const deleteRating = () => {
    dispatch(deleteRatings(Toast, product._id));
  };

  return (
    <div>
      <Center>
        <Heading borderBottomWidth="3px" size="md">
          Ratings
        </Heading>
      </Center>
      <Box>
        {ratings?.map((rating) => {
          return (
            <Box
              className="ratingBox"
              textAlign="center"
              key={rating._id}
              border="1px"
              borderColor="gray.200"
            >
              <SmallCloseIcon onClick={deleteRating} className="deleteIcon" />
              <Text className="title">{rating.title}</Text>
              <Text className="description">{rating.description}</Text>
              <Text className="rating">
                {[...new Array(rating.rating)].map((r, i) => (
                  <StarIcon
                    color="yellow.400"
                    key={i * Math.random() * 0.867}
                  />
                ))}
              </Text>
              <Flex className="nameBox" align="center" justify="space-around">
                <Text className="name">{rating.userId.name}</Text>
                <Text className="time">
                  {rating?.createdAt.split("T")[0] +
                    " " +
                    rating?.createdAt.split("T")[1].split(".")[0]}
                </Text>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default ProductsRating;
