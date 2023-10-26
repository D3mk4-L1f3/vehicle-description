import React, { useState } from "react";
import {
  CardContainer,
  FavoriteBtn,
  CentralInfo,
  TitleContainer,
  AlterImage,
  Image,
  Title,
  Span,
  Price,
  InfoContainer,
  Button,
} from "./CarItem.styled";
import reserved from "styles/image/reserved.png";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import { DescriptionModal } from "components/Modal/Modal";

function CarCard({ car, isFavorite, onToggleFavorite, isCatalogPage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);

  const addressParts = car.address.split(", ");
  const city = addressParts[0];
  const country = addressParts[1];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleToggleFavorite = () => {
    onToggleFavorite(car);
  };

  const handleImageError = (e) => {
    setImageLoadError(true);
  };

  return (
    <CardContainer>
      {imageLoadError ? (
        <AlterImage src={reserved} alt={`${car.make} ${car.model}`} />
      ) : (
        <Image
          src={car.img}
          alt={`${car.make} ${car.model}`}
          onError={handleImageError}
        />
      )}
      {isCatalogPage && (
        <FavoriteBtn onClick={handleToggleFavorite}>
          {isFavorite ? (
            <MdOutlineFavorite
              style={{ width: "23", height: "23", fill: "#3470FF" }}
            />
          ) : (
            <MdOutlineFavoriteBorder
              style={{ width: "23", height: "23", fill: "white" }}
            />
          )}
        </FavoriteBtn>
      )}
      <CentralInfo>
        <TitleContainer>
          <Title>
            {car.make} <Span>{car.model}</Span>, {car.year}
          </Title>
          <Price>{car.rentalPrice}</Price>
        </TitleContainer>
        <InfoContainer>
          <p>
            {city} | {country} | {car.rentalCompany} | {car.type} | {car.make} |{" "}
            {car.id}
          </p>
        </InfoContainer>
      </CentralInfo>
      <Button onClick={openModal}>Learn more</Button>

      <DescriptionModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        car={car}
      />
    </CardContainer>
  );
}

export default CarCard;
