document.addEventListener("DOMContentLoaded", function() {
  const lectures = [
    {title:'Общие понятия и классификация операционные системы.',desc:'Что такое ОС и для чего она нужна?',video:'https://www.youtube.com/embed/s0nTfosekqg',pdf:'pdf/lesson1.pdf'},
    {title:'Виды интерфейсов. Технологии реализации интерфейсов.',desc:'Эволюция ОС: от первых компьютеров до современных технологий.',video:'https://www.youtube.com/embed/V62OCz82M-M',pdf:'pdf/lesson2.pdf'},
    {title:'Обработка прерываний. Машино-зависимые свойства операционных систем.',desc:'Как ОС управляет процессами и памятью, чтобы всё работало быстро и без сбоев?',video:'https://www.youtube.com/embed/AzXR1IUww7Q',pdf:'pdf/lesson3.pdf'},
    {title:'Планирование процессов.',desc:'Какие существуют типы операционных систем и чем они отличаются?',video:'https://www.youtube.com/embed/jFUQp9DkRL4',pdf:'pdf/lesson4.pdf'},
    {title:'Обслуживание ввода-вывода.',desc:'Как операционная система управляет вводом и выводом данных?',video:'https://www.youtube.com/embed/_jdlB86PUhE',pdf:'pdf/lesson5.pdf'},
    {title:'Управление виртуальной памятью.',desc:'Что такое MS-DOS и какую роль она играла в истории ПК?',video:'https://www.youtube.com/embed/dBAoxPbcMzc',pdf:'pdf/lesson6.pdf'},
    {title:'Работа с файлами.',desc:'Зачем нужна виртуальная память и как ОС её использует?',video:'https://www.youtube.com/embed/2ONDsHsPR1c',pdf:'pdf/lesson7.pdf'},
    {title:'Планирование заданий.',desc:'Что такое ядро Linux и какие популярные дистрибутивы существуют?',video:'https://www.youtube.com/embed/j74z3LNZhnE',pdf:'pdf/lesson8.pdf'},
    {title:'Операционные системы семейства MS Windows.',desc:'Какие файловые системы используются в ОС и чем они отличаются?',video:'https://www.youtube.com/embed/s0nTfosekqg',pdf:'pdf/lesson9.pdf'}
  ];
  const row = document.getElementById('lecturesRow');
  lectures.forEach(item => {
    const card = document.createElement('article');
    card.className = 'lecture-card';
    card.innerHTML = '<h3>'+item.title+'</h3><p>'+item.desc+'</p><div class="video-wrapper"><iframe src="'+item.video+'" title="'+item.title+'" allowfullscreen></iframe></div><a class="download-btn" href="'+item.pdf+'" download>Скачать лекцию. </a>';
    row.appendChild(card);
  });

  const galleryInfo = document.getElementById('galleryInfo');
  const osInfo = {
    'MS-DOS': 'MS-DOS — ранняя операционная система от Microsoft, выпущенная в 1981 году.Она работала через командную строку, управляла файлами и памятью, и стала основой для первых версий Windows.',
    'Linux': 'Linux — открытая операционная система с ядром Linux, выпущенная в 1991 году. Используется на серверах, ПК и встроенных устройствах, известна стабильностью, безопасностью и гибкостью.',
    'Unix': 'Unix — историческая многопользовательская операционная система, созданная в 1969 году.Она стала основой для POSIX-стандарта и многих современных ОС, включая Linux и macOS.',
    'Windows': 'Windows — семейство графических операционных систем от Microsoft, выпускаемое с 1985 года.Поддерживает широкий спектр приложений для домашних и деловых пользователей.',
    'macOS': 'macOS — графическая операционная система от Apple для Mac, выпущенная в 2001 году.Известна удобным интерфейсом и тесной интеграцией с другими устройствами Apple.'
  };

  document.querySelectorAll('.gallery-grid figure').forEach(fig => {
    const button = fig.querySelector('.os-button');
    const name = button ? button.textContent.trim() : fig.querySelector('figcaption')?.textContent.trim();
    const itemInfo = document.createElement('div');
    itemInfo.className = 'gallery-item-info';
    itemInfo.textContent = osInfo[name] || 'Информация отсутствует.';
    itemInfo.style.display = 'none';
    fig.appendChild(itemInfo);

    fig.addEventListener('click', () => {
      const isActive = fig.classList.contains('active');
      document.querySelectorAll('.gallery-grid figure').forEach(f => {
        f.classList.remove('active');
        const detail = f.querySelector('.gallery-item-info');
        if (detail) detail.style.display = 'none';
      });

      if (!isActive) {
        fig.classList.add('active');
        itemInfo.style.display = 'block';
      }
    });
  });

  document.getElementById('navToggle').addEventListener('click', function(){
    document.getElementById('mainNav').classList.toggle('active');
  });
});
