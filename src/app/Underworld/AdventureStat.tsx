import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { aventureomatic } from './tables';

const AdventureStat = ({ value }: { value: number }) => {
  const adventure: { thirst: number; thirstBonus: number; thirstMax: number } =
    aventureomatic.find((x) => x.level === value) ?? {
      thirst: 0,
      thirstBonus: 0,
      thirstMax: 0,
    };

  if (value === 0) return <></>;

  return (
    <>
      <LabelUcFirst>Daily thirst</LabelUcFirst> :{' '}
      <NumberDisplay>{adventure.thirst}</NumberDisplay>+
      <NumberDisplay>{adventure.thirstBonus}</NumberDisplay>,{' '}
      <LabelUcFirst>Max</LabelUcFirst> :{' '}
      <NumberDisplay>{adventure.thirstMax}</NumberDisplay>
    </>
  );
};

export default AdventureStat;
