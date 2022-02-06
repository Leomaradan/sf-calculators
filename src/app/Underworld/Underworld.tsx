import type { AnyAction, Dispatch } from '@reduxjs/toolkit';
import {
  setCurrent,
  setTarget,
  seTargetHeroesLevel,
  setCurrentHeroesLevel,
} from '../../features/underworld/underworldSlice';
import type { IUnderworldState } from '../../features/underworld/types';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { LevelSelectors } from '../components/LevelSelectors';
import ExtractorStat from './ExtractorStat';
import UnderworldStats from './UnderworldStats';
import AdventureStat from './AdventureStat';
import GladiatorStat from './GladiatorStat';
import GateStat from './GateStat';
import FightStat from './FightStat';

const useUnderworldDispatchers = (
  dispatch: Dispatch<AnyAction>,
  building: keyof IUnderworldState,
) => {
  const setCurrentDispatch = (num: number) => {
    dispatch(setCurrent({ [building]: num }));
  };

  const setTargetDispatch = (num: number) => {
    dispatch(setTarget({ [building]: num }));
  };

  return [setCurrentDispatch, setTargetDispatch];
};

const Underworld = () => {
  const { current, target, currentHeroesLevel, targetHeroesLevel } =
    useAppSelector((state) => state.underworld);

  const dispatch = useAppDispatch();

  // const { underworld } = useLanguage();

  const [setCurrentAdventure, setTargetAdventure] = useUnderworldDispatchers(
    dispatch,
    'adventure',
  );
  const [setCurrentExtractor, setTargetExtractor] = useUnderworldDispatchers(
    dispatch,
    'extractor',
  );
  const [setCurrentGate, setTargetGate] = useUnderworldDispatchers(
    dispatch,
    'gate',
  );
  const [setCurrentGladiator, setTargetGladiator] = useUnderworldDispatchers(
    dispatch,
    'gladiator',
  );

  const [setCurrentGoblinUpgrade, setTargetGoblinUpgrade] =
    useUnderworldDispatchers(dispatch, 'goblinUpgrade');

  const [setCurrentGoblinPit, setTargetGoblinPit] = useUnderworldDispatchers(
    dispatch,
    'goblinPit',
  );
  const [setCurrentGoldPit, setTargetGoldPit] = useUnderworldDispatchers(
    dispatch,
    'gold',
  );
  const [setCurrentHearth, setTargetHearth] = useUnderworldDispatchers(
    dispatch,
    'heart',
  );
  const [setCurrentKeeper, setTargetKeeper] = useUnderworldDispatchers(
    dispatch,
    'keeper',
  );
  const [setCurrentKeeperUpgrade, setTargetKeeperUpgrade] =
    useUnderworldDispatchers(dispatch, 'keeperUpgrade');
  const [setCurrentTorture, setTargetTorture] = useUnderworldDispatchers(
    dispatch,
    'torture',
  );
  const [setCurrentTrollBlock, setTargetTrollBlock] = useUnderworldDispatchers(
    dispatch,
    'trollBlock',
  );

  const setCurrentHeroesLevelDispatch = (num: number) => {
    dispatch(setCurrentHeroesLevel(num));
  };

  const setTargetHeroesLevelDispatch = (num: number) => {
    dispatch(seTargetHeroesLevel(num));
  };

  const [setCurrentTrollUpgrade, setTargetTrollUpgrade] =
    useUnderworldDispatchers(dispatch, 'trollUpgrade');

  return (
    <>
      <div className="container">
        <LevelSelectors
          current={current.heart}
          label="Hearth of Darkness"
          max={15}
          setCurrent={setCurrentHearth}
          setTarget={setTargetHearth}
          target={target.heart}
        />
        <LevelSelectors
          additionalStats={ExtractorStat}
          current={current.extractor}
          label="Soul Extractor"
          max={{
            current: current.heart,
            target: target.heart,
          }}
          setCurrent={setCurrentExtractor}
          setTarget={setTargetExtractor}
          target={target.extractor}
        />
        <LevelSelectors
          additionalStats={GateStat}
          current={current.gate}
          label="Underworld Gate"
          max={{
            current: current.heart,
            target: target.heart,
          }}
          setCurrent={setCurrentGate}
          setTarget={setTargetGate}
          target={target.gate}
        />
        <LevelSelectors
          current={current.torture}
          label="Torture Chamber"
          max={{
            current: current.heart,
            target: target.heart,
          }}
          setCurrent={setCurrentTorture}
          setTarget={setTargetTorture}
          target={target.torture}
        />
        <LevelSelectors
          current={current.keeper}
          label="Keeper"
          max={{
            current: current.heart,
            target: target.heart,
          }}
          setCurrent={setCurrentKeeper}
          setTarget={setTargetKeeper}
          target={target.keeper}
        />
        <LevelSelectors
          additionalStats={GladiatorStat}
          current={current.gladiator}
          label="Gladiator Trainer"
          max={{
            current: current.heart,
            target: target.heart,
          }}
          setCurrent={setCurrentGladiator}
          setTarget={setTargetGladiator}
          target={target.gladiator}
        />
        <LevelSelectors
          current={current.goblinPit}
          label="Gobelin Pit"
          max={{
            current: current.heart,
            target: target.heart,
          }}
          setCurrent={setCurrentGoblinPit}
          setTarget={setTargetGoblinPit}
          target={target.goblinPit}
        />
        <LevelSelectors
          current={current.trollBlock}
          label="Troll Block"
          max={{
            current: current.heart,
            target: target.heart,
          }}
          setCurrent={setCurrentTrollBlock}
          setTarget={setTargetTrollBlock}
          target={target.trollBlock}
        />
        <LevelSelectors
          current={current.gold}
          label="Gold Pit"
          max={{
            current: current.heart,
            target: target.heart,
          }}
          setCurrent={setCurrentGoldPit}
          setTarget={setTargetGoldPit}
          target={target.gold}
        />
        <LevelSelectors
          additionalStats={AdventureStat}
          current={current.adventure}
          label="Adventuromatic"
          max={{
            current: current.heart,
            target: target.heart,
          }}
          setCurrent={setCurrentAdventure}
          setTarget={setTargetAdventure}
          target={target.adventure}
        />
        <LevelSelectors
          range
          additionalStats={FightStat}
          current={currentHeroesLevel ?? 1}
          label="Heroes level"
          max={580}
          min={1}
          setCurrent={setCurrentHeroesLevelDispatch}
          setTarget={setTargetHeroesLevelDispatch}
          target={targetHeroesLevel ?? 1}
        />
      </div>
      <UnderworldStats />
    </>
  );
};

export default Underworld;