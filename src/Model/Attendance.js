import { DateTimes } from '@woowacourse/mission-utils';
import { getDate, educateTime } from '../Data/data.js';
import { InputView } from '../View/InputView.js';
import { OutputView } from '../View/OutputView.js';
import InputValidator from '../utils/InputValidator.js';
import splitInput from '../utils/splitInput.js';
import { checkAbsenceData } from '../Service/checkAbsence.js';
import dataPrinter from '../utils/dataPrinter.js';

class Attendance {
  constructor(csvData) {
    this.attendanceData = csvData;
  }

  async addAttendance() {
    const nickname = await InputView.getInput(`닉네임을 입력해 주세요.\n`);
    await InputValidator.validateNickName(nickname, this.attendanceData);

    const attendanceTime = await InputView.getInput(`등교 시간을 입력해 주세요.\n`);
    await InputValidator.validateAttendanceTime(attendanceTime, this.attendanceData);
    // checkAbsenceData(nickname, this.attendanceData);

    const { date, day } = getDate();
    const absence = Attendance.checkAbsent(day, attendanceTime);
    OutputView.printMessage(`12월 ${date}일 ${day}요일 ${attendanceTime} (${this.attendanceData.absence})`);
    console.log(this.attendanceData);
  }

  static checkAbsent(day, attendanceTime) {
    const hour = Number(splitInput(attendanceTime)[0]);
    const minute = Number(splitInput(attendanceTime)[1]);
    let absence = '';
    console.log('day', day, 'attendanceTime', attendanceTime);
    if (hour >= educateTime[day].startHour && hour <= educateTime[day]['endHour']) {
      if (minute > 5 && minute <= 30) {
        absence = '지각';
      } else if (minute > 30) {
        absence = '결석';
      } else {
        absence = '출석';
      }
    }
    return absence;
  }

  async fixAttendance() {
    const nickname = await InputView.getInput(`출석을 수정하려는 크루의 닉네임을 입력해 주세요.\n`);
    const fixDate = await InputView.getInput(`수정하려는 날짜(일)를 입력해 주세요.\n`);
  }
  async checkAttendance() {
    const nickname = await InputView.getInput(`닉네임을 입력해 주세요.\n`);
    InputValidator.validateNickName(nickname, this.attendanceData);
    const finalData = checkAbsenceData(nickname, this.attendanceData);
    const reversedFinalData = finalData.reverse();
    OutputView.printMessage(`전날 까지의 크루 출석 기록 확인 가능 이번 달 ${nickname}의 출석 기록입니다.`);
    dataPrinter.printData(reversedFinalData);
  }
}

export default Attendance;
