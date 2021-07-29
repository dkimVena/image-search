import React, { memo } from 'react';
import styled from 'styled-components';
import { ImageInfoModel } from '../types';
import Image from './Image';

interface Props {
  images: ImageInfoModel[] | null;
}

function Images(props: Props): JSX.Element {
  const { images = [] } = props;

  const sizeArr = ['medium', 'large', 'full'];

  return (
    <StyledImageContainer>
      <StyledGrid>
        {images?.map((image: ImageInfoModel, index: number): React.ReactNode => {

          return (
            <React.Fragment key={image.id}>
              <Image
                id={image.id}
                size={sizeArr[Math.floor(Math.random() * 3) % 3]}
                url={image.webformatURL}
                tags={image.tags}
              />
            </React.Fragment>
          );
        })}
      </StyledGrid>
    </StyledImageContainer>
  );
}

const StyledImageContainer = styled.div`
  display: none;
  padding: 2rem;
  
  @media screen and (min-width: 768px) {
    padding: 4rem;
  }
  
  @supports(display: grid) {
    display: block;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 150px;
  grid-auto-flow: row dense;
`;

export default memo(Images);
