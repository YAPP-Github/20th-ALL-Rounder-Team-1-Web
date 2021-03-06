import styled from 'styled-components';

import { CategoryList } from './components';

import { PageLayout } from '@/common';

const ManageCategory = () => {
  return (
    <PageLayout isFooter={false}>
      <Title>카테고리</Title>
      <CategoryList />
    </PageLayout>
  );
};

const Title = styled.h1`
  ${({ theme: { fonts } }) => fonts.Title}
  color: ${({ theme: { colors } }) => colors.Gray900};
  text-align: start;
  margin-top: 86px;
  margin-bottom: 40px;
`;

export default ManageCategory;
