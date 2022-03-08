import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { soldierUpgradeLevel } from './tables';

const SoldierForgeStat = ({ value: forge }: { value: number }) => {
  const unitLevel =
    soldierUpgradeLevel.find((x) => x.level === forge)?.unitLevel ?? 0;

  const {
    general: { unitLevel: unitLevelLabel },
  } = useLanguage();

  if (unitLevel === 0) return <></>;

  return (
    <>
      <LabelUcFirst>{unitLevelLabel}</LabelUcFirst> :{' '}
      <NumberDisplay>{unitLevel}</NumberDisplay>
    </>
  );
};

export default SoldierForgeStat;
