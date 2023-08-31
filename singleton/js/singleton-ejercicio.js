class WeekDays {
  daysEs = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  daysEn = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Singleton Magic
  constructor(lang) {
    this.lang = lang;
    if (WeekDays.instance) {
      return WeekDays.instance;
    }
    WeekDays.instance = this;
  }

  getDays() {
    return this.lang == 'es' ? this.daysEs : this.daysEn;
  }
}

const weekdays = new WeekDays('es');
const weekdays2 = new WeekDays('en');

// Both have the same results
console.log(weekdays.getDays());
console.log(weekdays2.getDays());