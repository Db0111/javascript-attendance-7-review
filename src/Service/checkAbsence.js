import { Days } from '../Data/data.js';
import Attendance from '../Model/Attendance.js';
import splitInput from '../utils/splitInput.js';

export function checkAbsenceData(nickname, csvdata) {
  let finalAttendanceData = [];
  const crewAttendance = csvdata[nickname]['attendance'];
  for (const attendanceData of crewAttendance) {
    let attendanceTime = attendanceData.datetime.slice(11);
    let attendanceDate = attendanceData.datetime.slice(8, 10);
    const day = checkDay(attendanceDate);
    finalAttendanceData.push({
      month: attendanceData.datetime.slice(5, 7),
      date: attendanceDate,
      day: day,
      attendanceTime: attendanceTime,
      absence: Attendance.checkAbsent(day, attendanceTime),
    });
  }
  return finalAttendanceData;
}

export function checkDay(date) {
  for (const [dateName, dates] of Object.entries(Days)) {
    for (const dateList of dates) {
      if (!dateList.includes(date)) {
        continue;
      } else {
        return dateName;
      }
    }
  }
}
