import { gql, useLazyQuery } from '@apollo/client';

const NOTIFICATIONS = gql`
  query Notifications($page: Int!, $size: Int!) {
    notifications(page: $page, size: $size) {
      notifications {
        id
        message
        type
      }
    }
  }
`;

export const useNotifications = () => {
  const [notifications, { data }] = useLazyQuery(NOTIFICATIONS);

  return { notifications, data };
};
