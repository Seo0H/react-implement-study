import { memo } from 'react';

const ModifyCancelButton = ({ onChange }: { onChange: () => void }) => {
  return <button onClick={onChange}>취소</button>;
};

export default memo(ModifyCancelButton);
