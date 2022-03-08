import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { gladiatorTrainer } from './tables';

const GladiatorStat = ({ value }: { value: number }) => {
  const bonus = gladiatorTrainer.find((x) => x.level === value)?.bonus ?? 0;
  const {
    underworld: { gladiatorCritBonus },
  } = useLanguage();

  if (bonus === 0) return <></>;

  return (
    <>
      <LabelUcFirst>{gladiatorCritBonus}</LabelUcFirst> :{' '}
      <NumberDisplay percent>{bonus}</NumberDisplay>
    </>
  );
};

export default GladiatorStat;
