import styles from './SocialIcon.module.scss';
import { socialIcon } from '../../../../utils/data-config';

export default function SocialIcon() {
  return (
    <div className={styles.socialIconWrap}>
      {socialIcon.map((data, index) => (
        <a
          href={data.url}
          key={index}
          className={styles.iconInfo}
        >
          <i className={data.icon} />
        </a>
      ))}
    </div>
  );
}
