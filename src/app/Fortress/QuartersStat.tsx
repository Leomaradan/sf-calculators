import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import { quartersLevel } from './tables';

const QuartersStat = ({ value }: { value: number }) => {
  const time = quartersLevel.find((x) => x.level === value)?.timeReduction ?? 0;

  const {
    fortress: { quartersTimeReduction },
  } = useLanguage();

  if (value === 0) return <></>;

  return (
    <>
      <LabelUcFirst>{quartersTimeReduction}</LabelUcFirst> : {time}%
    </>
  );
};

export default QuartersStat;
