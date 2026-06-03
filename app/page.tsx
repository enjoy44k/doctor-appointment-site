"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="fixed left-0 top-0 z-50 w-full bg-teal-800/95 text-white shadow-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
          <h1 className="text-xl font-bold md:text-2xl">MedBooking</h1>

          <nav className="hidden gap-8 text-lg md:flex">
            <a href="#home" className="hover:text-teal-200">Главная</a>
            <a href="#about" className="hover:text-teal-200">О системе</a>
            <a href="#doctors" className="hover:text-teal-200">Врачи</a>
            <a href="#contacts" className="hover:text-teal-200">Контакты</a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-teal-100 to-cyan-200 px-5 pt-36 pb-16 text-center"
      >
        <h2 className="max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">
          Система записи к врачу в медицинском учреждении
        </h2>

        <p className="mt-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
          Удобная онлайн-запись на приём к специалистам без очередей и лишних звонков
        </p>
<img
  src="/doctor.jpg"
  alt="Врач"
  className="w-96 rounded-3xl shadow-2xl mt-8"
/>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-10 rounded-xl bg-teal-800 px-8 py-4 text-xl text-white transition hover:scale-105 hover:bg-teal-600"
        >
          Записаться к врачу
        </button>
      </section>

      <section id="about" className="bg-white px-5 py-24 md:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-12 text-4xl font-bold md:text-5xl">О системе</h2>

          <p className="text-xl leading-9 text-gray-700 md:text-2xl">
            Данный сайт предназначен для упрощения процесса записи пациентов к врачу.
            Пользователь может выбрать медицинское учреждение, специалиста, дату и
            удобное время приёма. Такая система помогает снизить нагрузку на
            регистратуру и сделать получение медицинских услуг более доступным.
          </p>
        </div>
      </section>

      <section className="bg-teal-50 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-20 text-center text-4xl font-bold md:text-5xl">
            Преимущества системы
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Быстрая запись", "Пациент может выбрать врача и время приёма за несколько минут."],
              ["Удобство", "Нет необходимости звонить в регистратуру или стоять в очереди."],
              ["Контроль данных", "Вся информация о записи отображается в понятной форме."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                <p className="text-lg text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="bg-white px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-20 text-center text-4xl font-bold md:text-5xl">
            Специалисты
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            {["Терапевт", "Педиатр", "Кардиолог", "Невролог"].map((doctor) => (
              <div
                key={doctor}
                className="rounded-3xl bg-teal-50 p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-4 text-5xl">⚕️</div>
                <h3 className="text-2xl font-bold">{doctor}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setIsOpen(true)}
              className="rounded-xl bg-teal-800 px-8 py-4 text-xl text-white transition hover:bg-teal-600"
            >
              Открыть форму записи
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-20 text-center text-4xl font-bold md:text-5xl">
            Как проходит запись
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["1", "Заполните данные", "Введите ФИО, телефон и выберите медицинское учреждение."],
              ["2", "Выберите врача", "Укажите специалиста, дату и удобное время приёма."],
              ["3", "Отправьте заявку", "После отправки заявка считается предварительно оформленной."],
            ].map(([num, title, text]) => (
              <div key={num} className="rounded-3xl bg-white p-8 shadow-lg">
                <div className="mb-4 text-5xl font-bold text-teal-700">{num}</div>
                <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-20 text-center text-4xl font-bold md:text-5xl">
            Отзывы пациентов
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Очень удобно, не пришлось звонить в регистратуру.", "Пациент"],
              ["Записалась к врачу за пару минут.", "Посетитель"],
              ["Понятная и простая система записи.", "Пациент"],
            ].map(([text, author]) => (
              <div key={text} className="rounded-3xl bg-teal-50 p-8 shadow-lg">
                <p className="italic">“{text}”</p>
                <h4 className="mt-4 font-bold">{author}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="bg-teal-800 px-5 py-24 text-white md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-10 text-4xl font-bold md:text-5xl">Контакты</h2>
          <p className="mb-4 text-xl">Email: info@medbooking.ru</p>
          <p className="mb-4 text-xl">Телефон: +7 (999) 555-35-35</p>
          <p className="text-xl">Республика Тыва, г. Кызыл</p>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-8 text-center text-white">
        <p>© 2026 Система записи к врачу в медицинском учреждении</p>
      </footer>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-5">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-4 text-3xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="mb-8 text-center text-3xl font-bold">
              Запись к врачу
            </h2>

            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Заявка успешно отправлена!");
                setIsOpen(false);
              }}
            >
              <input required type="text" placeholder="ФИО" className="rounded-xl border p-4" />
              <input required type="tel" placeholder="Телефон" className="rounded-xl border p-4" />

              <select required className="rounded-xl border p-4">
                <option value="">Выберите больницу</option>
                <option>Городская поликлиника №1</option>
                <option>Республиканская больница</option>
                <option>Детская поликлиника</option>
              </select>

              <select required className="rounded-xl border p-4">
                <option value="">Выберите врача</option>
                <option>Терапевт</option>
                <option>Педиатр</option>
                <option>Кардиолог</option>
                <option>Невролог</option>
                <option>Стоматолог</option>
              </select>

              <div className="grid gap-4 md:grid-cols-2">
                <input required type="date" className="rounded-xl border p-4" />
                <input required type="time" className="rounded-xl border p-4" />
              </div>

              <textarea
                placeholder="Комментарий"
                rows={4}
                className="rounded-xl border p-4"
              />

              <button
                type="submit"
                className="rounded-xl bg-teal-800 py-4 text-lg font-bold text-white transition hover:bg-teal-600"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}