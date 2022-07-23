import { gql, useLazyQuery } from '@apollo/client';

const SEARCH_USERS = gql`
  query SearchUsers(
    $searchQuery: String
    $jobs: [String!]
    $interests: [String!]
    $page: Int!
    $size: Int!
  ) {
    searchUsers(
      searchQuery: $searchQuery
      jobs: $jobs
      interests: $interests
      page: $page
      size: $size
    ) {
      paginationInfo {
        hasNext
      }
      users {
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
// 특정 유저의 일정의 경우
// 아직 완성이 되지 않아 추후에 SEARCH_USER에 추가

export const useSearchUser = () => {
  const [search_user, { data }] = useLazyQuery(SEARCH_USER);

  return { search_user, data };
};
