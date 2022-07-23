import { gql, useLazyQuery, useMutation } from '@apollo/client';

const SCHEDULE_CATEGORIES = gql`
  query ScheduleCategories($sort: ScheduleCategorySort!, $page: Int!, $size: Int!) {
    scheduleCategories(sort: $sort, page: $page, size: $size) {
      paginationInfo {
        hasNext
      }
      scheduleCategories {
        id
        name
        color
        openType
      }
    }
  }
`;

export const useScheduleCategories = () => {
  const [schedule_categories, { data }] = useLazyQuery(SCHEDULE_CATEGORIES);

  return { schedule_categories, data };
};

const SEARCH_SCHEDULES = gql`
  query SearchSchedules(
    $sort: ScheduleCategorySort!
    $page: Int!
    $size: Int!
    $searchQuery: String
    $categoryId: ID!
  ) {
    searchSchedules(
      sort: $sort
      page: $page
      size: $size
      searchQuery: $searchQuery
      categoryId: $categoryId
    ) {
      paginationInfo {
        hasNext
      }
      schedules {
        id
        name
        category {
          id
          name
          color
          openType
        }
        dateTimeStart
        dateTimeEnd
        repeatType
        dateSkip
      }
    }
  }
`;

export const useSearchSchedules = () => {
  const [search_schedules, { data }] = useLazyQuery(SEARCH_SCHEDULES);

  return { search_schedules, data };
};

const DELETE_CATEGORY = gql`
  mutation DeleteCategory($input: DeleteScheduleCategoryInput!) {
    deleteCategory(input: $input)
  }
`;

export const useDeleteCategory = () => {
  const [delete_category, { data }] = useMutation(DELETE_CATEGORY);

  return { delete_category, data };
};
