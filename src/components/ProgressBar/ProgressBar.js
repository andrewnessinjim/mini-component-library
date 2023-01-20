/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: "12px",
  medium: "18px",
  large: "24px"
}
const Backdrop = styled.div`
  width: 250px;
  height: ${p => sizes[p.size]};
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${p => p.size === "large" && "3px"};
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.completedPercentage+"%"};
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${p => p.completedPercentage >= 99 && "4px"};
  border-bottom-right-radius: ${p => p.completedPercentage >= 99 && "4px"};
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
            
            size={size}>
              <Bar 
                completedPercentage = {value}>
              </Bar>
          </Backdrop>
      </div>;
};

export default ProgressBar;
