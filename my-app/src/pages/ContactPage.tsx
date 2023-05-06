import React from 'react';
import Header from "../components/Header";
import s from "../styles/Contact.module.css"
const ContactPage = () => {
    return (
        <div className={s.page}>
            <Header/>
            <div className={s.content}>
                <div className={s.contacts}>
                    <ul className={s.contact_icons}>
                        <li><a className={s.contact_icon_number} href="#" title="Phone" rel="noopener"></a>+ 7 987 654 32 10
                        </li>

                        <li><a className={s.contact_icon_telegram} href="#" title="Telegram" rel="noopener"></a> @rallolo28
                        </li>

                        <li><a className={s.contact_icon_email} href="#" title="Email" rel="noopener"></a> vorden.rolln@mail.ru
                        </li>
                    </ul>
                </div>

                    <form className={s.contact_form}>
                        <label className={s.label}>
                            Имя:
                            <input placeholder={"Ваше имя"} className={s.input} type="text" />
                        </label>
                        <label className={s.label}>
                            Почта:
                            <input placeholder={"Ваше почта"} className={s.input} type="text" />
                        </label>
                        <label className={s.label}>
                            Сообщение:
                            <textarea placeholder={"Ваше сообщение"} className={s.input}  />
                        </label>
                        <button className={s.button}>Отправить</button>

                    </form>

            </div>
        </div>
    );
};

export default ContactPage;