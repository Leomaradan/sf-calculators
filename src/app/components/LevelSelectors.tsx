export interface ILevelSelectorsProps {
  max: number | { current: number; target: number };
  label: string;
  currentLabel?: string;
  targetLabel?: string;
  current: number;
  target: number;
  setCurrent: (current: number) => void;
  setTarget: (target: number) => void;
}

export const LevelSelectors = ({
  currentLabel,
  max,
  targetLabel,
  current,
  setCurrent,
  setTarget,
  target,
  label,
}: ILevelSelectorsProps) => {
  const maxCurrent = typeof max === "number" ? max : max.current;
  const maxTarget = typeof max === "number" ? max : max.target;

  console.log({ maxCurrent, maxTarget });

  const onChangeCurrent = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const value = parseInt(e.currentTarget.value);

    setCurrent(value);
    if (value > target) {
      setTarget(value);
    }
  };

  const onChangeTarget = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const value = parseInt(e.currentTarget.value);

    if (value > current) {
      setTarget(value);
    }
  };

  return (
    <div class="row">
      <div class="col">
        <label class="form-label">{label}</label>
      </div>
      <div class="col">
        <input
          type="number"
          min="0"
          max={maxCurrent}
          value={current}
          onInput={onChangeCurrent}
          class="form-control"
          placeholder={currentLabel}
          aria-label={currentLabel}
        />
      </div>
      <div class="col">
        <input
          type="number"
          min={current}
          max={maxTarget}
          value={target}
          onInput={onChangeTarget}
          class="form-control"
          placeholder={targetLabel}
          aria-label={targetLabel}
        />
      </div>
    </div>
  );
};
