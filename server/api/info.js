export default defineEventHandler(() => {
  const info = {
    aboutTitle: 'О компании',
    aboutDescription: 'Копкой занимаемся 15 лет. Всё началось с хобби и плавно переросло в любимую работу. Работаем с профессиональной техникой.',
    locationTitle: 'Местоположение',
    locationDescription: 'Ростов на Дону, Воронежская ул., 42А корп. 1',
    scheduleTitle: 'Режим работы',
    scheduleList: [
      {
        day: 'Понедельник',
        time: 'с 9:00 до 18:00',
        id: 1
      },
      {
        day: 'Вторник',
        time: 'с 9:00 до 23:00',
        id: 2
      },
      {
        day: 'Среда',
        time: 'с 9:00 до 18:00',
        id: 3
      },
      {
        day: 'Четверг',
        time: 'с 9:00 до 18:00',
        id: 4
      },
      {
        day: 'Пятница',
        time: 'с 9:00 до 18:00',
        id: 5
      },
      {
        day: 'Суббота',
        time: 'с 10:00 до 22:00',
        id: 6
      },
      {
        day: 'Воскресенье',
        time: 'с 10:00 до 22:00',
        id: 0
      },
    ]
  };

  return info;
})