import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { mageTowerLevel } from './tables';

const MageStat = ({ value }: { value: number }) => {
  const limit = mageTowerLevel.find((x) => x.level === value)?.limit ?? 0;

  const {
    fortress: { unitLimit },
  } = useLanguage();

  return (
    <>
      <LabelUcFirst>{unitLimit}</LabelUcFirst> :{' '}
      <NumberDisplay>{limit}</NumberDisplay>
    </>
  );
};

export default MageStat;
