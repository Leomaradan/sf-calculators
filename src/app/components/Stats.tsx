import { useMemo } from "preact/hooks";
import { IFortressState } from "../../features/fortress/fortressSlice";
import { useAppSelector } from "../../features/hooks";
import { academyLevel } from "../fortressTables/academy";
import {
  fortressLevel,
  hallOfKnightsUpgradeLevel,
} from "../fortressTables/fortress";
import { mineLevel } from "../fortressTables/mine";
import { quartersLevel } from "../fortressTables/quarters";
import { treasuryLevel } from "../fortressTables/treasury";
import { ITable } from "../fortressTables/type";
import {
  archerUpgradeLevel,
  archeryLevel,
  barracksLevel,
  IUpgrade,
  mageTowerLevel,
  mageUpgradeLevel,
  smithyLevel,
  soldierUpgradeLevel,
} from "../fortressTables/units";
import { quarryLevel, woodcutterLevel } from "../fortressTables/woodAndStone";
import { NumberDisplay } from "./NumberDisplay";

const getRange = (current: number, target: number) =>
  new Array(target - current).fill(0).map((_, i) => i + current + 1);

const tables: Record<keyof IFortressState, ITable[] | IUpgrade[]> = {
  academy: academyLevel,
  archery: archeryLevel,
  barracks: barracksLevel,
  fortress: fortressLevel,
  fortifications: [],
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

export const Stats = () => {
  const fortress = useAppSelector((state) => state.fortress);

  console.log({ fortress });

  const fortressResources = useMemo(() => {
    let gold = 0;
    let wood = 0;
    let stone = 0;

    Object.keys(fortress.current).forEach((key) => {
      const building = key as keyof IFortressState;
      const range = getRange(
        fortress.current[building],
        fortress.target[building]
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

  const gold = fortressResources.gold;
  const wood = fortressResources.wood;
  const stone = fortressResources.stone;

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Resource</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Gold</th>
            <td>
              <NumberDisplay>{gold}</NumberDisplay>
            </td>
          </tr>
          <tr>
            <th scope="row">Wood</th>
            <td>
              <NumberDisplay>{wood}</NumberDisplay>
            </td>
          </tr>
          <tr>
            <th scope="row">Stone</th>
            <td>
              <NumberDisplay>{stone}</NumberDisplay>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
