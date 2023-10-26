import { toast } from 'react-toastify';
import React, { useState } from 'react';
import reserved from 'styles/image/reserved.png';
import { DescriptionModal } from 'components/Modal/Modal';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
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
  Delimiter,
  Button,
} from './CarItem.styled';

export const CarCard = ({
  car,
  isFavorite,
  onToggleFavorite,
  isCatalogPage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);

  const {
    address,
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    id,
  } = car;

  const addressParts = address.split(', ');
  const [city, country] = addressParts;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleToggleFavorite = () => {
    onToggleFavorite(car);
    !isFavorite
      ? toast.success('Car added to Favorites')
      : toast.warning('Car Removed from Favorites');
  };

  const handleImageError = e => {
    setImageLoadError(true);
  };

  return (
    <CardContainer>
      {imageLoadError ? (
        <AlterImage
          src={reserved}
          alt={`${make ?? 'Unknown'} ${model ?? 'Unknown'}`}
        />
      ) : (
        <Image
          src={img ?? 'Unknown'}
          alt={`${make ?? 'Unknown'} ${model ?? 'Unknown'}`}
          onError={handleImageError}
        />
      )}
      {isCatalogPage && (
        <FavoriteBtn onClick={handleToggleFavorite}>
          {isFavorite ? (
            <MdOutlineFavorite
              style={{ width: '23', height: '23', fill: '#3470FF' }}
            />
          ) : (
            <MdOutlineFavoriteBorder
              style={{ width: '23', height: '23', fill: 'white' }}
            />
          )}
        </FavoriteBtn>
      )}
      <CentralInfo>
        <TitleContainer>
          <Title>
            {make ?? 'Unknown'} <Span>{model ?? 'Unknown'}</Span>,{' '}
            {year ?? 'Unknown'}
          </Title>
          <Price>{rentalPrice ?? 'Unknown'}</Price>
        </TitleContainer>
        <InfoContainer>
          <p>
            {city ?? 'Unknown'} <Delimiter>|</Delimiter> {country ?? 'Unknown'}
            <Delimiter>|</Delimiter>
            {rentalCompany ?? 'Unknown'}
            <Delimiter>|</Delimiter>
            {type ?? 'Unknown'}
            <Delimiter>|</Delimiter>
            {make ?? 'Unknown'}
            <Delimiter>|</Delimiter>
            {id ?? 'Unknown'}
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
};
