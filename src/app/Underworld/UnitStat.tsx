/* eslint-disable react/display-name */
import { useAppSelector } from '../../features/hooks';
import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import { goblinPit, trollBlock, keeper } from './tables';
import type { IUnit, IUpgrade } from './tables/type';

const UnitStat = ({
  type,
  value: unitUpgradeLevel,
  unitType,
}: {
  value: number;
  type: 'current' | 'target';
  unitType: 'keeper' | 'gobelin' | 'troll';
}) => {
  const unitBuildingLevel =
    useAppSelector((state) => {
      if (unitType === 'keeper') return state.underworld[type].keeper;
      if (unitType === 'gobelin') return state.underworld[type].goblinPit;
      return state.underworld[type].trollBlock;
    }) ?? 0;

  const {
    general: { unitLevel, unitCount },
  } = useLanguage();

  let table: IUpgrade[] | IUnit[] = trollBlock;

  if (unitType === 'keeper') table = keeper;
  if (unitType === 'gobelin') table = goblinPit;

  const unitLevelValue =
    table.find((x) => x.level === unitBuildingLevel)?.unitLevel ?? 0;
  const unitNumber =
    (table.find((x) => x.level === unitBuildingLevel) as IUnit)?.unitNumber ??
    1;

  return (
    <>
      <LabelUcFirst>{unitLevel}</LabelUcFirst> :{' '}
      <NumberDisplay>{unitLevelValue + unitUpgradeLevel}</NumberDisplay>,{' '}
      <LabelUcFirst>{unitCount}</LabelUcFirst> :{' '}
      <NumberDisplay>{unitNumber}</NumberDisplay>
    </>
  );
};

interface Props {
  value: number;
  type: 'current' | 'target';
}

export const KeeperStat = (props: Props) => (
  <UnitStat {...props} unitType="keeper" />
);

export const GobelinStat = (props: Props) => (
  <UnitStat {...props} unitType="gobelin" />
);

export const TrollStat = (props: Props) => (
  <UnitStat {...props} unitType="troll" />
);
