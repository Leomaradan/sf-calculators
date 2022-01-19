import { FunctionComponent } from "preact";

export const NumberDisplay: FunctionComponent = ({ children }) => {
  console.log({ children });
  if (typeof children === "number") {
    return <>{Intl.NumberFormat().format(children)}</>;
  }
  return <>{children}</>;
};
