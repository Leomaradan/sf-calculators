import { useAppSelector } from '../../features/hooks';
import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { mageTowerLevel, mageUpgradeLevel } from './tables';

const MageStat = ({
  type,
  value: mageTower,
}: {
  value: number;
  type: 'current' | 'target';
}) => {
  const limit = mageTowerLevel.find((x) => x.level === mageTower)?.limit ?? 0;

  const soldierUpgrade =
    useAppSelector((state) => state.fortress[type].soldier) ?? 0;

  const upgrade: { neededStone: number; neededWood: number } =
    mageUpgradeLevel.find((x) => x.level === soldierUpgrade) ?? {
      neededStone: 0,
      neededWood: 0,
    };

  const {
    fortress: { unitLimit },
    general: { stone, wood },
  } = useLanguage();

  if (mageTower === 0) return <></>;

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

export default MageStat;
