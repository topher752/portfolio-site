'use client';

import styled from 'styled-components';

/**
 * Text that is available to screen readers but not painted on screen.
 * Uses the clip-rect technique rather than `display: none` /
 * `visibility: hidden`, both of which remove the node from the a11y tree.
 */
const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
`;

export default VisuallyHidden;
