import { useMemo } from 'preact/hooks';
import type { IFortressState } from '../../features/fortress/types';
import { useAppSelector } from '../../features/hooks';
import {
  academyLevel,
  archerUpgradeLevel,
  archeryLevel,
  barracksLevel,
  fortificationLevel,
  fortressLevel,
  hallOfKnightsUpgradeLevel,
  mageTowerLevel,
  mageUpgradeLevel,
  mineLevel,
  quarryLevel,
  quartersLevel,
  smithyLevel,
  soldierUpgradeLevel,
  treasuryLevel,
  woodcutterLevel,
} from './tables';

import type { ITable, IUpgrade } from './tables/type';

import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';

const getRange = (current: number, target: number) =>
  new Array(target - current).fill(0).map((_, i) => i + current + 1);

const tables: Record<keyof IFortressState, ITable[] | IUpgrade[]> = {
  academy: academyLevel,
  archer: archerUpgradeLevel,
  archery: archeryLevel,
  barracks: barracksLevel,
  fortifications: fortificationLevel,
  fortress: fortressLevel,
  hok: hallOfKnightsUpgradeLevel,
  mage: mageUpgradeLevel,
  mageTower: mageTowerLevel,
  mine: mineLevel,
  quarry: quarryLevel,
  quarters: quartersLevel,
  smithy: smithyLevel,
  soldier: soldierUpgradeLevel,
  treasury: treasuryLevel,
  woodcutter: woodcutterLevel,
};

const FortressStats = () => {
  const fortress = useAppSelector((state) => state.fortress);

  const { general } = useLanguage();

  const fortressResources = useMemo(() => {
    let gold = 0;
    let wood = 0;
    let stone = 0;

    Object.keys(fortress.current).forEach((key) => {
      const building = key as keyof IFortressState;
      const range = getRange(
        fortress.current[building],
        fortress.target[building],
      );

      range.forEach((level) => {
        const data = tables[building].find((x) => x.level === level);
        if (data) {
          if ((data as ITable).gold) {
            gold += (data as ITable).gold;
          }
          wood += data.wood;
          stone += data.stone;
        }
      });
    });

    return {
      gold,
      stone,
      wood,
    };
  }, [fortress]);

  const { gold, stone, wood } = fortressResources;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <LabelUcFirst>{general.resources}</LabelUcFirst>
            </th>
            <th scope="col">
              <LabelUcFirst>{general.count}</LabelUcFirst>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <LabelUcFirst>{general.gold}</LabelUcFirst>
            </th>
            <td>
              <NumberDisplay>{gold}</NumberDisplay>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <LabelUcFirst>{general.wood}</LabelUcFirst>
            </th>
            <td>
              <NumberDisplay>{wood}</NumberDisplay>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <LabelUcFirst>{general.stone}</LabelUcFirst>
            </th>
            <td>
              <NumberDisplay>{stone}</NumberDisplay>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FortressStats;
