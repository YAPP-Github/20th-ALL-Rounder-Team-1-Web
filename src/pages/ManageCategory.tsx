import { PageLayout } from '@/components';
import { CategoryList } from '@/components/common/CategoryList';
import styled from 'styled-components';

const ManageCategory = () => {
  return (
    <PageLayout title="카테고리" isFooter={false}>
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
