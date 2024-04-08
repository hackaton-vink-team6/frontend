import memberHeaderStyles from './header-member.module.scss';

import testUserImage from '../../assets/test-image.avif';

interface IHeaderMemberProps {
  members: string[];
  overflow: boolean;
}

export const HeaderMember: React.FC<IHeaderMemberProps> = ({
  members,
  overflow,
}): JSX.Element => {
  return (
    <li className={memberHeaderStyles.member}>
      {!overflow ? (
        <>
          <img
            alt="изображение участника чата"
            src={testUserImage}
            className={memberHeaderStyles.memberImage}
          />
          <span className={memberHeaderStyles.tooltip}>{members[0]}</span>
        </>
      ) : (
        <>
          <div className={memberHeaderStyles.memberOverlay}>
            <img
              alt="изображение участника чата"
              src={testUserImage}
              className={`${memberHeaderStyles.memberOverlay} ${memberHeaderStyles.absoluteMember}`}
            />
            <p className={memberHeaderStyles.text}>+{members.length}</p>
          </div>
          <span
            className={`${memberHeaderStyles.tooltip} ${memberHeaderStyles.tooltipList}`}
          >
            <ul className={memberHeaderStyles.list}>
              {members.map((item, idx) => (
                <li key={idx} className={memberHeaderStyles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </span>
        </>
      )}
    </li>
  );
};
