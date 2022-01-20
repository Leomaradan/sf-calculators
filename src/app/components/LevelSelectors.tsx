import LabelUcFirst from './LabelUcFirst';
import ModalPopup from './ModalPopup';

export interface ILevelSelectorsProps {
  childForm?: boolean;
  current: number;
  currentLabel?: string;
  label: string;
  max: number | { current: number; target: number };
  target: number;
  targetLabel?: string;
  additionalStats?: (props: {
    type: 'current' | 'target';
    value: number;
  }) => JSX.Element;
  setCurrent(current: number): void;
  setTarget(target: number): void;
}

export const LevelSelectors = ({
  additionalStats: AdditionalStats,
  childForm,
  current,
  currentLabel,
  label,
  max,
  setCurrent,
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

  return (
    <div className="row level-selector">
      <div className="col-lg-4 col-md-12">
        <label className="form-label">
          {childForm && <i className="bi bi-arrow-return-right" />}
          <LabelUcFirst>{label}</LabelUcFirst>
        </label>
      </div>
      <div className="col-lg-4 col-md-12">
        <input
          aria-label={currentLabel}
          className="form-control"
          max={maxCurrent}
          min="0"
          onInput={onChangeCurrent}
          placeholder={currentLabel}
          type="number"
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
        <input
          aria-label={targetLabel}
          className="form-control"
          max={maxTarget}
          min={current}
          onInput={onChangeTarget}
          placeholder={targetLabel}
          type="number"
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
