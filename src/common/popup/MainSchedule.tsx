import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import dayjs from 'dayjs';
import styled from 'styled-components';

import { useCreateSchedule, useScheduleCategories } from '@/api';
import { PopUpContext } from '@/contexts';
import { useDate } from '@/hooks';
import { DAY_NAME, REPEAT_TYPE, SORT } from '@/models';
import { Day, ICategory } from '@/types';

import { Button, Calender, Input, InputRef, RepeatSchedule, TimePicker } from '..';

const categories = ['공부', '자기개발', '취미생활', '업무'];

export const MainSchedule = () => {
  const { setIsPopped } = useContext(PopUpContext);
  const { today, date, setDate } = useDate();
  const [showCategory, setShowCategory] = useState(false);
  const [clickedCategory, setClickedCategory] = useState<ICategory>({} as ICategory);
  const [contentName, setContentName] = useState('');
  const [content, setContent] = useState<ReactNode>();
  const [isRepeat, setIsRepeat] = useState(false);
  const [isMemo, setIsMemo] = useState(false);
  const [repeatText, setRepeatText] = useState('매일 반복');
  const memo = useRef<HTMLTextAreaElement>(null);
  const scheduleName = useRef<InputRef>(null);
  const [startTime, setStartTime] = useState<Day>(today);
  const [endTime, setEndTime] = useState<Day>(today);
  const [repeatType, setRepeatType] = useState<keyof typeof REPEAT_TYPE>('ONCE');
  const [repeatEndDate, setRepeatEndDate] = useState<Day>(today);
  const [isNoRepeat, setIsNoRepeat] = useState(true);
  const [repeatSelectedValue, setRepeatSelectedValue] = useState<string[]>([]);
  const { data } = useScheduleCategories(SORT.DATE_CREATED_ASC, 0, 9);
  const { create_schedule } = useCreateSchedule();
  const categories = data?.scheduleCategories.scheduleCategories;

  const closePopup = () => {
    setIsPopped(false);
  };

  useEffect(() => {
    if (isNoRepeat && repeatType === REPEAT_TYPE.DAILY) {
      setRepeatText('매일 반복');
      return;
    }

    if (repeatType === REPEAT_TYPE.DAILY) {
      setRepeatText(`${repeatEndDate.format('YYYY.MM.DD')}까지 매일 반복`);
      return;
    }

    if (isNoRepeat && repeatType === REPEAT_TYPE.WEEKLY) {
      setRepeatText(`매주 ${repeatSelectedValue.join(', ')} 반복`);
      return;
    }

    if (repeatType === REPEAT_TYPE.WEEKLY) {
      setRepeatText(
        `${repeatEndDate.format('YYYY.MM.DD')}까지 매주 ${repeatSelectedValue.join(', ')} 반복`
      );
    }

    if (isNoRepeat && repeatType === REPEAT_TYPE.MONTHLY) {
      setRepeatText('매월 반복');
      return;
    }

    if (repeatType === REPEAT_TYPE.MONTHLY) {
      setRepeatText(`${repeatEndDate.format('YYYY.MM.DD')}까지 매월 반복`);
      return;
    }

    if (isNoRepeat && repeatType === REPEAT_TYPE.YEARLY) {
      setRepeatText('매년 반복');
      return;
    }

    if (repeatType === REPEAT_TYPE.YEARLY) {
      setRepeatText(`${repeatEndDate.format('YYYY.MM.DD')}까지 매년 반복`);
      return;
    }
  }, [repeatType, repeatEndDate, repeatSelectedValue]);

  useEffect(() => {
    if (contentName === '시작날짜' || contentName === '시작시간') {
      setStartTime(date);
      return;
    }

    if (contentName === '종료날짜' || contentName === '종료시간') {
      setEndTime(date);
      return;
    }

    if (contentName === '반복') {
      setRepeatEndDate(date);
      return;
    }
  }, [date]);

  useEffect(() => {
    if (!categories) {
      return;
    }
    setClickedCategory(categories[0]);
  }, [categories]);

  useEffect(() => {
    if (contentName === '시작날짜') {
      setContent(<Calender today={today} date={date} setDate={setDate} className="schedule" />);
      return;
    }

    if (contentName === '종료날짜') {
      setContent(<Calender today={today} date={date} setDate={setDate} className="schedule" />);
      return;
    }

    if (contentName === '시작시간') {
      setContent(<TimePicker date={date} setDate={setDate} />);
      return;
    }

    if (contentName === '종료시간') {
      setContent(<TimePicker date={date} setDate={setDate} />);
      return;
    }

    if (contentName === '반복') {
      setContent(
        <RepeatSchedule
          today={today}
          date={date}
          setDate={setDate}
          isNoRepeat={isNoRepeat}
          setIsNoRepeat={setIsNoRepeat}
          repeatType={repeatType}
          setRepeatType={setRepeatType}
          repeatSelectedValue={repeatSelectedValue}
          setRepeatSelectedValue={setRepeatSelectedValue}
        />
      );
    }
  }, [contentName, date, repeatType, repeatSelectedValue, isNoRepeat]);

  const onClick = async () => {
    const days = repeatSelectedValue.map((value) => {
      if (value === '월') {
        return 'MONDAY';
      }
      if (value === '화') {
        return 'TUESDAY';
      }
      if (value === '수') {
        return 'WEDNESDAY';
      }
      if (value === '목') {
        return 'THURSDAY';
      }
      if (value === '금') {
        return 'FRIDAY';
      }
      if (value === '토') {
        return 'SATURDAY';
      }
      if (value === '일') {
        return 'SUNDAY';
      }
    });

    const data = await create_schedule({
      variables: {
        scheduleInput: {
          name: scheduleName.current?.value,
          categoryId: clickedCategory.id,
          dateTimeStart: startTime.valueOf(),
          dateTimeEnd: endTime.valueOf(),
          repeatType: repeatType,
          repeatSelectedValue: days,
          ...(repeatEndDate.format('YYYYMMDD') !== today.format('YYYYMMDD') && {
            repeatEnd: repeatEndDate.valueOf(),
          }),
          ...(memo.current?.value && { memo: memo.current.value }),
        },
      },
    });
  };

  return (
    <>
      <Header>
        <Title>일정</Title>
        <Button
          onClick={() => {
            const a = date.set('hour', 23);
            setDate(a);
            console.log(a.unix());
            const tmp = a.unix();
            console.log(dayjs.unix(tmp));
          }}
        >
          바꿔보자
        </Button>
        <Button
          onClick={() => {
            console.log(date);
            console.log(date.month());
            console.log(date.date());
            console.log(date.hour());
            console.log(date.minute());
          }}
        >
          장동균!!
        </Button>
        <Button
          onClick={() => {
            console.log('시작시간');
            console.log(startTime);
            console.log(startTime.hour());
            console.log(startTime.minute());
          }}
        >
          니니니니
        </Button>
        <Button
          onClick={() => {
            console.log('종료시간');
            console.log(endTime);
          }}
        >
          나나나나
        </Button>
        <CloseButton onClick={closePopup}></CloseButton>
      </Header>
      <Selector>
        <LeftContent>
          <Name>
            <NameLabel htmlFor="schedule">일정 이름</NameLabel>
            <NameInput className="schedule_input" id="schedule" ref={scheduleName} />
          </Name>
          <Category>
            <CartegoryLabel>카테고리</CartegoryLabel>
            <CategoryButton
              color={clickedCategory.color}
              onClick={() => setShowCategory(!showCategory)}
            >
              {clickedCategory.name}
            </CategoryButton>
            {showCategory && categories && (
              <CategoryListButtons id="category_buttons">
                {categories.map((category: ICategory) => {
                  return (
                    <CategoryListButton
                      color={category.color}
                      onClick={() => {
                        setClickedCategory(category);
                        setShowCategory(false);
                      }}
                    >
                      {category.name}
                    </CategoryListButton>
                  );
                })}
              </CategoryListButtons>
            )}
          </Category>
          <Start>
            <StartLabel>시작</StartLabel>
            <StartButtons>
              <StartButton
                className={cn(contentName === '시작날짜' && 'active')}
                onClick={() => setContentName('시작날짜')}
              >
                {`${startTime.format('YYYY.MM.DD')}`}
              </StartButton>
              <StartButton
                className={cn(contentName === '시작시간' && 'active')}
                onClick={() => setContentName('시작시간')}
              >
                {`${startTime.format('HH')}:${startTime.format('mm')}`}
              </StartButton>
            </StartButtons>
          </Start>
          <End>
            <EndLabel>종료</EndLabel>
            <EndButtons>
              <EndButton
                className={cn(contentName === '종료날짜' && 'active')}
                onClick={() => setContentName('종료날짜')}
              >
                {`${endTime.format('YYYY.MM.DD')}`}
              </EndButton>
              <EndButton
                className={cn(contentName === '종료시간' && 'active')}
                onClick={() => setContentName('종료시간')}
              >
                {`${endTime.format('HH')}:${endTime.format('mm')}`}
              </EndButton>
            </EndButtons>
          </End>
          {isRepeat && (
            <Repeat>
              <RepeatLabel>반복</RepeatLabel>
              <RepeatButton
                className={cn(contentName === '반복' && 'active')}
                onClick={() => {
                  console.log(1);
                }}
              >
                {repeatText}
              </RepeatButton>
            </Repeat>
          )}
          {isMemo && (
            <Memo>
              <MemoLabel>메모</MemoLabel>
              <MemoTextArea ref={memo} />
            </Memo>
          )}
        </LeftContent>
        <RightContent>
          <ContentTitle className={contentName}>{contentName}</ContentTitle>
          {content}
        </RightContent>
      </Selector>
      <Separator />
      <BottomButtons>
        <AddButtons>
          <AddButton
            className={cn(isRepeat && 'hide')}
            onClick={() => {
              setContentName('반복');
              setIsRepeat(true);
            }}
          >
            반복
          </AddButton>
          <AddButton
            className={cn(isMemo && 'hide')}
            onClick={() => {
              setIsMemo(true);
            }}
          >
            메모
          </AddButton>
        </AddButtons>
        <SubmitButton onClick={onClick}>완료</SubmitButton>
      </BottomButtons>
    </>
  );
};

const Title = styled.h1`
  ${({ theme: { fonts } }) => fonts.Title};
  width: 760px;
`;

const Selector = styled.div`
  display: flex;
  height: 625px;
  overflow-y: scroll;

  &.active {
    color: ${({ theme: { colors } }) => colors.WeekandBlue} !important;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CloseButton = styled(Button)`
  &:after {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    background-size: 455px 385px;
    background-position: -362px -351px;
    position: absolute;
    top: 32px;
    right: 32px;
  }
`;

const Header = styled.div`
  height: 60px;
`;

const Name = styled.div``;

const NameLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  ${({ theme: { fonts } }) => fonts.Body2};
`;

const NameInput = styled(Input)`
  &:focus {
    box-shadow: none;
  }
`;

const Category = styled.div`
  margin-top: 24px;
  position: relative;
`;

const CartegoryLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  ${({ theme: { fonts } }) => fonts.Body2};
`;

const CategoryButton = styled(Button)<{ color: string }>`
  &:before {
    content: '';
    display: inline-block;
    vertical-align: top;
    margin: 8px 11px 0 0;
    width: 10px;
    height: 10px;
    background-color: ${({ color }) => color};
    border-radius: 3px;
  }

  &:after {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)};
    background-size: 455px 385px;
    background-position: -142px -351px;
    position: absolute;
    right: 13px;
  }

  text-align: left;
  width: 327px;
  ${({ theme: { fonts } }) => fonts.Body1};
  background-color: ${({ theme: { colors } }) => colors.Gray200};
  border-radius: 12px;
  padding: 13px 40px 13px 19px;
`;

const CategoryListButtons = styled.div`
  position: absolute;
  border: 3px solid red;
  padding: 15px 0;
  top: 88px;
  background-color: #fff;
  border: 1px solid ${({ theme: { colors } }) => colors.Gray200};
  border-radius: 10px;
  z-index: 10;
`;

const CategoryListButton = styled(Button)<{ color: string }>`
  display: block;
  text-align: left;
  ${({ theme: { fonts } }) => fonts.Body1('Gray900')};
  padding: 10px 56px 10px 19px;
  width: 325px;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.Gray100};
  }

  &:before {
    content: '';
    display: inline-block;
    vertical-align: top;
    margin: 8px 11px 0 0;
    width: 10px;
    height: 10px;
    background-color: ${({ color }) => color};
    border-radius: 3px;
  }
`;

const Start = styled.div`
  margin-top: 24px;
`;

const StartLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  ${({ theme: { fonts } }) => fonts.Body2};
`;

const StartButtons = styled.div``;

const StartButton = styled(Button)`
  text-align: left;
  width: 157.5px;
  padding: 13px 16px;
  ${({ theme: { fonts } }) => fonts.Body1};
  background-color: ${({ theme: { colors } }) => colors.Gray200};
  border-radius: 12px;

  &.active {
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
  }

  & + & {
    margin-left: 12px;
  }
`;

const End = styled.div`
  margin-top: 24px;
`;

const EndLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  ${({ theme: { fonts } }) => fonts.Body2};
`;

const EndButtons = styled.div``;

const EndButton = styled(Button)`
  text-align: left;
  width: 157.5px;
  padding: 13px 16px;
  ${({ theme: { fonts } }) => fonts.Body1};
  background-color: ${({ theme: { colors } }) => colors.Gray200};
  border-radius: 12px;

  &.active {
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
  }

  & + & {
    margin-left: 12px;
  }
`;

const Separator = styled.div`
  height: 1px;
  background-color: ${({ theme: { colors } }) => colors.Gray200};
`;

const BottomButtons = styled.div`
  margin-top: 24px;
  height: 43px;

  &:after {
    ${({ theme: { clearFloat } }) => clearFloat}
  }
`;

const AddButtons = styled.div`
  &:before {
    content: '';
    ${({ theme: { icon } }) => icon('../assets/css_sprites.png', 24, 24)}
    background-size: 455px 385px;
    background-position: -373px -246px;
    margin: 9px 12px 0 0;
  }

  display: inline-block;
  vertical-align: top;
  margin-top: 5px;
`;

const AddButton = styled(Button)`
  padding: 10px 16px;
  ${({ theme: { fonts } }) => fonts.Body2};
  color: ${({ theme: { colors } }) => colors.WeekandBlue};
  background-color: ${({ theme: { colors } }) => colors.WeekandBlueSub};
  border-radius: 10px;

  &.hide {
    display: none;
  }

  & + & {
    margin-left: 12px;
  }
`;

const SubmitButton = styled(Button)`
  ${({ theme: { fonts } }) => fonts.SubHead1};
  color: ${({ theme: { colors } }) => colors.Gray200};
  background-color: ${({ theme: { colors } }) => colors.WeekandBlue};
  border-radius: 10px;
  padding: 11.5px 41.75px;
  float: right;
`;

const LeftContent = styled.div`
  width: 327px;
`;

const RightContent = styled.div`
  margin-left: 55px;
`;

const ContentTitle = styled.div`
  margin-bottom: 15px;
  ${({ theme: { fonts } }) => fonts.Body2('WeekandBlue')};

  &.시작시간 {
    margin-bottom: 6px;
  }

  &.종료시간 {
    margin-bottom: 6px;
  }

  &.반복 {
    margin-bottom: 6px;
  }
`;

const Repeat = styled.div`
  margin-top: 24px;
`;

const RepeatLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  ${({ theme: { fonts } }) => fonts.Body2};
`;

const RepeatButton = styled(Button)`
  text-align: left;
  width: 327px;
  ${({ theme: { fonts } }) => fonts.Body1};
  background-color: ${({ theme: { colors } }) => colors.Gray200};
  border-radius: 12px;
  padding: 13px 16px;

  &.active {
    color: ${({ theme: { colors } }) => colors.WeekandBlue};
  }
`;

const Memo = styled.div`
  margin-top: 24px;
`;

const MemoLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  ${({ theme: { fonts } }) => fonts.Body2};
`;

const MemoTextArea = styled.textarea`
  box-sizing: border-box;
  border-radius: 12px;
  border: 0px;
  padding: 13px 16px;
  background-color: ${({ theme: { colors } }) => colors.Gray200};
  resize: none;
  width: 327px;
  height: 208px;
  ${({ theme: { fonts } }) => fonts.Body1};

  &:focus {
    box-shadow: none;
  }
`;
