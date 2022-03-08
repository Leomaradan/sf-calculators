import type { FunctionComponent } from 'preact';
import { useLanguageResolver } from '../../../lang/LanguageContext';
import { CardBody } from './CardBody';
export interface ICardProps {
  description?: string;
  footer?: string;
  header?: string;
  heightViewport?: number;
  image?: string;
  imageSize?: number;
  isGridLayout?: boolean;
  title?: string;
}

export const Card: FunctionComponent<ICardProps> = ({
  children,
  description,
  footer,
  header,
  heightViewport,
  image,
  imageSize,
  isGridLayout,
  title,
}) => {
  const resolver = useLanguageResolver();
  const style = heightViewport ? { height: `${heightViewport}vh` } : {};
  const imageStyle = imageSize ? { width: `${imageSize}%` } : {};
  return (
    <div className="card" style={style}>
      {header && <h2 className="card-header">{resolver(header)}</h2>}
      {image && (
        <img
          alt={header ?? title ?? 'Card image'}
          className="card-img-top"
          src={image}
          style={imageStyle}
        />
      )}
      <CardBody isGridLayout={isGridLayout}>
        {title && <h5 className="card-title">{resolver(title)}</h5>}
        {description && <p className="card-text">{resolver(description)}</p>}
        {children}
        {footer && <p>{resolver(footer)}</p>}
      </CardBody>
    </div>
  );
};
