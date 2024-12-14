import { holidays } from '../Data/data.js';

class InputValidator {
  static isEmpty(input) {
    if (input === '') {
      throw new Error(`[ERROR] 잘못된 형식을 입력하였습니다.`);
    }
  }

  //Todo: 등교일이 아닌데 출석 확인 할 경우
  static isNotHoliday(date, day) {
    if (holidays.includes(date)) {
      throw new Error(`[ERROR] 12월 ${date}일 ${day}요일은 등교일이 아닙니다.`);
    }
  }

  static isInvalidOption(input) {
    const options = ['1', '2', '3', '4', 'Q'];
    if (!options.includes(input)) {
      throw new Error(`[ERROR] 잘못된 형식을 입력하였습니다.`);
    }
  }

  static isEntrolledName(nickname, attendanceData) {
    if (!Object.keys(attendanceData).includes(nickname)) {
      throw new Error(`[ERROR] 등록되지 않은 닉네임입니다.`);
    }
  }

  //TOdo: 이미 출석한 경우
  //   static isAlreadyAdded(nickname, attendanceData) {
  //     if ()
  //   }

  static validateOption(input, date, day) {
    this.isEmpty(input);
    this.isInvalidOption(input);
    this.isNotHoliday(date, day);
    return input;
  }

  static validateNickName(nickname, attendanceData) {
    this.isEntrolledName(nickname, attendanceData);
  }
}
export default InputValidator;
