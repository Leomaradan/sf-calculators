import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { barracksLevel } from './tables';

const SoldierStat = ({ value }: { value: number }) => {
  const limit = barracksLevel.find((x) => x.level === value)?.limit ?? 0;

  const {
    fortress: { unitLimit },
  } = useLanguage();

  if (value === 0) return <></>;

  return (
    <>
      <LabelUcFirst>{unitLimit}</LabelUcFirst> :{' '}
      <NumberDisplay>{limit}</NumberDisplay>
    </>
  );
};

export default SoldierStat;
