class WeekDays {
  daysEn = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  daysEs = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  constructor(lang) {
    this.lang = lang;
    if (WeekDays.instance) {
      return WeekDays.instance;
    }
    WeekDays.instance = this;
  }

  getDays() {
    return this.lang === "es" ? this.daysEs : this.daysEn;
  }
}

const weekDays = new WeekDays("en");
const weekDays1 = new WeekDays();
console.log("👉️ weekDays.getDays:", weekDays.getDays());
console.log("👉️ weekDays1.getDays:", weekDays1.getDays());
