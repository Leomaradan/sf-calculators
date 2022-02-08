import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import TimeDisplay from '../components/TimeDisplay';
import { soulExtractor } from './tables';

const ExtractorStat = ({ value }: { value: number }) => {
  const extractor = soulExtractor.find((x) => x.level === value);

  const max = extractor?.storage ?? 1;
  const rate = extractor?.resourceHour ?? 1;
  const time = (max / rate) * 3600;

  const {
    fortress: { timeToFill },
    general: { hourShort, max: maxLabel, soul },
  } = useLanguage();

  if (value === 0) return <></>;

  return (
    <>
      <LabelUcFirst>{soul}</LabelUcFirst> :{' '}
      <NumberDisplay>{rate}</NumberDisplay>/{hourShort}, {maxLabel}{' '}
      <NumberDisplay>{max}</NumberDisplay> ({timeToFill} :{' '}
      <TimeDisplay>{time}</TimeDisplay>)
    </>
  );
};

export default ExtractorStat;
