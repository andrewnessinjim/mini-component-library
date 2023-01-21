/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  height: {
    small: "8px",
    medium: "12px",
    large: "24px"
  },
  borderRadius: {
    small: "4px",
    medium: "4px",
    large: "8px"
  }
}
const Backdrop = styled.div`
  height: ${p => sizes.height[p.size]};
  border-radius: ${p => sizes.borderRadius[p.size]};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${p => p.size === "large" && "4px"};
  background-color: ${COLORS.transparentGray15};
`;

function barRightBorderRadius() {
  return p => (p.completedPercentage === 100 && p.borderRadius+"px") || 
              (p.completedPercentage >= 99 && (p.borderRadius / 2)+"px");
}

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.completedPercentage+"%"};
  height: 100%;
  border-top-left-radius: ${p => p.borderRadius+"px"};
  border-bottom-left-radius: ${p => p.borderRadius+"px"};
  border-top-right-radius: ${barRightBorderRadius};
  border-bottom-right-radius: ${barRightBorderRadius};
  transition: 500ms width;
`;

const ProgressBar = ({ value, size }) => {
  return <div>
          <VisuallyHidden>
            <span id='loadinglabel'>Completed percentage: </span>
          </VisuallyHidden>
          <Backdrop
            role="progressbar"
            aria-labelledby='loadinglabel'
            aria-valuenow={value}  
            aria-valuemin="0"
            aria-valuemax="100"
            size={size}>
              <Bar
                size={size}
                completedPercentage = {value}
                borderRadius = {4}>
              </Bar>
          </Backdrop>
      </div>;
};

export default ProgressBar;