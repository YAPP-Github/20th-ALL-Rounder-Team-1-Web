import { PageLayout } from '@/components';
import { SettingSidebar } from '@/components/common/SettingSidebar';
import { SettingContext } from '@/contexts';
import { useContext } from 'react';
import styled from 'styled-components';

const Setting = () => {
  const { currentContent } = useContext(SettingContext);

  return (
    <PageLayout title="세팅 페이지" isFooter={false}>
      <Wrapper>
        <SettingSidebar />
        <ContentWrapper>{currentContent}</ContentWrapper>
      </Wrapper>
    </PageLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 86px;
  margin-bottom: 32px;
  gap: 20px;
`;

const ContentWrapper = styled.div`
  width: 739px;
  height: 758px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid black;
  padding: 60px 40px;
  text-align: start;
`;

export default Setting;
