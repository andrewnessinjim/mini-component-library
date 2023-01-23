import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES ={
  small:{
    fontSize: (14/16)+"rem",
    iconSize: "15px",
    inputLeftPadding: 5 + 10 + 10 + "px", //left-most padding + icon width + space between icon and input
    strokeWidth: "1px",
    underlineThickness: "1px"
  },
  large: {
    fontSize: (18/16)+"rem",
    iconSize: "24px",
    inputLeftPadding: 7 + 16 + 18 + "px",
    strokeWidth: "2px",
    underlineThickness: "2px"
  }
}

const Wrapper = styled.div`
  border-bottom: var(--underline-thickness) solid ${COLORS.black};
  width: fit-content;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 5px;
  margin: auto;
  height: var(--height);
`;

const Input = styled.input`
  border: none;
  width: var(--width);
  padding-left: var(--inputLeftPadding);
  padding-top: 4px;
  padding-bottom: 4px;
  font-weight: 700;
  color: inherit;
  outline-offset: 4px;
  font-size: var(--fontSize);

  &::placeholder {
    font-weight: initial;
    color: ${COLORS.gray500};
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];
  if(!styles) throw new Error(`Styles not found for size: ${size}`)

  return (
    <Wrapper style={{"--underline-thickness" :styles.underlineThickness}}>
      <label>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconWrapper style={{"--height": styles.iconSize}}>
          <Icon id={icon} style={{
            "--size": styles.iconSize,
            "--stroke-width": styles.strokeWidth
            }}/>
        </IconWrapper>
        <Input
          style={{
            "--width": width+"px",
            "--fontSize": styles.fontSize,
            "--inputLeftPadding": styles.inputLeftPadding
          }}
          type="text"
          {...delegated}/>
      </label>
    </Wrapper>
  );
};

export default IconInput;
