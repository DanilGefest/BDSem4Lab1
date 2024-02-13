const scheduleData = {
    even: {
        0: [
            { time: '9:45', activity: 'Программная инженерия, ауд. 2141 (2 подгруппа)' },
            { time: '11:45', activity: 'Программная инженерия, ауд. 2141 (2 подгруппа)' },
        ],
        1: [
            { time: '00:00', activity: 'Адыхаем' },
        ],
        2: [
            { time: '11:45', activity: 'Спортиыне игры, Пантера' },
            { time: '13:30', activity: 'Базы данных, ауд. 2221(лекция)' },
            { time: '15:30', activity: 'БД (лаб) 1 подгруппа, Комп. сети (лаб.) 2 подгруппа' },
            { time: '17:15', activity: 'Комп. сети 1 подгруппа, БД (лаб) (лаб.) 2 подгруппа' },
        ],
        3: [
            { time: '13:30', activity: 'Операционные системы, ауд. 2221(лекция)' },
            { time: '15:30', activity: 'Прикладная статистика, ауд. 2221(лекция)' },
            { time: '15:30', activity: 'Прикладная статистика, ауд. 2141(пр.)' },
        ],
        4: [
            { time: '9:45', activity: 'Спортиыне игры, Пантера' },
            { time: '11:45', activity: 'Фин.мат, 5401 (лаб.)' },
            { time: '13:30', activity: 'Социальная психология, 2226 (лек.)' },
            { time: '15:30', activity: 'Комп. сети, 2141 (пр.)' },
        ],
        5: [
            { time: '8.00', activity: 'Мобильная разработка, 2219 (лек.)' },
            { time: '9:45', activity: 'Мобильная разработка 2131б,в, по подгруппам' },
        ],
        6: [
            { time: '00:00', activity: 'Адыхаем' },
        ],
    },
    odd: {
        0: [
            { time: '9:45', activity: 'Программная инженерия, ауд. 2141 (1 подгруппа)' },
            { time: '11:45', activity: 'Программная инженерия, ауд. 2141 (1 подгруппа)' },
        ],
        1: [
            { time: '00:00', activity: 'Адыхаем' },
        ],
        2: [
            { time: '13:30', activity: 'Программмная инженерия, ауд. 2221(лекция)' },
            { time: '15:30', activity: 'БД (лаб) 1 подгруппа, Комп. сети (лаб.) 2 подгруппа' },
            { time: '17:15', activity: 'Комп. сети 1 подгруппа, БД (лаб) (лаб.) 2 подгруппа' },
        ],
        3: [
            { time: '13:30', activity: 'Операционные системы, ауд. 2221(лекция)' },
            { time: '15:30', activity: 'Прикладная статистика, ауд. 2221(лекция)' },
        ],
        4: [
            { time: '9:45', activity: 'Спортиыне игры, Пантера' },
            { time: '11:45', activity: 'Фин.мат, 5401 (лаб.)' },
            { time: '13:30', activity: 'Фин.мат, 2226 (лек.)' },
            { time: '15:30', activity: 'Прикладная статистика, 2141 (пр.)' },
        ],
        5: [
            { time: '8.00', activity: 'Управление проектами, 2219 (пр.)' },
            { time: '9:45', activity: 'Мобильная разработка 2131б,в, по подгруппам' },
            { time: '11:45', activity: 'Соц. псих (онлайн)' },
            { time: '13:30', activity: 'Управление проектми (онлайн)' },
        ],
        6: [
            { time: '00:00', activity: 'Адыхаем' },
        ],
    },
};

const weekSelect = document.getElementById('weekSelect');

daySelect.addEventListener('change', function() {
    const selectedWeek = this.value === '0' ? 'even' : 'odd';
    const selectedDay = parseInt(daySelect.value);
    
    // Очищаем таблицу расписания
    while (scheduleTable.rows.length > 1) {
        scheduleTable.deleteRow(1);
    }
    
    // Вставляем расписание для выбранного дня и недели
    const selectedSchedule = scheduleData[selectedWeek][selectedDay];
    selectedSchedule.forEach(item => {
        let row = scheduleTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell1.textContent = item.time;
        cell2.textContent = item.activity;
    });
});

weekSelect.addEventListener('change', function() {
    const selectedWeek = this.value === '0' ? 'even' : 'odd';
    const selectedDay = parseInt(daySelect.value);
    
    // Очищаем таблицу расписания
    while (scheduleTable.rows.length > 1) {
        scheduleTable.deleteRow(1);
    }
    
    // Вставляем расписание для выбранного дня и недели
    const selectedSchedule = scheduleData[selectedWeek][selectedDay];
    selectedSchedule.forEach(item => {
        let row = scheduleTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell1.textContent = item.time;
        cell2.textContent = item.activity;
    });
});