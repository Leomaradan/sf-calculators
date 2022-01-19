import { LevelSelectors } from "./components/LevelSelectors";
import {
  IFortressState,
  setCurrent,
  setTarget,
} from "../features/fortress/fortressSlice";
import { Stats } from "./components/Stats";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { Dispatch, AnyAction, DeepPartial } from "@reduxjs/toolkit";

const useFortressDispatchers = (
  dispatch: Dispatch<AnyAction>,
  building: keyof IFortressState
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

  const [setCurrentAcademy, setTargetAcademy] = useFortressDispatchers(
    dispatch,
    "academy"
  );
  const [setCurrentArchery, setTargetArchery] = useFortressDispatchers(
    dispatch,
    "archery"
  );
  const [setCurrentBarracks, setTargetBarracks] = useFortressDispatchers(
    dispatch,
    "barracks"
  );
  const [setCurrentFortifications, setTargetFortifications] =
    useFortressDispatchers(dispatch, "fortifications");
  const [setCurrentFortress, setTargetFortress] = useFortressDispatchers(
    dispatch,
    "fortress"
  );
  const [setCurrentMageTower, setTargetMageTower] = useFortressDispatchers(
    dispatch,
    "mageTower"
  );
  const [setCurrentMine, setTargetMine] = useFortressDispatchers(
    dispatch,
    "mine"
  );
  const [setCurrentQuarry, setTargetQuarry] = useFortressDispatchers(
    dispatch,
    "quarry"
  );
  const [setCurrentQuarters, setTargetQuarters] = useFortressDispatchers(
    dispatch,
    "quarters"
  );
  const [setCurrentSmithy, setTargetSmithy] = useFortressDispatchers(
    dispatch,
    "smithy"
  );
  const [setCurrentTreasury, setTargetTreasury] = useFortressDispatchers(
    dispatch,
    "treasury"
  );
  const [setCurrentWoodcutter, setTargetWoodcutter] = useFortressDispatchers(
    dispatch,
    "woodcutter"
  );

  const [setCurrentHoK, setTargetHoK] = useFortressDispatchers(dispatch, "hok");
  const [setCurrentSoldier, setTargetSoldier] = useFortressDispatchers(
    dispatch,
    "soldier"
  );
  const [setCurrentArcher, setTargetArcher] = useFortressDispatchers(
    dispatch,
    "archer"
  );
  const [setCurrentMage, setTargetMage] = useFortressDispatchers(
    dispatch,
    "mage"
  );

  return (
    <>
      <div class="container">
        <LevelSelectors
          label="Fortress"
          max={20}
          current={current.fortress}
          target={target.fortress}
          setCurrent={setCurrentFortress}
          setTarget={setTargetFortress}
        />
        <LevelSelectors
          label="HoK"
          max={{
            current: current.fortress,
            target: target.fortress,
          }}
          current={current.hok}
          target={target.hok}
          setCurrent={setCurrentHoK}
          setTarget={setTargetHoK}
        />
        <LevelSelectors
          label="Laborer's Quarters"
          max={15}
          current={current.quarters}
          target={target.quarters}
          setCurrent={setCurrentQuarters}
          setTarget={setTargetQuarters}
        />
        <LevelSelectors
          label="Woodcutter's Hut"
          max={20}
          current={current.woodcutter}
          target={target.woodcutter}
          setCurrent={setCurrentWoodcutter}
          setTarget={setTargetWoodcutter}
        />
        <LevelSelectors
          label="Quarry"
          max={20}
          current={current.quarry}
          target={target.quarry}
          setCurrent={setCurrentQuarry}
          setTarget={setTargetQuarry}
        />
        <LevelSelectors
          label="Gem Mine"
          max={20}
          current={current.mine}
          target={target.mine}
          setCurrent={setCurrentMine}
          setTarget={setTargetMine}
        />
        <LevelSelectors
          label="Academy"
          max={20}
          current={current.academy}
          target={target.academy}
          setCurrent={setCurrentAcademy}
          setTarget={setTargetAcademy}
        />
        <LevelSelectors
          label="Archery Guild"
          max={15}
          current={current.archery}
          target={target.archery}
          setCurrent={setCurrentArchery}
          setTarget={setTargetArchery}
        />
        <LevelSelectors
          label="Barracks"
          max={15}
          current={current.barracks}
          target={target.barracks}
          setCurrent={setCurrentBarracks}
          setTarget={setTargetBarracks}
        />
        <LevelSelectors
          label="Mages Tower"
          max={15}
          current={current.mageTower}
          target={target.mageTower}
          setCurrent={setCurrentMageTower}
          setTarget={setTargetMageTower}
        />
        <LevelSelectors
          label="Treasury"
          max={20}
          current={current.treasury}
          target={target.treasury}
          setCurrent={setCurrentTreasury}
          setTarget={setTargetTreasury}
        />
        <LevelSelectors
          label="Smithy"
          max={20}
          current={current.smithy}
          target={target.smithy}
          setCurrent={setCurrentSmithy}
          setTarget={setTargetSmithy}
        />
        <LevelSelectors
          label="Fortifications"
          max={20}
          current={current.fortifications}
          target={target.fortifications}
          setCurrent={setCurrentFortifications}
          setTarget={setTargetFortifications}
        />
      </div>
      <Stats />
    </>
  );
};

export default Fortress;
