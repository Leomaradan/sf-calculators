import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { archerUpgradeLevel } from './tables';

const ArcherForgeStat = ({ value: forge }: { value: number }) => {
  const unitLevel =
    archerUpgradeLevel.find((x) => x.level === forge)?.unitLevel ?? 0;

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

export default ArcherForgeStat;
