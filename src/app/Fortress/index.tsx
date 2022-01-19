import type { Dispatch, AnyAction } from '@reduxjs/toolkit';
import { LevelSelectors } from '../components/LevelSelectors';
import { setCurrent, setTarget } from '../../features/fortress/fortressSlice';
import FortressStats from './FortressStats';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import type { IFortressState } from '../../features/fortress/types';
import { useLanguage } from '../../lang/LanguageContext';

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
          label={fortress.buildingFortress}
          max={20}
          current={current.fortress}
          target={target.fortress}
          setCurrent={setCurrentFortress}
          setTarget={setTargetFortress}
        />
        <LevelSelectors
          label={fortress.upgradeHoK}
          max={{
            current: current.fortress,
            target: target.fortress,
          }}
          current={current.hok}
          target={target.hok}
          setCurrent={setCurrentHoK}
          setTarget={setTargetHoK}
          childForm
        />
        <LevelSelectors
          label={fortress.buildingQuarters}
          max={15}
          current={current.quarters}
          target={target.quarters}
          setCurrent={setCurrentQuarters}
          setTarget={setTargetQuarters}
        />
        <LevelSelectors
          label={fortress.buildingWoodcutter}
          max={20}
          current={current.woodcutter}
          target={target.woodcutter}
          setCurrent={setCurrentWoodcutter}
          setTarget={setTargetWoodcutter}
        />
        <LevelSelectors
          label={fortress.buildingQuarry}
          max={20}
          current={current.quarry}
          target={target.quarry}
          setCurrent={setCurrentQuarry}
          setTarget={setTargetQuarry}
        />
        <LevelSelectors
          label={fortress.buildingMine}
          max={20}
          current={current.mine}
          target={target.mine}
          setCurrent={setCurrentMine}
          setTarget={setTargetMine}
        />
        <LevelSelectors
          label={fortress.buildingAcademy}
          max={20}
          current={current.academy}
          target={target.academy}
          setCurrent={setCurrentAcademy}
          setTarget={setTargetAcademy}
        />
        <LevelSelectors
          label={fortress.buildingArchery}
          max={15}
          current={current.archery}
          target={target.archery}
          setCurrent={setCurrentArchery}
          setTarget={setTargetArchery}
        />
        <LevelSelectors
          label={fortress.buildingBarracks}
          max={15}
          current={current.barracks}
          target={target.barracks}
          setCurrent={setCurrentBarracks}
          setTarget={setTargetBarracks}
        />
        <LevelSelectors
          label={fortress.buildingMageTower}
          max={15}
          current={current.mageTower}
          target={target.mageTower}
          setCurrent={setCurrentMageTower}
          setTarget={setTargetMageTower}
        />
        <LevelSelectors
          label={fortress.buildingTreasury}
          max={20}
          current={current.treasury}
          target={target.treasury}
          setCurrent={setCurrentTreasury}
          setTarget={setTargetTreasury}
        />
        <LevelSelectors
          label={fortress.buildingSmithy}
          max={20}
          current={current.smithy}
          target={target.smithy}
          setCurrent={setCurrentSmithy}
          setTarget={setTargetSmithy}
        />
        <LevelSelectors
          label={fortress.unitSoldier}
          max={{
            current: current.smithy,
            target: target.smithy,
          }}
          current={current.soldier}
          target={target.soldier}
          setCurrent={setCurrentSoldier}
          setTarget={setTargetSoldier}
          childForm
        />
        <LevelSelectors
          label={fortress.unitArcher}
          max={{
            current: current.smithy,
            target: target.smithy,
          }}
          current={current.archer}
          target={target.archer}
          setCurrent={setCurrentArcher}
          setTarget={setTargetArcher}
          childForm
        />
        <LevelSelectors
          label={fortress.unitMage}
          max={{
            current: current.smithy,
            target: target.smithy,
          }}
          current={current.mage}
          target={target.mage}
          setCurrent={setCurrentMage}
          setTarget={setTargetMage}
          childForm
        />
        <LevelSelectors
          label={fortress.buildingFortifications}
          max={20}
          current={current.fortifications}
          target={target.fortifications}
          setCurrent={setCurrentFortifications}
          setTarget={setTargetFortifications}
        />
      </div>
      <FortressStats />
    </>
  );
};

export default Fortress;
