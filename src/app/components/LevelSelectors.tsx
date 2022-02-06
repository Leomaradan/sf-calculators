import { useEffect } from 'preact/hooks';
import LabelUcFirst from './LabelUcFirst';
import ModalPopup from './ModalPopup';
import NumberDisplay from './NumberDisplay';

interface ILevelProps {
  value: number;
  label?: string;
  range?: boolean;
  min: number;
  max: number;
  placeholder?: string;
  onChange: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
}

const Level = ({
  max,
  min,
  onChange,
  placeholder,
  value,
  range,
  label,
}: ILevelProps) => {
  if (range) {
    return (
      <div class="input-group">
        <input
          aria-label={label}
          className="form-control"
          max={max}
          min={min}
          onInput={onChange}
          placeholder={placeholder}
          type="range"
          value={value}
        />
        <span class="input-group-text">
          <NumberDisplay>{value}</NumberDisplay>
        </span>
      </div>
    );
  }
  return (
    <input
      aria-label={label}
      className="form-control"
      max={max}
      min={min}
      onInput={onChange}
      placeholder={placeholder}
      type="number"
      value={value}
    />
  );
};
export interface ILevelSelectorsProps {
  childForm?: boolean;
  current: number;
  currentLabel?: string;
  label: string;
  max: number | { current: number; target: number };
  min?: number;
  target: number;
  targetLabel?: string;
  additionalStats?: (props: {
    type: 'current' | 'target';
    value: number;
  }) => JSX.Element;
  setCurrent(current: number): void;
  setTarget(target: number): void;
  range?: boolean;
}

export const LevelSelectors = ({
  additionalStats: AdditionalStats,
  childForm,
  current,
  currentLabel,
  label,
  max,
  min,
  setCurrent,
  range,
  setTarget,
  target,
  targetLabel,
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

  useEffect(() => {
    if (current > maxCurrent) {
      setCurrent(maxCurrent);
    }
  }, [maxCurrent]);

  useEffect(() => {
    if (target > maxTarget) {
      setTarget(maxTarget);
    }
  }, [maxTarget]);

  return (
    <div className="row level-selector">
      <div className="col-lg-4 col-md-12">
        <label className="form-label">
          {childForm && <i className="bi bi-arrow-return-right" />}
          <LabelUcFirst>{label}</LabelUcFirst>
        </label>
      </div>
      <div className="col-lg-4 col-md-12">
        <Level
          label={currentLabel}
          max={maxCurrent}
          min={min ?? 0}
          onChange={onChangeCurrent}
          placeholder={currentLabel}
          range={range}
          value={current}
        />

        {AdditionalStats && (
          <>
            <p className="d-none d-sm-block">
              <small>
                <AdditionalStats type="current" value={current} />
              </small>
            </p>
            <div className="d-block d-sm-none">
              <ModalPopup label="...">
                <AdditionalStats type="current" value={current} />
              </ModalPopup>
            </div>
          </>
        )}
      </div>
      <div className="col-lg-4 col-md-12">
        <Level
          label={targetLabel}
          max={maxTarget}
          min={current}
          onChange={onChangeTarget}
          placeholder={targetLabel}
          range={range}
          value={target}
        />
        {AdditionalStats && (
          <>
            <p className="d-none d-sm-block">
              <small>
                <AdditionalStats type="target" value={target} />
              </small>
            </p>
            <div className="d-block d-sm-none">
              <ModalPopup label="...">
                <AdditionalStats type="target" value={target} />
              </ModalPopup>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
