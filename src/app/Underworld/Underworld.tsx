import type { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import type { IUnderworldState } from '../../features/underworld/types';
import {
  seTargetHeroesLevel,
  setCurrent,
  setCurrentHeroesLevel,
  setTarget,
} from '../../features/underworld/underworldSlice';
import { useLanguage } from '../../lang/LanguageContext';
import { LevelSelectors } from '../components/LevelSelectors';
import AdventureStat from './AdventureStat';
import ExtractorStat from './ExtractorStat';
import FightStat from './FightStat';
import GateStat from './GateStat';
import GladiatorStat from './GladiatorStat';
import UnderworldStats from './UnderworldStats';

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
  const { current, currentHeroesLevel, target, targetHeroesLevel } =
    useAppSelector((state) => state.underworld);

  const dispatch = useAppDispatch();

  const {
    underworld: {
      adventuromatic,
      gladiatorTrainer,
      goblinPit,
      goldPit,
      heartOfDarkness,
      heroesLevel,
      keeper,
      soulExtractor,
      tortureChamber,
      trollBlock,
      underworldGate,
    },
  } = useLanguage();

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
          label={heartOfDarkness}
          max={15}
          setCurrent={setCurrentHearth}
          setTarget={setTargetHearth}
          target={target.heart}
        />
        <LevelSelectors
          additionalStats={ExtractorStat}
          current={current.extractor}
          label={soulExtractor}
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
          label={underworldGate}
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
          label={tortureChamber}
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
          label={keeper}
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
          label={gladiatorTrainer}
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
          label={goblinPit}
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
          label={trollBlock}
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
          label={goldPit}
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
          label={adventuromatic}
          max={{
            current: current.heart,
            target: target.heart,
          }}
          setCurrent={setCurrentAdventure}
          setTarget={setTargetAdventure}
          target={target.adventure}
        />
        <LevelSelectors
          additionalStats={FightStat}
          current={currentHeroesLevel ?? 1}
          label={heroesLevel}
          max={580}
          min={1}
          range
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
