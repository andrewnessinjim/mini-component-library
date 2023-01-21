import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';


const StyledSelect = styled.select`
  border: none; 
  width: 100%;
  position: absolute;
  inset: 0;
  opacity: 0;
  padding: 0;
`;

const SelectWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: max-content;
  position: relative;
  border-radius: 8px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
  
`;

const SelectDisplayedValue = styled.p`
  padding: 12px 52px 12px 16px;
  display: inline-block;

  ${StyledSelect}:focus + &{
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 10px;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`

const Select = ({ label, value, onChange, children }) => {
const displayedValue = getDisplayedValue(value, children);

  return (
      <SelectWrapper>
        <StyledSelect value={value} onChange={onChange}>
          {children}
        </StyledSelect>
        <SelectDisplayedValue>{displayedValue}</SelectDisplayedValue>
        <IconWrapper style={{"--size": "24px"}}>
          <Icon id="chevron-down" style={{"--stroke-width" : "2px", "--size": "24"}}/>
        </IconWrapper>
      </SelectWrapper>
  );
};

export default Select;