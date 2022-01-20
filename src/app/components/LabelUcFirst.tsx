import type { FunctionComponent } from 'preact';
import { useMemo } from 'preact/hooks';

const ucFirst = (baseString: string) => {
  const [firstLetter, ...rest] = baseString.split('');
  return `${firstLetter.toUpperCase()}${rest.join('')}`;
};

const LabelUcFirst: FunctionComponent<{ word?: boolean }> = ({
  children,
  word: splitWord,
}) => {
  const label = useMemo(() => {
    if (typeof children === 'string') {
      if (splitWord !== true) {
        return ucFirst(children);
      }
      const words = children.split(' ');

      return words
        .map((word) => {
          if (word.length > 3) {
            return ucFirst(word);
          }

          return word;
        })
        .join(' ');
    }
    return children;
  }, [children, splitWord]);

  return <>{label}</>;
};

export default LabelUcFirst;
