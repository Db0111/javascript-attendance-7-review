import { OutputView } from '../View/OutputView.js';

class dataPrinter {
  static printData(datas) {
    let result = [];
    for (const data of datas) {
      console.log('data', data);
      result.push(`${data.month}월 ${data.date}일 ${data.day}요일 ${data.attendanceTime} (${data.absence})`);
    }
    console.log('result', result);

    for (const final of result) {
      OutputView.printMessage(final, '\n');
    }
  }
}

export default dataPrinter;
