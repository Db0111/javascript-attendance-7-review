import { DateTimes } from '@woowacourse/mission-utils';
import FileReader from '../utils/FileReader.js';
import { OutputView } from '../View/OutputView.js';
import { InputView } from '../View/InputView.js';
import InputValidator from '../utils/InputValidator.js';

class Controller {
  static async attendanceSystem(csvPath) {
    const csvData = FileReader.readCSV(csvPath);
    const attendanceData = FileReader.csvToObject(csvData);
    // console.log(JSON.stringify(attendanceData, null, 2));
    const currentDate = DateTimes.now();
    // TOdo: 지금 날짜 반환할 것
    OutputView.printMessage(`오늘은 12월 (날짜)일 (요일)입니다. 기능을 선택해 주세요.`);
    const option = await InputView.getInput(`\n
    1. 출석 확인
    2. 출석 수정
    3. 크루별 출석 기록 확인
    4. 제적 위험자 확인
    Q. 종료\n`);

    const validOption = InputValidator.validateOption(option);
  }
}

export default Controller;
