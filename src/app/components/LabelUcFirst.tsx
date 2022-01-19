import type { FunctionComponent } from 'preact';
import { useMemo } from 'preact/hooks';

const LabelUcFirst: FunctionComponent = ({ children }) => {
  const label = useMemo(() => {
    if (typeof children === 'string') {
      const [firstLetter, ...rest] = children.split('');
      return `${firstLetter.toUpperCase()}${rest.join('')}`;
    }
    return children;
  }, [children]);

  return <>{label}</>;
};

export default LabelUcFirst;
