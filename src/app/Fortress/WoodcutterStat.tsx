import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import TimeDisplay from '../components/TimeDisplay';
import { woodcutterLevel } from './tables';

const WoodcutterStat = ({ value }: { value: number }) => {
  const woodcutter = woodcutterLevel.find((x) => x.level === value);

  const max = woodcutter?.storage ?? 1;
  const rate = woodcutter?.resourceHour ?? 1;
  const time = (max / rate) * 3600;

  const {
    fortress: { timeToFill },
    general: { hourShort, max: maxLabel, wood },
  } = useLanguage();

  if (value === 0) return <></>;

  return (
    <>
      <LabelUcFirst>{wood}</LabelUcFirst> :{' '}
      <NumberDisplay>{rate}</NumberDisplay>/{hourShort}, {maxLabel}{' '}
      <NumberDisplay>{max}</NumberDisplay> ({timeToFill} :{' '}
      <TimeDisplay>{time}</TimeDisplay>)
    </>
  );
};

export default WoodcutterStat;
