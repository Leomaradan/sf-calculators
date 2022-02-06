import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { gladiatorTrainer } from './tables';

const GladiatorStat = ({ value }: { value: number }) => {
  const bonus = gladiatorTrainer.find((x) => x.level === value)?.bonus ?? 0;

  if (bonus === 0) return <></>;

  return (
    <>
      <LabelUcFirst>Crit bonus</LabelUcFirst> :{' '}
      <NumberDisplay>{bonus}%</NumberDisplay>
    </>
  );
};

export default GladiatorStat;
