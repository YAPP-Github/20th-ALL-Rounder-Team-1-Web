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

const CREATE_SCHEDULE_STICKER = gql`
  mutation CreateScheduleSticker($createScheduleStickerInput: CreateScheduleStickerInput!) {
    createScheduleSticker(input: $createScheduleStickerInput)
  }
`;

export const useCreateScheduleSticker = () => {
  const [create_schedule_sticker] = useMutation(CREATE_SCHEDULE_STICKER);

  return { create_schedule_sticker };
};
