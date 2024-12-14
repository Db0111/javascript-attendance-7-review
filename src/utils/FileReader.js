import fs from 'fs';
import path from 'path';

class FileReader {
  static readCSV(filePath) {
    try {
      const absolutePath = path.resolve(filePath);
      return fs.readFileSync(absolutePath, 'utf8');
    } catch (error) {
      throw new Error(`Failed to read file: ${filePath}. Error: ${error.message}`);
    }
  }

  static csvToObject(csvData) {
    const lines = csvData.trim().split('\n');
    const data = lines.slice(1).map(line => {
      const [nickname, datetime] = line.split(',');
      return {
        nickname,
        datetime,
      };
    });

    const attendanceData = {};

    data.forEach(({ nickname, datetime }) => {
      if (!attendanceData[nickname]) {
        attendanceData[nickname] = { attendance: [] };
      }

      // 각 재고 항목에 가격 포함
      attendanceData[nickname].attendance.push({ datetime });
    });

    return attendanceData;
  }
}

export default FileReader;
