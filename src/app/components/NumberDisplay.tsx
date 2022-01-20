import type { FunctionComponent } from 'preact';
import { useLocale } from '../../lang/LanguageContext';

const NumberDisplay: FunctionComponent = ({ children }) => {
  const locale = useLocale();
  if (typeof children === 'number') {
    return <>{Intl.NumberFormat(locale).format(children)}</>;
  }
  return <>{children}</>;
};

export default NumberDisplay;
