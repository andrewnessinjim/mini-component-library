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
    underlineSize: "1px"
  },
  large: {
    fontSize: (18/16)+"rem",
    iconSize: "24px",
    inputLeftPadding: 7 + 16 + 18 + "px",
    strokeWidth: "2px",
    underlineSize: "2px"
  }
}

const Wrapper = styled.div`
  border-bottom: var(--underline-size) solid ${COLORS.black};
  width: fit-content;
  position: relative;
`;

const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 5px;
  margin: auto;
  height: var(--height);
  color: ${COLORS.gray700};
  pointer-events: none;
  ${Wrapper}:hover & {
      color: ${COLORS.black};
    }
`;

const Input = styled.input`
  border: none;
  width: var(--width);
  padding-left: var(--inputLeftPadding);
  padding-top: 4px;
  padding-bottom: 4px;
  font-weight: 700;
  color: ${COLORS.gray700};
  outline-offset: 4px;
  font-size: var(--fontSize);

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }

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
  placeholder,
}) => {
  const styles = STYLES[size];
  if(!styles) throw new Error(`Styles not found for size: ${size}`)

  return (
    <Wrapper style={{"--underline-size" :styles.underlineSize}}>
      <VisuallyHidden>
        <label htmlFor='input'>{label}</label>
      </VisuallyHidden>
      <IconWrapper style={{"--height": styles.iconSize}}>
        <Icon id={icon} style={{
          "--size": styles.iconSize,
          "--stroke-width": styles.strokeWidth
          }}/>
      </IconWrapper>
      <Input
        id='input'
        style={{
          "--width": width+"px",
          "--fontSize": styles.fontSize,
          "--inputLeftPadding": styles.inputLeftPadding
        }}
        type="text"
        placeholder={placeholder}/>
    </Wrapper>
  );
};

export default IconInput;
