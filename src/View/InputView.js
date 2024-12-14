import { Console } from '@woowacourse/mission-utils';

export const InputView = {
  async getInput(IOMessage) {
    const input = await Console.readLineAsync(IOMessage);
    return input;
  },
};
