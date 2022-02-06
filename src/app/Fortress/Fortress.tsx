import type { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { setCurrent, setTarget } from '../../features/fortress/fortressSlice';
import type { IFortressState } from '../../features/fortress/types';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { useLanguage } from '../../lang/LanguageContext';
import { LevelSelectors } from '../components/LevelSelectors';
import AcademyStat from './AcademyStat';
import ArcherForgeStat from './ArcherForgeStat';
import ArcherStat from './ArcherStat';
import FortressStats from './FortressStats';
import GemMineStat from './GemMineStat';
import MageForgeStat from './MageForgeStat';
import MageStat from './MageStat';
import QuarryStat from './QuarryStat';
import QuartersStat from './QuartersStat';
import SoldierForgeStat from './SoldierForgeStat';
import SoldierStat from './SoldierStat';
import TreasuryStat from './TreasuryStats';
import WoodcutterStat from './WoodcutterStat';

const useFortressDispatchers = (
  dispatch: Dispatch<AnyAction>,
  building: keyof IFortressState,
) => {
  const setCurrentDispatch = (num: number) => {
    dispatch(setCurrent({ [building]: num }));
  };

  const setTargetDispatch = (num: number) => {
    dispatch(setTarget({ [building]: num }));
  };

  return [setCurrentDispatch, setTargetDispatch];
};

const Fortress = () => {
  const { current, target } = useAppSelector((state) => state.fortress);

  const dispatch = useAppDispatch();

  const { fortress } = useLanguage();

  const [setCurrentAcademy, setTargetAcademy] = useFortressDispatchers(
    dispatch,
    'academy',
  );
  const [setCurrentArchery, setTargetArchery] = useFortressDispatchers(
    dispatch,
    'archery',
  );
  const [setCurrentBarracks, setTargetBarracks] = useFortressDispatchers(
    dispatch,
    'barracks',
  );
  const [setCurrentFortifications, setTargetFortifications] =
    useFortressDispatchers(dispatch, 'fortifications');
  const [setCurrentFortress, setTargetFortress] = useFortressDispatchers(
    dispatch,
    'fortress',
  );
  const [setCurrentMageTower, setTargetMageTower] = useFortressDispatchers(
    dispatch,
    'mageTower',
  );
  const [setCurrentMine, setTargetMine] = useFortressDispatchers(
    dispatch,
    'mine',
  );
  const [setCurrentQuarry, setTargetQuarry] = useFortressDispatchers(
    dispatch,
    'quarry',
  );
  const [setCurrentQuarters, setTargetQuarters] = useFortressDispatchers(
    dispatch,
    'quarters',
  );
  const [setCurrentSmithy, setTargetSmithy] = useFortressDispatchers(
    dispatch,
    'smithy',
  );
  const [setCurrentTreasury, setTargetTreasury] = useFortressDispatchers(
    dispatch,
    'treasury',
  );
  const [setCurrentWoodcutter, setTargetWoodcutter] = useFortressDispatchers(
    dispatch,
    'woodcutter',
  );

  const [setCurrentHoK, setTargetHoK] = useFortressDispatchers(dispatch, 'hok');
  const [setCurrentSoldier, setTargetSoldier] = useFortressDispatchers(
    dispatch,
    'soldier',
  );
  const [setCurrentArcher, setTargetArcher] = useFortressDispatchers(
    dispatch,
    'archer',
  );
  const [setCurrentMage, setTargetMage] = useFortressDispatchers(
    dispatch,
    'mage',
  );

  return (
    <>
      <div className="container">
        <LevelSelectors
          current={current.fortress}
          label={fortress.buildingFortress}
          max={20}
          setCurrent={setCurrentFortress}
          setTarget={setTargetFortress}
          target={target.fortress}
        />

        <LevelSelectors
          childForm
          current={current.hok}
          label={fortress.upgradeHoK}
          max={{
            current: current.fortress,
            target: target.fortress,
          }}
          setCurrent={setCurrentHoK}
          setTarget={setTargetHoK}
          target={target.hok}
        />
        <hr className="d-none d-lg-block" />
        <LevelSelectors
          additionalStats={QuartersStat}
          current={current.quarters}
          label={fortress.buildingQuarters}
          max={15}
          setCurrent={setCurrentQuarters}
          setTarget={setTargetQuarters}
          target={target.quarters}
        />
        <hr className="d-none d-lg-block" />
        <LevelSelectors
          additionalStats={WoodcutterStat}
          current={current.woodcutter}
          label={fortress.buildingWoodcutter}
          max={20}
          setCurrent={setCurrentWoodcutter}
          setTarget={setTargetWoodcutter}
          target={target.woodcutter}
        />
        <LevelSelectors
          additionalStats={QuarryStat}
          current={current.quarry}
          label={fortress.buildingQuarry}
          max={20}
          setCurrent={setCurrentQuarry}
          setTarget={setTargetQuarry}
          target={target.quarry}
        />
        <hr className="d-none d-lg-block" />
        <LevelSelectors
          additionalStats={GemMineStat}
          current={current.mine}
          label={fortress.buildingMine}
          max={20}
          setCurrent={setCurrentMine}
          setTarget={setTargetMine}
          target={target.mine}
        />
        <hr className="d-none d-lg-block" />
        <LevelSelectors
          additionalStats={AcademyStat}
          current={current.academy}
          label={fortress.buildingAcademy}
          max={20}
          setCurrent={setCurrentAcademy}
          setTarget={setTargetAcademy}
          target={target.academy}
        />
        <hr className="d-none d-lg-block" />
        <LevelSelectors
          additionalStats={ArcherStat}
          current={current.archery}
          label={fortress.buildingArchery}
          max={15}
          setCurrent={setCurrentArchery}
          setTarget={setTargetArchery}
          target={target.archery}
        />
        <LevelSelectors
          additionalStats={SoldierStat}
          current={current.barracks}
          label={fortress.buildingBarracks}
          max={15}
          setCurrent={setCurrentBarracks}
          setTarget={setTargetBarracks}
          target={target.barracks}
        />
        <LevelSelectors
          additionalStats={MageStat}
          current={current.mageTower}
          label={fortress.buildingMageTower}
          max={15}
          setCurrent={setCurrentMageTower}
          setTarget={setTargetMageTower}
          target={target.mageTower}
        />
        <hr className="d-none d-lg-block" />
        <LevelSelectors
          additionalStats={TreasuryStat}
          current={current.treasury}
          label={fortress.buildingTreasury}
          max={20}
          setCurrent={setCurrentTreasury}
          setTarget={setTargetTreasury}
          target={target.treasury}
        />
        <hr className="d-none d-lg-block" />
        <LevelSelectors
          current={current.smithy}
          label={fortress.buildingSmithy}
          max={20}
          setCurrent={setCurrentSmithy}
          setTarget={setTargetSmithy}
          target={target.smithy}
        />
        <LevelSelectors
          additionalStats={SoldierForgeStat}
          childForm
          current={current.soldier}
          label={fortress.unitSoldier}
          max={{
            current: current.smithy,
            target: target.smithy,
          }}
          setCurrent={setCurrentSoldier}
          setTarget={setTargetSoldier}
          target={target.soldier}
        />
        <LevelSelectors
          additionalStats={ArcherForgeStat}
          childForm
          current={current.archer}
          label={fortress.unitArcher}
          max={{
            current: current.smithy,
            target: target.smithy,
          }}
          setCurrent={setCurrentArcher}
          setTarget={setTargetArcher}
          target={target.archer}
        />
        <LevelSelectors
          additionalStats={MageForgeStat}
          childForm
          current={current.mage}
          label={fortress.unitMage}
          max={{
            current: current.smithy,
            target: target.smithy,
          }}
          setCurrent={setCurrentMage}
          setTarget={setTargetMage}
          target={target.mage}
        />
        <hr className="d-none d-lg-block" />
        <LevelSelectors
          current={current.fortifications}
          label={fortress.buildingFortifications}
          max={20}
          setCurrent={setCurrentFortifications}
          setTarget={setTargetFortifications}
          target={target.fortifications}
        />
      </div>
      <FortressStats />
    </>
  );
};

export default Fortress;
