import styled from 'styled-components';

interface FriendStoryProps {
  imgUrl?: string;
  name: string;
  selected?: boolean;
}

export const FriendStory = ({ imgUrl, name, selected = false }: FriendStoryProps) => {
  return (
    <Wrapper>
      <Image selected={selected}>{imgUrl && <img className="with_image" src={imgUrl} />}</Image>
      <Name>{name}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60px;
  height: 90px;
  gap: 8px;
`;

const Image = styled.div<{ selected: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 20.33px;
  border: ${({ selected, theme: { colors } }) => selected && `3px solid ${colors.WeekandBlue}`};
  background-color: ${({ theme: { colors } }) => colors.Gray300};

  .with_image {
    width: 60px;
    height: 60px;
    border-radius: 20.33px;
  }
`;

const Name = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.Gray600};
`;
