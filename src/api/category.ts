import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';

import { SORT } from '@/models';

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

export const useScheduleCategories = (sort: SORT, page: number, size: number) => {
  const { data, loading, refetch } = useQuery(SCHEDULE_CATEGORIES, {
    variables: {
      sort,
      page,
      size,
    },
  });

  return { data, loading, refetch };
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
        repeatSelectedValue
        memo
        dateSkip
      }
    }
  }
`;

export const useSearchSchedules = () => {
  const [search_schedules, { data }] = useLazyQuery(SEARCH_SCHEDULES);

  return { search_schedules, data };
};

const CREATE_CATEGORY = gql`
  mutation CreateCategory($scheduleCategoryInput: ScheduleCategoryInput!) {
    createCategory(scheduleCategoryInput: $scheduleCategoryInput)
  }
`;

export const useCreateCategory = () => {
  const [create_category, { data }] = useMutation(CREATE_CATEGORY);

  return { create_category, data };
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

const DELETE_SCHEDULE = gql`
  mutation DeleteSchedule($input: DeleteScheduleInput!) {
    deleteSchedule(input: $input)
  }
`;

export const useDeleteSchedule = () => {
  const [delete_schedule, { data }] = useMutation(DELETE_SCHEDULE);

  return { delete_schedule, data };
};

const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($categoryId: ID!, $scheduleCategoryInput: ScheduleCategoryInput!) {
    updateCategory(categoryId: $categoryId, scheduleCategoryInput: $scheduleCategoryInput) {
      id
      name
      color
      openType
    }
  }
`;

export const useUpdateCategory = () => {
  const [update_category] = useMutation(UPDATE_CATEGORY);

  return { update_category };
};
