import type { FunctionComponent } from 'preact';
import styled from 'styled-components';

interface ICardBodyProps {
  readonly className?: string;
  readonly isGridLayout?: boolean;
}

export const CardBodyContainer: FunctionComponent<ICardBodyProps> = (props) => (
  <div
    className={`${props.className} card-body ${
      props.isGridLayout ? 'isGridLayout' : 'isListLayout'
    }`}
  >
    {props.children}
  </div>
);

export const CardBody = styled(CardBodyContainer)`
  &.isGridLayout {
    display: grid;
    grid-template-areas: 'left left z1 z1 z1 z2 z2 z2 right right' 'z3 z3 z3 z4 z4 z4 z4 z5 z5 z5';
  }
`;
