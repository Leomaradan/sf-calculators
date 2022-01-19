import { useMemo } from 'preact/hooks';
import type { IFortressState } from '../../features/fortress/types';
import { useAppSelector } from '../../features/hooks';
import {
  academyLevel,
  archeryLevel,
  barracksLevel,
  fortressLevel,
  mageTowerLevel,
  mineLevel,
  quarryLevel,
  quartersLevel,
  smithyLevel,
  treasuryLevel,
  woodcutterLevel,
  archerUpgradeLevel,
  hallOfKnightsUpgradeLevel,
  mageUpgradeLevel,
  soldierUpgradeLevel,
  fortificationLevel,
} from './tables';

import type { ITable, IUpgrade } from './tables/type';

import { NumberDisplay } from '../components/NumberDisplay';
import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';

const getRange = (current: number, target: number) =>
  new Array(target - current).fill(0).map((_, i) => i + current + 1);

const tables: Record<keyof IFortressState, ITable[] | IUpgrade[]> = {
  academy: academyLevel,
  archery: archeryLevel,
  barracks: barracksLevel,
  fortress: fortressLevel,
  fortifications: fortificationLevel,
  mageTower: mageTowerLevel,
  mine: mineLevel,
  quarry: quarryLevel,
  quarters: quartersLevel,
  smithy: smithyLevel,
  treasury: treasuryLevel,
  woodcutter: woodcutterLevel,
  archer: archerUpgradeLevel,
  hok: hallOfKnightsUpgradeLevel,
  mage: mageUpgradeLevel,
  soldier: soldierUpgradeLevel,
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
      wood,
      stone,
    };
  }, [fortress]);

  const { gold, wood, stone } = fortressResources;

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
