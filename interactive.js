document.addEventListener('DOMContentLoaded', () => {
    initCalculator();
    initBoilingEffect();
});

// === 1. ЛОГИКА КАЛЬКУЛЯТОРА ===
function initCalculator() {
    const inputs = {
        meat: document.getElementById('input-meat'),
        fat: document.getElementById('input-fat'),
        time: document.getElementById('input-time'),
        salt: document.getElementById('input-salt')
    };

    const displays = {
        meat: document.getElementById('val-meat'),
        fat: document.getElementById('val-fat'),
        time: document.getElementById('val-time'),
        salt: document.getElementById('val-salt')
    };

    const resultOmega = document.getElementById('result-omega');
    const resultVerdict = document.getElementById('result-verdict');

    function calculate() {
        // Получаем значения
        const rhoMeat = parseFloat(inputs.meat.value);
        const rhoFat = parseFloat(inputs.fat.value);
        const tCooking = parseFloat(inputs.time.value);
        const kSalt = parseFloat(inputs.salt.value);

        // Обновляем подписи рядом с ползунками
        displays.meat.textContent = rhoMeat;
        displays.fat.textContent = rhoFat;
        displays.time.textContent = tCooking;
        displays.salt.textContent = kSalt;

        // Формула ОТМГК: (Мясо + Жир) / (Время * Соль)
        // Добавляем множитель 10 для читаемости чисел
        let omega = (rhoMeat + rhoFat) / (tCooking * kSalt) * 10;
        
        // Округляем
        omega = omega.toFixed(2);

        // Вывод числа
        resultOmega.textContent = `Ω = ${omega}`;

        // Генерация вердикта (Эсхатология)
        let verdict = "";
        let colorClass = "text-blue-700";

        if (omega < 1) {
            verdict = "⚠️ Состояние: Гомеопатический бульон. Вселенная слишком жидкая.";
            colorClass = "text-blue-400";
        } else if (omega >= 1 && omega < 5) {
            verdict = "✅ Состояние: Идеальный Баланс. Жизнь возможна.";
            colorClass = "text-green-600";
        } else if (omega >= 5 && omega < 20) {
            verdict = "🍲 Состояние: Густой Навар. Гравитация схлопывает галактики в фрикадельки.";
            colorClass = "text-yellow-600";
        } else {
            verdict = "🛑 ОПАСНОСТЬ: Состояние 'Холодец'. Время остановилось.";
            colorClass = "text-red-600";
        }

        resultVerdict.textContent = verdict;
        resultVerdict.className = `text-lg font-serif italic ${colorClass}`;
    }

    // Вешаем слушатели событий на все инпуты
    Object.values(inputs).forEach(input => {
        input.addEventListener('input', calculate);
    });

    // Первый запуск
    calculate();
}

// === 2. ЭФФЕКТ ФОНОВОГО ЗАКИПАНИЯ (BUBBLES) ===
function initBoilingEffect() {
    // Создаем контейнер для пузырей, который перекрывает весь экран, но не мешает кликам
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none'; // Пропускает клики сквозь себя
    container.style.zIndex = '-1'; // На заднем плане
    container.style.overflow = 'hidden';
    document.body.appendChild(container);

    function createBubble() {
        const bubble = document.createElement('div');
        
        // Случайный размер от 5px до 20px
        const size = Math.random() * 15 + 5;
        
        // Случайная позиция по горизонтали
        const left = Math.random() * 100;

        // Стилизация пузыря
        bubble.style.position = 'absolute';
        bubble.style.bottom = '-30px';
        bubble.style.left = left + '%';
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.borderRadius = '50%';
        bubble.style.border = '1px solid rgba(59, 130, 246, 0.3)'; // Синий контур
        bubble.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        
        // Длительность полета зависит от размера (большие быстрее всплывают по Архимеду)
        const duration = Math.random() * 5 + 5; 

        bubble.style.transition = `bottom ${duration}s linear, opacity ${duration}s ease-in`;
        
        container.appendChild(bubble);

        // Запуск анимации (небольшая задержка, чтобы CSS применился)
        setTimeout(() => {
            bubble.style.bottom = '110%'; // Улетает за верх экрана
            bubble.style.opacity = '0';
        }, 50);

        // Удаление элемента после анимации
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }

    // Создаем новый пузырь каждые 300-1000 мс
    setInterval(createBubble, 600);
}