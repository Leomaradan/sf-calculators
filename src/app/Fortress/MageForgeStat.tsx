import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { mageUpgradeLevel } from './tables';

const MageForgeStat = ({ value: forge }: { value: number }) => {
  const unitLevel =
    mageUpgradeLevel.find((x) => x.level === forge)?.unitLevel ?? 0;

  const {
    fortress: { unitLevel: unitLevelLabel },
  } = useLanguage();

  if (unitLevel === 0) return <></>;

  return (
    <>
      <LabelUcFirst>{unitLevelLabel}</LabelUcFirst> :{' '}
      <NumberDisplay>{unitLevel}</NumberDisplay>
    </>
  );
};

export default MageForgeStat;
