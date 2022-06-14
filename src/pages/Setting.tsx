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
        {currentContent}
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

export default Setting;
