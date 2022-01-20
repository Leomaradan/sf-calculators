import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import TimeDisplay from '../components/TimeDisplay';
import { academyLevel } from './tables';

const AcademyStat = ({ value }: { value: number }) => {
  const time = academyLevel.find((x) => x.level === value)?.timeToFill ?? 0;
  const {
    fortress: { timeToFill },
  } = useLanguage();

  return (
    <>
      <LabelUcFirst>{timeToFill}</LabelUcFirst> :{' '}
      <TimeDisplay minutes>{time}</TimeDisplay>
    </>
  );
};

export default AcademyStat;
