import { SearchContent } from '.';

const dummyData = Array(6).fill({ name: '유저 닉네임', comment: '오늘도 화이팅:)' });

export const SearchContents = () => {
  return (
    <div>
      {dummyData.map(({ name, comment }, index) => (
        <SearchContent key={index} name={name} comment={comment} />
      ))}
    </div>
  );
};
