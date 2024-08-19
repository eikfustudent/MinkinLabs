document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { type: 'input', question: 'Какой ваш любимый цвет?', answer: 'синий' },
        { type: 'radio', question: 'Какой ваш любимый фрукт?', options: ['Яблоко', 'Банан', 'Апельсин'], answer: 'Банан' },
        { type: 'checkbox', question: 'Какие языки программирования вы знаете?', options: ['JavaScript', 'Python', 'Java', 'C#'], answer: ['JavaScript', 'Python'] },
        { type: 'match', question: 'Сопоставьте столицы с странами', pairs: { 'Россия': 'Москва', 'Франция': 'Париж', 'Германия': 'Берлин' }, answer: { 'Россия': 'Москва', 'Франция': 'Париж', 'Германия': 'Берлин' } },
        { type: 'sequence', question: 'Расположите в правильном порядке дни недели', sequence: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], answer: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'] }
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function createQuestionElement(question) {
        const div = document.createElement('div');
        div.className = 'question';
        const p = document.createElement('p');
        p.textContent = question.question;
        div.appendChild(p);

        switch (question.type) {
            case 'input':
                const input = document.createElement('input');
                input.type = 'text';
                input.name = 'answer';
                div.appendChild(input);
                break;
            case 'radio':
                question.options.forEach(option => {
                    const label = document.createElement('label');
                    const radio = document.createElement('input');
                    radio.type = 'radio';
                    radio.name = 'answer';
                    radio.value = option;
                    label.appendChild(radio);
                    label.appendChild(document.createTextNode(option));
                    div.appendChild(label);
                });
                break;
            case 'checkbox':
                question.options.forEach(option => {
                    const label = document.createElement('label');
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.name = 'answer';
                    checkbox.value = option;
                    label.appendChild(checkbox);
                    label.appendChild(document.createTextNode(option));
                    div.appendChild(label);
                });
                break;
            case 'match':
                const table = document.createElement('table');
                const tbody = document.createElement('tbody');
                Object.keys(question.pairs).forEach(key => {
                    const tr = document.createElement('tr');
                    const td1 = document.createElement('td');
