import { DateTimes } from '@woowacourse/mission-utils';

export const holidays = [1, 7, 8, 14, 15, 21, 22, 25, 28, 29];

export const Days = {
  월: ['02', '09', '16', '23', '30'],
  화: ['03', '10', '17', '24', '31'],
  수: ['04', '11', '18'],
  목: ['05', '12', '19', '26'],
  금: ['06', '13', '20', '27'],
};

export function getDate() {
  const currentDate = new Date(DateTimes.now());
  let date = currentDate.getDate();
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];
  //수정 필요
  let day = dayList[currentDate.getDay()];

  return { date, day };
}

export const educateTime = {
  월: { startHour: 13, endHour: 18 },
  화: { startHour: 10, endHour: 18 },
  수: { startHour: 10, endHour: 18 },
  목: { startHour: 10, endHour: 18 },
  금: { startHour: 10, endHour: 18 },
};
