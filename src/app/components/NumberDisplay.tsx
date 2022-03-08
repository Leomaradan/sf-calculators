import type { FunctionComponent } from 'preact';
import { useLocale } from '../../lang/LanguageContext';

const NumberDisplay: FunctionComponent<{ percent?: boolean }> = ({
  children,
  percent,
}) => {
  const locale = useLocale();
  if (typeof children === 'number') {
    return (
      <>
        {Intl.NumberFormat(locale).format(children)}
        {percent && '%'}
      </>
    );
  }
  return <>{children}</>;
};

export default NumberDisplay;
