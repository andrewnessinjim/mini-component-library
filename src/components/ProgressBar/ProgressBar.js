/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  height: {
    small: "8px",
    medium: "12px",
    large: "16px"
  },
  borderRadius: {
    small: "4px",
    medium: "4px",
    large: "8px"
  },
  padding: {
    small: "0px",
    medium: "0px",
    large: "4px"
  }
}
const Backdrop = styled.div`
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  transition: 500ms width;
`;

const BarWrapper = styled.div`
  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;

  border-radius: 4px;
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
            size={size}
            style={{
              "--padding": STYLES.padding[size],
              "--borderRadius": STYLES.borderRadius[size]
            }}>
              <BarWrapper>
                <Bar
                  size={size}
                  style={{
                    "--width": value+"%",
                    "--height": STYLES.height[size]
                  }}
                  >
                </Bar>
              </BarWrapper>
          </Backdrop>
      </div>;
};

export default ProgressBar;