import { useAppSelector } from '../../features/hooks';
import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import TimeDisplay from '../components/TimeDisplay';
import { extractionTimeMatrix } from './tables/mine';

const GemMineStat = ({
  type,
  value: mine,
}: {
  value: number;
  type: 'current' | 'target';
}) => {
  const quarters =
    useAppSelector((state) => state.fortress[type].quarters) ?? 0;

  const time = mine > 0 ? extractionTimeMatrix[mine - 1][quarters] : 0;

  const {
    fortress: { extractionGemTime },
  } = useLanguage();

  if (mine === 0) return <></>;

  return (
    <>
      <LabelUcFirst>{extractionGemTime}</LabelUcFirst> :{' '}
      <TimeDisplay minutes>{time}</TimeDisplay>
    </>
  );
};

export default GemMineStat;
