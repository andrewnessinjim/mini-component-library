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
  display: inline-block;
  position: relative;
  border-radius: 8px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
  &:has(${StyledSelect}:focus){
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SelectDisplayedValue = styled.p`
  padding: 12px 52px 12px 16px;
  display: inline-block;
`;

const IconWrapper = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 10px;
  width: var(--size);
  height: var(--size);
`

const Select = ({ label, value, onChange, children }) => {
const displayedValue = getDisplayedValue(value, children);

  return (
      <SelectWrapper>
        <SelectDisplayedValue>{displayedValue}</SelectDisplayedValue>
        <IconWrapper style={{"--size": "24px"}}>
          <Icon id="chevron-down" style={{"--stroke-width" : "2px", "--size": "24"}}/>
        </IconWrapper>
        <StyledSelect value={value} onChange={onChange}>
          {children}
        </StyledSelect>
      </SelectWrapper>
  );
};

export default Select;


{/* return (
    
    <SelectWrapper>
      
      <SelectDisplayedValue>{displayedValue}</SelectDisplayedValue>
      <IconWrapper id="chevron-down" style={{"--stroke-width" : "2px"}}/>
    </SelectWrapper>
  ); */}