import React from 'react';

import s from './WarningMessage.module.css';

export default function WarningMessage({ messageText }) {
  return (
    <div className={s.textContainer}>
      <p className={s.text}>{messageText}</p>
    </div>
  );
}
