import { gql, useLazyQuery, useMutation } from '@apollo/client';

const SEARCH_USERS = gql`
  query SearchUsers(
    $searchQuery: String
    $jobs: [String!]
    $interests: [String!]
    $sort: SearchUserSort
    $page: Int!
    $size: Int!
  ) {
    searchUsers(
      searchQuery: $searchQuery
      jobs: $jobs
      interests: $interests
      sort: $sort
      page: $page
      size: $size
    ) {
      users {
        id
        nickname
        profileImageUrl
        goal
      }
    }
  }
`;

export const useSearchUsers = () => {
  const [search_users, { data }] = useLazyQuery(SEARCH_USERS);

  return { search_users, data };
};

const SEARCH_USER = gql`
  query SearchUser($id: ID) {
    user(id: $id) {
      id
      email
      nickname
      profileImageUrl
      goal
      followerCount
      followeeCount
      jobs
      interests
      followed
    }
  }
`;

export const useSearchUser = () => {
  const [search_user, { data }] = useLazyQuery(SEARCH_USER);

  return { search_user, data };
};

const SCHEDULES = gql`
  query Schedules($date: Timestamp!, $userId: ID) {
    schedules(date: $date, userId: $userId) {
      schedules {
        id
        name
        status
        category {
          id
          color
          openType
        }
        dateTimeStart
        dateTimeEnd
        stickerCount
        stickerNames
      }
    }
  }
`;

export const useSchedules = () => {
  const [schedules, { data, refetch }] = useLazyQuery(SCHEDULES);

  return { schedules, data, refetch };
};

const FOLLOWEES = gql`
  query Followees($page: Int!, $size: Int!, $userId: ID) {
    followees(page: $page, size: $size, userId: $userId) {
      paginationInfo {
        hasNext
      }
      followees {
        id
        nickname
        profileImageUrl
      }
    }
  }
`;

export const useFollowees = () => {
  const [followees, { data }] = useLazyQuery(FOLLOWEES);

  return { followees, data };
};

const CREATE_FOLLOW = gql`
  mutation CreateFollow($input: CreateFollowInput!) {
    createFollow(input: $input)
  }
`;

export const useCreateFollow = () => {
  const [create_follow] = useMutation(CREATE_FOLLOW);

  return { create_follow };
};
