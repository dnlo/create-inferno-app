/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../styles';

const closeButtonStyle = {
  color: black,
  'line-height': '1rem',
  'font-size': '1.5rem',
  padding: '1rem',
  cursor: 'pointer',
  position: 'absolute',
  right: 0,
  top: 0,
};

function CloseButton({ close }) {
  return (
    <span
      title="Click or press Escape to dismiss."
      onClick={close}
      style={closeButtonStyle}
    >
      ×
    </span>
  );
}

export default CloseButton;
