import { useAppSelector } from '../../features/hooks';
import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { barracksLevel, soldierUpgradeLevel } from './tables';

const SoldierStat = ({
  type,
  value: barrack,
}: {
  value: number;
  type: 'current' | 'target';
}) => {
  const limit = barracksLevel.find((x) => x.level === barrack)?.limit ?? 0;
  const soldierUpgrade =
    useAppSelector((state) => state.fortress[type].soldier) ?? 0;

  const upgrade: { neededStone: number; neededWood: number } =
    soldierUpgradeLevel.find((x) => x.level === soldierUpgrade) ?? {
      neededStone: 0,
      neededWood: 0,
    };

  const {
    general: { stone, wood, unitLimit },
  } = useLanguage();

  if (barrack === 0) return <></>;

  return (
    <>
      <LabelUcFirst>{unitLimit}</LabelUcFirst> :{' '}
      <NumberDisplay>{limit}</NumberDisplay>,{' '}
      <LabelUcFirst>{wood}</LabelUcFirst> :{' '}
      <NumberDisplay>{upgrade.neededWood}</NumberDisplay>,{' '}
      <LabelUcFirst>{stone}</LabelUcFirst> :{' '}
      <NumberDisplay>{upgrade.neededStone}</NumberDisplay>,
    </>
  );
};

export default SoldierStat;
