import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { underworldGate } from './tables';

const GateStat = ({ value: gateLevel }: { value: number }) => {
  const heroes = underworldGate.find((x) => x.level === gateLevel)?.heroes ?? 0;

  if (heroes === 0) return <></>;

  return (
    <>
      <LabelUcFirst>Heroes per day</LabelUcFirst> :{' '}
      <NumberDisplay>{heroes}</NumberDisplay>
    </>
  );
};

export default GateStat;
