import Controller from './Controller/Controller.js';

class App {
  async run() {
    const csvPath = 'public/attendances.csv';
    await Controller.attendanceSystem(csvPath);
  }
}

export default App;
