import { Console } from '@woowacourse/mission-utils';

export const OutputView = {
  async printMessage(IOMessage) {
    await Console.print(IOMessage);
  },
};
