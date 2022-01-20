import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import { treasuryLevel } from './tables';

const TreasuryStats = ({ value }: { value: number }) => {
  const slot = treasuryLevel.find((x) => x.level === value)?.slot ?? 0;
  const {
    fortress: { treasurySlot },
  } = useLanguage();

  if (value === 0) return <></>;

  return (
    <>
      <LabelUcFirst>{treasurySlot}</LabelUcFirst> : {slot}
    </>
  );
};

export default TreasuryStats;
