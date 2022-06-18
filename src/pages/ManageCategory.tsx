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
  font-size: 22px;
  font-weight: 700;
  line-height: 33px;
  color: ${({ theme: { colors } }) => colors.Gray900};
  text-align: start;
  margin-top: 86px;
  margin-bottom: 40px;
`;

export default ManageCategory;
