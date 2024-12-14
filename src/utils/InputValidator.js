class InputValidator {
  static isEmpty(input) {
    if (input === '') {
      throw new Error(`[ERROR] 잘못된 형식을 입력하였습니다.`);
    }
  }

  //Todo: 등교일이 아닌데 출석 확인 할 경우

  static isInvalidOption(input) {
    const options = ['1', '2', '3', '4', 'Q'];
    if (!options.includes(input)) {
      throw new Error(`[ERROR] 잘못된 형식을 입력하였습니다.`);
    }
  }

  static validateOption(input) {
    this.isEmpty(input);
    this.isInvalidOption(input);
    return input;
  }
}
export default InputValidator;
