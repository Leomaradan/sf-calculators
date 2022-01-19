import LabelUcFirst from './LabelUcFirst';

export interface ILevelSelectorsProps {
  max: number | { current: number; target: number };
  label: string;
  currentLabel?: string;
  targetLabel?: string;
  current: number;
  target: number;
  setCurrent(current: number): void;
  setTarget(target: number): void;
  childForm?: boolean;
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
  childForm,
}: ILevelSelectorsProps) => {
  const maxCurrent = typeof max === 'number' ? max : max.current;
  const maxTarget = typeof max === 'number' ? max : max.target;

  const onChangeCurrent = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const value = parseInt(e.currentTarget.value, 10);

    setCurrent(value);
    if (value > target) {
      setTarget(value);
    }
  };

  const onChangeTarget = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const value = parseInt(e.currentTarget.value, 10);

    if (value >= current) {
      setTarget(value);
    }
  };

  return (
    <div className="row">
      <div className="col">
        <label className="form-label">
          {childForm && <i className="bi bi-arrow-return-right" />}
          <LabelUcFirst>{label}</LabelUcFirst>
        </label>
      </div>
      <div className="col">
        <input
          type="number"
          min="0"
          max={maxCurrent}
          value={current}
          onInput={onChangeCurrent}
          className="form-control"
          placeholder={currentLabel}
          aria-label={currentLabel}
        />
      </div>
      <div className="col">
        <input
          type="number"
          min={current}
          max={maxTarget}
          value={target}
          onInput={onChangeTarget}
          className="form-control"
          placeholder={targetLabel}
          aria-label={targetLabel}
        />
      </div>
    </div>
  );
};
