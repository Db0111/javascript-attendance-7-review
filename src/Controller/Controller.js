import { DateTimes } from '@woowacourse/mission-utils';
import FileReader from '../utils/FileReader.js';
import { OutputView } from '../View/OutputView.js';
import { InputView } from '../View/InputView.js';
import InputValidator from '../utils/InputValidator.js';
import Attendance from '../Model/Attendance.js';

class Controller {
  static async attendanceSystem(csvPath) {
    const csvData = FileReader.readCSV(csvPath);
    const attendanceData = FileReader.csvToObject(csvData);
    const currentDate = new Date(DateTimes.now());
    let date = currentDate.getDate();
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];
    let day = dayList[currentDate.getDay()];
    while (true) {
      await this.startSystem(date, day, attendanceData);
    }
  }

  static async startSystem(date, day, attendanceData) {
    const attendance = new Attendance(attendanceData);

    OutputView.printMessage(`오늘은 12월 ${date}일 ${day}요일 입니다. 기능을 선택해 주세요.`);
    const option = await InputView.getInput(`\n
    1. 출석 확인
    2. 출석 수정
    3. 크루별 출석 기록 확인
    4. 제적 위험자 확인
    Q. 종료\n`);
    const validOption = await InputValidator.validateOption(option, date, day);
    if (validOption === '1') {
      await attendance.addAttendance();
    } else if (validOption === '2') {
      await attendance.fixAttendance();
    } else if (validOption === '3') {
      await attendance.checkAttendance();
    } else if (validOption === 'q' || validOption === 'Q') return false;
  }
}

export default Controller;
