import type { FunctionComponent } from 'preact';
import { useMemo } from 'preact/hooks';

const ModalPopup: FunctionComponent<{ label: string }> = ({
  children,
  label,
}) => {
  const id = useMemo(() => Math.ceil(10000 * Math.random()), []);

  return (
    <>
      <button
        className="btn btn-secondary"
        data-bs-target={`#modal${id}`}
        data-bs-toggle="modal"
        type="button"
      >
        {label}
      </button>
      <div
        aria-hidden="true"
        className="modal fade"
        id={`modal${id}`}
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPopup;
