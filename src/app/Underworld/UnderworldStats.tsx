import { useMemo } from 'preact/hooks';

import { useAppSelector } from '../../features/hooks';
import {
  aventureomatic,
  gladiatorTrainer,
  goblinPit,
  goldPit,
  heartOfDarkness,
  keeper,
  soulExtractor,
  tortureChamber,
  trollBlock,
  underworldGate,
} from './tables';

import type { ITable } from './tables/type';

import { useLanguage } from '../../lang/LanguageContext';
import LabelUcFirst from '../components/LabelUcFirst';
import NumberDisplay from '../components/NumberDisplay';
import type { IUnderworldState } from '../../features/underworld/types';

const getRange = (current = 0, target = 0) =>
  current === 0 && target === 0
    ? []
    : new Array(Math.max(0, target - current))
        .fill(0)
        .map((_, i) => i + current + 1);

const tables: Record<keyof IUnderworldState, ITable[]> = {
  adventure: aventureomatic,
  gladiator: gladiatorTrainer,
  goblinPit,
  gold: goldPit,
  heart: heartOfDarkness,
  keeper,
  extractor: soulExtractor,
  torture: tortureChamber,
  trollBlock,
  gate: underworldGate,
  goblinUpgrade: [],
  keeperUpgrade: [],
  trollUpgrade: [],
};

const UnderworldStats = () => {
  const underworld = useAppSelector((state) => state.underworld);

  const { general } = useLanguage();

  const fortressResources = useMemo(() => {
    let goldSum = 0;
    let soulSum = 0;

    Object.keys(underworld.current).forEach((key) => {
      const building = key as keyof IUnderworldState;
      const range = getRange(
        underworld.current[building],
        underworld.target[building],
      );

      range.forEach((level) => {
        const data = tables[building].find((x) => x.level === level);
        if (data) {
          goldSum += data.gold;
          soulSum += data.soul;
        }
      });
    });

    return {
      gold: goldSum,
      soul: soulSum,
    };
  }, [underworld]);

  const { gold, soul } = fortressResources;

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
              <LabelUcFirst>{general.soul}</LabelUcFirst>
            </th>
            <td>
              <NumberDisplay>{soul}</NumberDisplay>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default UnderworldStats;
