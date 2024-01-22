import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  modalIsOpen,
  selectHomeItems,
  selectedItemId,
} from "../../redux/selectors";
import {
  StyledContainer,
  StyledDesc,
  StyledFavBtn,
  StyledInfo,
  StyledListItem,
} from "../Catalog/Catalog.styled";
import { FaRegHeart } from "react-icons/fa";
import { changeModalOpen, changeSelectedItemId } from "../../redux/slice";
import PopUp from "../PopUp/PopUp";
import CustomButton from "../CustomButton/CustomButton";

const Home = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(modalIsOpen);
  const selectedId = useSelector(selectedItemId);
  const homeItems = useSelector(selectHomeItems);

  return (
    <StyledContainer>
      {homeItems.map((item) => (
        <StyledListItem key={item?.id}>
          <img
            src={item?.img || item?.photoLink}
            alt={item?.title}
            width={274}
            height={268}
          />

          <StyledFavBtn type="button">
            <FaRegHeart
              style={{ cursor: "pointer", color: "var(--white)" }}
              size={18}
            />
          </StyledFavBtn>

          <StyledInfo>
            <h1>
              {item?.make}
              {(item?.model === "Enclave" ||
                item?.model === "XC90" ||
                item?.model === "XC60") && <span> {item?.model}</span>}
              , {item?.year}
            </h1>
            <p>{item?.rentalPrice}</p>
          </StyledInfo>

          <StyledDesc>
            <p>{item?.address.split(",")[1]?.trim()} |</p>
            <p>{item?.address.split(",")[2]?.trim()} |</p>
            <p>{item?.rentalCompany}</p>

            <p>{item?.type} |</p>
            <p>{item?.model} |</p>
            <p>{item?.id} |</p>
            <p>{item?.accessories[1]}</p>
          </StyledDesc>

          <CustomButton
            title="Remove"
            onClick={() => {
              dispatch(changeSelectedItemId(item?.id));
              dispatch(changeModalOpen(true));
            }}
          />

          {isModalOpen && selectedId === item?.id && <PopUp item={item} />}
        </StyledListItem>
      ))}
    </StyledContainer>
  );
};

export default Home;
