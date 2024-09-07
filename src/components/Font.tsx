import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Para definir el tipo de icono

interface FontProps {
  css?: string;
  icon: IconProp;
}

export const Font: React.FC<FontProps> = ({ css, icon }) => {
  return (
    <FontAwesomeIcon className={css} icon={icon} />
  );
};
