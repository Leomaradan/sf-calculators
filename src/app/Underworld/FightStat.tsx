import { useAppSelector } from '../../features/hooks';
import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { tortureChamber, underworldFight, underworldGate } from './tables';

const numToPercent = (num: number) => num / 100 + 1;
const numFromPercent = (num: number) => Math.round(100 * num);

const GateStat = ({
  type,
  value: heroesLevel,
}: {
  value: number;
  type: 'current' | 'target';
}) => {
  const tortureLevel =
    useAppSelector((state) => state.underworld[type].torture) ?? 0;

  const gateLevel = useAppSelector((state) => state.underworld[type].gate) ?? 0;

  const {
    underworld: { maxSoulsPerDay, soulsBonus, soulsPerHeroes },
  } = useLanguage();
  const souls = underworldFight.find((x) => x.level === heroesLevel)?.soul ?? 0;

  const tortureBonus =
    tortureChamber.find((x) => x.level === tortureLevel)?.bonus ?? 0;

  const gate: { bonusSoul: number; heroes: number } = underworldGate.find(
    (x) => x.level === gateLevel,
  ) ?? { bonusSoul: 0, heroes: 0 };

  if (heroesLevel === 0 && tortureBonus === 0) return <></>;

  const bonus = numToPercent(gate.bonusSoul) * numToPercent(tortureBonus);

  const maxSoulPerHero = Math.floor(bonus * souls);

  return (
    <>
      <LabelUcFirst>{soulsBonus}</LabelUcFirst> :{' '}
      <NumberDisplay percent>{numFromPercent(bonus)}</NumberDisplay>,{' '}
      <LabelUcFirst>{soulsPerHeroes}</LabelUcFirst> :{' '}
      <NumberDisplay>{maxSoulPerHero}</NumberDisplay>,{' '}
      <LabelUcFirst>{maxSoulsPerDay}</LabelUcFirst> :{' '}
      <NumberDisplay>{gate.heroes * maxSoulPerHero}</NumberDisplay>
    </>
  );
};

export default GateStat;
