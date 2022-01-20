import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import TimeDisplay from '../components/TimeDisplay';
import { quarryLevel } from './tables';

const QuarryStat = ({ value }: { value: number }) => {
  const quarry = quarryLevel.find((x) => x.level === value);

  const max = quarry?.storage ?? 0;
  const rate = quarry?.resourceHour ?? 0;
  const time = (max / rate) * 3600;

  const {
    fortress: { timeToFill },
    general: { hourShort, max: maxLabel, stone },
  } = useLanguage();

  return (
    <>
      <LabelUcFirst>{stone}</LabelUcFirst> :{' '}
      <NumberDisplay>{rate}</NumberDisplay>/{hourShort}, {maxLabel}{' '}
      <NumberDisplay>{max}</NumberDisplay> ({timeToFill} :{' '}
      <TimeDisplay>{time}</TimeDisplay>)
    </>
  );
};

export default QuarryStat;
