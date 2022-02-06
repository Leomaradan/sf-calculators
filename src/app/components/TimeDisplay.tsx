import type { FunctionComponent } from 'preact';
import { useLanguage } from '../../lang/LanguageContext';
import type { ILanguage } from '../../lang/type';

const DAYS = 86400;
const HOURS = 3600;
const MINUTES = 60;

const secondsToString = (value: number, lang: ILanguage) => {
  const days = Math.floor(value / DAYS);
  const hours = Math.floor((value - days * DAYS) / HOURS);
  const minutes = Math.floor((value - hours * HOURS - days * DAYS) / MINUTES);
  const seconds = value - days * DAYS - hours * HOURS - minutes * MINUTES;

  let hoursString = hours.toString();
  let minutesString = minutes.toString();
  let secondsString = Math.ceil(seconds).toString();

  if (hours < 10 && value >= DAYS) {
    hoursString = `0${hoursString}`;
  }
  if (minutes < 10 && value >= HOURS) {
    minutesString = `0${minutesString}`;
  }
  if (seconds < 10 && value >= MINUTES) {
    secondsString = `0${secondsString}`;
  }

  const timeTokens = [];

  if (days !== 0) {
    timeTokens.push(`${days}${lang.general.dayShort}`);
  }

  if (hours !== 0) {
    timeTokens.push(`${hoursString}${lang.general.hourShort}`);
  }

  if (minutes !== 0) {
    timeTokens.push(`${minutesString}${lang.general.minuteShort}`);
  }

  if (seconds !== 0) {
    timeTokens.push(`${secondsString}${lang.general.secondShort}`);
  }
  return timeTokens.join(' ');
};

const TimeDisplay: FunctionComponent<{
  minutes?: boolean;
}> = ({ children, minutes }) => {
  const lang = useLanguage();

  if (typeof children === 'number') {
    const time = minutes ? 60 * children : children;

    return <>{secondsToString(time, lang)}</>;
  }
  return <>{children}</>;
};

export default TimeDisplay;
