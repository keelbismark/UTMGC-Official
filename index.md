<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Общая Теория Макро-ГастроНОМИЧЕСКОГО Континуума (ОТМГК)</title>
    <!-- Подключение Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Конфигурация Tailwind для использования шрифта Inter -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f7f9fb;
        }
        /* Стилизация для академических блоков */
        .academic-block {
            border-left: 4px solid #3b82f6; /* Синяя полоса слева */
            background-color: #eff6ff; /* Светло-синий фон */
            padding: 1rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            border-radius: 0.5rem;
        }
        /* Стилизация заголовков */
        h1, h2, h3 {
            font-weight: 700;
        }
    </style>
    <!-- MathJax для рендеринга LaTeX формул -->
    <script>
        MathJax = {
            tex: {
                inlineMath: [['$', '$'], ['\\(', '\\)']]
            },
            svg: {
                fontCache: 'global'
            }
        };
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>

<body class="text-gray-800">
    
    <!-- Главный контейнер: Навигация + Контент -->
    <div class="flex flex-col lg:flex-row min-h-screen">
        
        <!-- Боковая навигация (Sidebar) -->
        <nav class="lg:w-64 p-6 bg-white shadow-lg lg:fixed lg:h-full overflow-y-auto">
            <h1 class="text-2xl font-extrabold text-gray-900 mb-6">ОТМГК</h1>
            <p class="text-xs text-gray-500 mb-6 border-b pb-4">Версия 4.2 | Гидродинамическая Космология</p>

            <ul class="space-y-3">
                <li><a href="#abstract" class="block p-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition duration-150 text-blue-600">Краткое Изложение (Abstract)</a></li>
                <li><a href="#theory-main" class="block p-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition duration-150">Основной Текст Теории</a></li>
                <li class="pl-4"><a href="#cosmogony" class="block p-2 rounded-lg text-xs hover:bg-blue-50 transition duration-150">Теория Большого Закипания</a></li>
                <li class="pl-4"><a href="#topology" class="block p-2 rounded-lg text-xs hover:bg-blue-50 transition duration-150">Топология Материи</a></li>
                <li class="pl-4"><a href="#dynamics" class="block p-2 rounded-lg text-xs hover:bg-blue-50 transition duration-150">Динамика и Ложка</a></li>
                <li class="pl-4"><a href="#formalism" class="block p-2 rounded-lg text-xs hover:bg-blue-50 transition duration-150">Математический Формализм</a></li>
                <li><a href="#esm" class="block p-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition duration-150">ЭСМ (Вспом. Материалы)</a></li>
                <li><a href="#contributing" class="block p-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition duration-150">Руководство для Участников</a></li>
                <li><a href="#license" class="block p-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition duration-150">Лицензия</a></li>
            </ul>
        </nav>

        <!-- Основной контент -->
        <main class="lg:ml-64 flex-grow p-8 md:p-10 lg:p-12 w-full">
            
            <header class="mb-10 pb-6 border-b-2 border-blue-500">
                <h1 class="text-4xl md:text-5xl text-blue-700 font-extrabold mb-2">Общая Теория Макро-ГастроНОМИЧЕСКОГО Континуума (ОТМГК)</h1>
                <p class="text-xl text-gray-600 italic">Фундаментальная Гидродинамическая Космология</p>
            </header>

            <!-- 1. Краткое Изложение (ABSTRACT) -->
            <section id="abstract" class="mb-12">
                <h2 class="text-3xl border-b pb-2 mb-4 text-blue-700">1. Краткое Изложение (Abstract)</h2>
                <div class="academic-block">
                    <p class="text-lg">
                        **Версия:** 4.2 (Final Release) | **Классификация:** Гипер-реализм / Гидродинамическая космология
                    </p>
                    <p class="mt-4">
                        Традиционная физика ошибочно интерпретирует Вселенную как пустоту, заполненную материей. Данный документ постулирует, что наблюдаемая Вселенная является **гетерогенной коллоидной суспензией** (Супом) с включениями высокоорганизованных белковых цилиндрических мегаструктур (Сосисок). Все наблюдаемые физические явления — от гравитации до квантовой запутанности — суть проявления гидродинамики и термодинамики варки в гигантской емкости (Мета-Кастрюле).
                    </p>
                </div>
            </section>

            <!-- 2. Основной Текст Теории -->
            <section id="theory-main" class="mb-12">
                <h2 class="text-3xl border-b pb-2 mb-6 text-blue-700">2. Основной Текст Теории (V4.2)</h2>

                <!-- 2.1. КОСМОГОНИЯ: ТЕОРИЯ БОЛЬШОГО ЗАКИПАНИЯ -->
                <h3 id="cosmogony" class="text-2xl font-semibold mb-3 pt-4 border-t">2.1. Космогония: Теория Большого Закипания</h3>
                <p>До начала времен существовал **Первичный Пакет**. Вселенная находилась в состоянии криогенной статики (в "Морозилке"). Энтропия была минимальна. Материя (сосиски) и Пространство (вода) были разделены фазовым барьером (полиэтиленом).</p>
                <div class="academic-block mt-4">
                    <p>Событие $\alpha$: Вскрытие и Погружение. В момент $t=0$ внешний оператор (**Демиург-Повар**) нарушил целостность Пакета. Произошло смешивание ингредиентов в Мета-Кастрюле. Началось **Великое Закипание (Great Boiling)**.</p>
                    <ul class="list-disc list-inside ml-4 mt-2">
                        <li>**Инфляция:** Это термическое расширение жидкости при нагреве от $20^{\circ}C$ до $100^{\circ}C$.</li>
                        <li>**Реликтовое излучение:** Остаточный тепловой фон, равномерно распределенный по объему кастрюли.</li>
                    </ul>
                </div>

                <!-- 2.2. ТОПОЛОГИЯ МАТЕРИИ: СОСИСКИ И БУЛЬОН -->
                <h3 id="topology" class="text-2xl font-semibold mb-3 pt-4 border-t">2.2. Топология Материи: Сосиски и Бульон</h3>
                <p class="font-bold mt-4">Сосиски (Sausage Macro-Structures):</p>
                <p>То, что мы воспринимаем как "Сверхскопления галактик" (Filaments) — это микроскопический взгляд на волокна **Мега-Сосисок**.</p>
                <ul class="list-disc list-inside ml-4">
                    <li>**Оболочка (Event Horizon):** Граница раздела фаз "Мясо-Бульон". Она полупроницаема: выпускает аромат (информацию), но удерживает фарш (барионную материю).</li>
                    <li>**Разрыв оболочки:** Приводит к катастрофическому выбросу материи, формируя неправильные галактики.</li>
                </ul>

                <p class="font-bold mt-4">Бульон (The Universal Medium):</p>
                <p>Пространство заполнено плотной жидкостью — **Наваром**. Вакуума не существует.</p>
                <ul class="list-disc list-inside ml-4">
                    <li>**Темная материя:** Это взвесь микрочастиц жира и денатурированного белка, плавающая в Наваре, создающая вязкое сопротивление.</li>
                </ul>
                
                <!-- 2.3. ФУНДАМЕНТАЛЬНЫЕ ВЗАИМОДЕЙСТВИЯ -->
                <h3 class="text-2xl font-semibold mb-3 pt-4 border-t">2.3. Фундаментальные Взаимодействия</h3>
                <ol class="list-decimal list-inside ml-4 space-y-3">
                    <li>
                        <span class="font-medium">Гравитация (Эффект слипания):</span>
                        Жировые пятна и куски мяса притягиваются из-за поверхностного натяжения жидкости.
                        $$\text{F}_{grav} = \sigma \cdot 2\pi R$$
                        ($\sigma$ — коэффициент поверхностного натяжения Бульона)
                    </li>
                    <li>
                        <span class="font-medium">Электромагнетизм:</span> Обусловлен концентрацией соли (NaCl). Свет — это распространение вибраций в солевой кристаллической решетке.
                    </li>
                </ol>

                <!-- 2.4. ДИНАМИКА ВСЕЛЕННОЙ -->
                <h3 id="dynamics" class="text-2xl font-semibold mb-3 pt-4 border-t">2.4. Динамика Вселенной и Эсхатология</h3>
                <p class="font-bold mt-4">Темная Энергия и "Ложка":</p>
                <p>Ускоренное расширение вызвано **Турбулентностью**, создаваемой периодическим вмешательством внешнего объекта: **Гипотеза Ложки (The Spoon Hypothesis)**.
                </p>

                <p class="font-bold mt-4">Математический Формализм:</p>
                <p>Основное уравнение состояния Вселенной (Уравнение Навара):</p>
                <div class="overflow-x-auto my-4 p-4 bg-gray-100 rounded-lg">
                    $$\Omega_{soup} = \frac{\int_{V} (\rho_{meat} + \rho_{fat}) dV}{T_{cooking} \cdot k_{salt}}$$
                </div>
                <p class="text-sm italic text-gray-500">Где $\Omega_{soup}$ — Индекс наваристости, $T_{cooking}$ — Время варки, $k_{salt}$ — Постоянная солености.</p>

                <p class="font-bold mt-4">Сценарии Конца Света (ЭСХАТОЛОГИЯ):</p>
                <ul class="list-disc list-inside ml-4">
                    <li>**The Great Chill:** Остывание и превращение в Холодец.</li>
                    <li>**The Boil-Over:** Выкипание жидкости, Вселенная становится сухой и безжизненной.</li>
                    <li>**The Final Consumption:** Самый вероятный. Гигантская Ложка зачерпнет наш сектор пространства.</li>
                </ul>

            </section>
            
            <!-- 3. Электронные Вспомогательные Материалы (ЭСМ) -->
            <section id="esm" class="mb-12">
                <h2 class="text-3xl border-b pb-2 mb-4 text-blue-700">3. Электронные Вспомогательные Материалы (ЭСМ)</h2>
                <div class="academic-block">
                    <p class="font-semibold">Этот раздел содержит подробные математические выкладки:</p>
                    <ul class="list-disc list-inside ml-4 mt-2">
                        <li>Полное тензорное Уравнение Навара-Стокса для Бульона.</li>
                        <li>Расчет критической плотности $\rho_{crit}$ (момент, когда сосиска начинает тонуть).</li>
                        <li>Таблица Кухонных Констант: $k_{salt}, T_{boil}, \eta_{broth}$ (вязкость бульона).</li>
                    </ul>
                </div>
            </section>

            <!-- 4. Руководство для Участников -->
            <section id="contributing" class="mb-12">
                <h2 class="text-3xl border-b pb-2 mb-4 text-blue-700">4. Руководство для Участников</h2>
                <p class="text-lg font-medium mb-3">УНИВЕРСАЛЬНЫЙ КОДЕКС ИССЛЕДОВАТЕЛЯ ОТМГК</p>
                <ul class="list-disc list-inside ml-4 space-y-2">
                    <li>Все вклады должны быть *максимально серьезными* и *логически непротиворечивыми*.</li>
                    <li>**Типы Взносов:** Математический Аппарат, Топологические Исследования, Эсхатологическое Моделирование.</li>
                    <li>**Правило PR:** Каждое утверждение должно быть строго обосновано с точки зрения Гидро-Термодинамики или Метафизики (Демиург-Повар).</li>
                </ul>
            </section>

            <!-- 5. Лицензия -->
            <section id="license" class="mb-12">
                <h2 class="text-3xl border-b pb-2 mb-4 text-blue-700">5. Лицензия</h2>
                <div class="academic-block">
                    <p class="font-semibold">Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</p>
                    <p class="mt-2">Вы можете свободно делиться, адаптировать и создавать производные материалы, при условии указания авторства и распространения ваших работ под той же лицензией.</p>
                </div>
            </section>

            <footer class="text-center text-sm text-gray-500 py-6 border-t mt-12">
                © 2025 Общая Теория Макро-ГастроНОМИЧЕСКОГО Континуума. Все права зарезервированы (и находятся в руках Демиурга-Повара).
            </footer>

        </main>
    </div>

</body>
</html>