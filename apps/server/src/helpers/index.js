const sequelize = require('../../models');

async function populateDB() {
  await sequelize.models.Employee.bulkCreate([
    {
      name: 'Peter Zborný',
      position: 'Majster',
      phoneNumber: '0902369765',
      contractType: 'Zamestnanec',
      healthExam: '2022-01-17',
    },
    {
      name: 'Jozef Gábor',
      position: 'Pracovník',
      phoneNumber: '0902369765',
      contractType: 'Zamestnanec',
      healthExam: '2022-01-17',
    },
    {
      name: 'Milan Vasiľ',
      position: 'Majster',
      phoneNumber: '0902369765',
      contractType: 'Zamestnanec',
      healthExam: '2022-01-17',
    },
    {
      name: 'Bohuš Repák',
      position: 'Pracovník',
      phoneNumber: '0902369765',
      contractType: 'Živnostník',
      healthExam: '2022-01-17',
    },
    {
      name: 'Steven Twisted',
      position: 'Majster',
      phoneNumber: '0902369765',
      contractType: 'Zamestnanec',
      healthExam: '2022-01-17',
    },
    {
      name: 'František Bobor',
      position: 'Pracovník',
      phoneNumber: '0902369765',
      contractType: 'Živnostník',
      healthExam: '2022-01-17',
    },
    {
      name: 'Peter Kováč',
      position: 'Pracovník',
      phoneNumber: '0902369765',
      contractType: 'Živnostník',
      healthExam: '2022-01-05',
    },
    {
      name: 'Milan Kocúr',
      position: 'Pracovník',
      phoneNumber: '0902369765',
      contractType: 'Zamestnanec',
      healthExam: '2020-01-17',
    },
    {
      name: 'Richard Milečkin',
      position: 'Pracovník',
      phoneNumber: '0902369765',
      contractType: 'Zamestnanec',
      healthExam: '2022-01-17',
    },
    {
      name: 'Karol Kľúčik',
      position: 'Majster',
      phoneNumber: '0902369765',
      contractType: 'Zamestnanec',
      healthExam: '2021-01-17',
    },
    {
      name: 'Kristián Polovičkin',
      position: 'Pracovník',
      phoneNumber: '0902369765',
      contractType: 'Živnostník',
      healthExam: '2021-01-07',
    },
    {
      name: 'Pavol Jarčuška',
      position: 'Pracovník',
      phoneNumber: '0902369765',
      contractType: 'Živnostník',
      healthExam: '2022-02-11',
    },
    {
      name: 'Ervin Ronaldo',
      position: 'Pracovník',
      phoneNumber: '0902369765',
      contractType: 'Zamestnanec',
      healthExam: '2020-01-18',
    },
    {
      name: 'Samuel Lakatoš',
      position: 'Pracovník',
      phoneNumber: '0902369765',
      contractType: 'Zamestnanec',
      healthExam: '2021-08-18',
    },
    {
      name: 'Matej Králik',
      position: 'Pracovník',
      phoneNumber: '0902369235',
      contractType: 'Zamestnanec',
      healthExam: '2021-01-17',
    },
    {
      name: 'Maroš Topoľ',
      position: 'Pracovník',
      phoneNumber: '0902328455',
      contractType: 'Zamestnanec',
      healthExam: '2021-11-29',
    },
    {
      name: 'Ján Mihalčin',
      position: 'Pracovník',
      phoneNumber: '0902369298',
      contractType: 'Zamestnanec',
      healthExam: '2022-01-17',
    },
    {
      name: 'Juraj Benetin',
      position: 'Pracovník',
      phoneNumber: '0902364532',
      contractType: 'Zamestnanec',
      healthExam: '2021-03-11',
    },
    {
      name: 'Norbert Rubáň',
      position: 'Pracovník',
      phoneNumber: '0902369657',
      contractType: 'Zamestnanec',
      healthExam: '2018-01-18',
    },
    {
      name: 'Ondrej Klátocz',
      position: 'Pracovník',
      phoneNumber: '0902322765',
      contractType: 'Zamestnanec',
      healthExam: '2021-08-18',
    },
  ]);

  await sequelize.models.Vehicle.bulkCreate([
    {
      brand: 'Mercedes',
      model: 'Vito',
      VIN: 'BK1RN23WLF4567391',
      year: '2010',
      lastService: '2020-10-25',
      tireSize: '215x55xR17',
    },
    {
      brand: 'Škoda',
      model: 'Octavia',
      VIN: 'ST1RN23KRF7367891',
      year: '2010',
      lastService: '2020-08-01',
      tireSize: '215x55xR17',
    },
    {
      brand: 'Ford',
      model: 'Ranger',
      VIN: 'PL6RN73KOF4567891',
      year: '2015',
      lastService: '2021-11-18',
      tireSize: '255x65xR16',
    },
    {
      brand: 'Seat',
      model: 'Ibiza',
      VIN: 'TW1RN23WOF4567321',
      year: '2020',
      lastService: '2022-01-17',
      tireSize: '265x55xR16',
    },
    {
      brand: 'Mercedes',
      model: 'Sprinter',
      VIN: 'KO1RN23TRZ4591891',
      year: '2018',
      lastService: '2021-06-17',
      tireSize: '255x65xR16',
    },
    {
      brand: 'Zetor',
      model: '7745 Turbo',
      VIN: 'ZE1TO23RRZ4597745',
      year: '1984',
      lastService: '2020-09-17',
      tireSize: '-',
    },
    {
      brand: 'Hyundai',
      model: 'i30',
      VIN: 'PW1JH91KRI9167891',
      year: '2020',
      lastService: '2021-11-18',
      tireSize: '255x65xR16',
    },
    {
      brand: 'Hyundai',
      model: 'i30',
      VIN: 'PW1JH91POK7667891',
      year: '2020',
      lastService: '2021-11-18',
      tireSize: '255x65xR16',
    },
    {
      brand: 'Hyundai',
      model: 'i30',
      VIN: 'NM1JH91LUM9167761',
      year: '2020',
      lastService: '2021-11-20',
      tireSize: '255x65xR16',
    },
    {
      brand: 'Hyundai',
      model: 'i30',
      VIN: 'BV1JH91WOF9167765',
      year: '2020',
      lastService: '2021-11-21',
      tireSize: '255x65xR16',
    },
  ]);
  await sequelize.models.Equipment.bulkCreate([
    {
      idNumber: '206',
      brand: 'Makita',
      equipmentType: 'AKU vrtacka',
    },
    {
      idNumber: '207',
      brand: 'Bosch',
      equipmentType: 'elektricka vrtacka',
    },
    {
      idNumber: '100',
      brand: 'Makita',
      equipmentType: 'AKU vrtacka',
    },
    {
      idNumber: '200',
      brand: 'Bosch',
      equipmentType: 'elektricka vrtacka',
    },
    {
      idNumber: '100',
      brand: 'Makita',
      equipmentType: 'AKU vrtacka',
    },
    {
      idNumber: '200',
      brand: 'Bosch',
      equipmentType: 'elektricka vrtacka',
    },
    {
      idNumber: '203',
      brand: 'Makita',
      equipmentType: 'AKU vrtacka',
    },
    {
      idNumber: '204',
      brand: 'Bosch',
      equipmentType: 'elektricka vrtacka',
    },
    {
      idNumber: '100',
      brand: 'Makita',
      equipmentType: 'AKU vrtacka',
    },
    {
      idNumber: '201',
      brand: 'Bosch',
      equipmentType: 'elektricka vrtacka',
    },
    {
      idNumber: '100',
      brand: 'Makita',
      equipmentType: 'AKU vrtacka',
    },
    {
      idNumber: '202',
      brand: 'Bosch',
      equipmentType: 'elektricka vrtacka',
    },
  ]);
  await sequelize.models.Test.bulkCreate([
    {
      email: 'marek@example.sk',
      password: 'zidan',
    },
    {
      email: '2marek@example.com',
      password: '1234',
    },
  ]);
  await sequelize.models.WorkPlace.bulkCreate([
    {
      company: 'USS',
      placeShort: 'A1',
    },
    {
      company: 'USS',
      placeShort: 'A2',
    },
    {
      company: 'USS',
      placeShort: 'A3',
    },
    {
      company: 'USS',
      placeShort: 'A4',
    },
    {
      company: 'USS',
      placeShort: 'B1',
    },
    {
      company: 'USS',
      placeShort: 'B2',
    },
    {
      company: 'USS',
      placeShort: 'B3',
    },
  ]);
  await sequelize.models.Customer.bulkCreate([
    {
      name: 'USS',
      phoneNumber: '090237574',
    },
    {
      name: 'KAPTIVA',
      phoneNumber: '090237574',
    },
    {
      name: 'SURI',
      phoneNumber: '090237574',
    },
    {
      name: 'LEKE',
      phoneNumber: '090237574',
    },
    {
      name: 'PLeNO',
      phoneNumber: '090237574',
    },
  ]);
  await sequelize.models.Attendance.bulkCreate([
    {
      date: '2022-01-17',
      description: 'praca na oprave vysokej pece',
      responsibleId: 2,
      WorkPlaceId: 4,
      CustomerId: 3,
    },
    {
      date: '2022-02-02',
      description: 'praca na oprave nizkej pece',
      responsibleId: 1,
      WorkPlaceId: 1,
      CustomerId: 2,
    },
    {
      date: '2022-03-10',
      description: 'praca na oprave vysokej pece',
      responsibleId: 1,
      WorkPlaceId: 2,
      CustomerId: 2,
    },
  ]);
  await sequelize.models.EmployeeAttendance.bulkCreate([
    {
      hours: 20.0,
      EmployeeId: 1,
      AttendanceId: 2,
    },
    {
      hours: 20.5,
      EmployeeId: 3,
      AttendanceId: 2,
    },
    {
      hours: 8.0,
      EmployeeId: 1,
      AttendanceId: 1,
    },
    {
      hours: 5.5,
      EmployeeId: 4,
      AttendanceId: 1,
    },
    {
      hours: 5.5,
      EmployeeId: 1,
      AttendanceId: 3,
    },
    {
      hours: 5.5,
      EmployeeId: 2,
      AttendanceId: 3,
    },
    {
      hours: 5.5,
      EmployeeId: 3,
      AttendanceId: 3,
    },
    {
      hours: 5.5,
      EmployeeId: 4,
      AttendanceId: 3,
    },
    {
      hours: 5.5,
      EmployeeId: 5,
      AttendanceId: 3,
    },
    {
      hours: 5.5,
      EmployeeId: 6,
      AttendanceId: 3,
    },
  ]);
}

module.exports = { populateDB };
