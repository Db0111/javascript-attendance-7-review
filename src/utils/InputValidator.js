import { holidays } from '../Data/data.js';
import splitInput from './splitInput.js';

class InputValidator {
  static isEmpty(input) {
    if (input === '') {
      throw new Error(`[ERROR] 잘못된 형식을 입력하였습니다.`);
    }
  }

  static isNotHoliday(date, day) {
    if (holidays.includes(date)) {
      throw new Error(`[ERROR] 12월 ${date}일 ${day}요일은 등교하는 날이 아닙니다.`);
    }
  }

  static isInvalidOption(input) {
    const options = ['1', '2', '3', '4', 'Q', 'q'];
    if (!options.includes(input)) {
      throw new Error(`[ERROR] 잘못된 형식을 입력하였습니다.`);
    }
  }

  static isValidTime(attendanceTime) {
    const hour = splitInput(attendanceTime)[0];
    const minute = splitInput(attendanceTime)[1];
    if (hour > 24 || hour < 0 || minute < 0 || minute > 59) {
      throw new Error(`[ERROR] 잘못된 형식을 입력하였습니다.`);
    }
  }

  //   static isOpenedTime(attendanceTime) {
  //     const hour = splitInput(attendanceTime)[0];
  //     const minute = splitInput(attendanceTime)[1];
  //     if ()
  //   }

  static isEntrolledName(nickname, attendanceData) {
    if (!Object.keys(attendanceData).includes(nickname)) {
      throw new Error(`[ERROR] 등록되지 않은 닉네임입니다.`);
    }
  }

  static validateOption(input, date, day) {
    this.isEmpty(input);
    this.isInvalidOption(input);
    this.isNotHoliday(date, day);
    return input;
  }

  static validateNickName(nickname, attendanceData) {
    this.isEntrolledName(nickname, attendanceData);
    return nickname;
  }

  static validateAttendanceTime(attendanceTime, attendanceData) {
    this.isValidTime(attendanceTime);
    return attendanceTime;
  }
}
export default InputValidator;
