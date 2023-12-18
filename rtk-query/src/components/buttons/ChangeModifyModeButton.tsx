import { memo } from 'react';

const ChangeModifyModeButton = ({ onChange }: { onChange: () => void }) => {
  return <button onClick={() => onChange()}>수정</button>;
};

export default memo(ChangeModifyModeButton);
