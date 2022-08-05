import { gql, useMutation } from '@apollo/client';

const CREATE_SCHEDULE = gql`
  mutation CreateSchedule($scheduleInput: ScheduleInput!) {
    createSchedule(input: $scheduleInput)
  }
`;

export const useCreateSchedule = () => {
  const [create_schedule] = useMutation(CREATE_SCHEDULE);

  return { create_schedule };
};
