import React from 'react';
import Header from "../components/Header";
import s from "../styles/HomePage.module.css"
import Slider from "../components/Slider";

const HomePage = (props:any) => {

    const handleBooking = () =>{
        console.log(localStorage.getItem('userRole'))
        if (localStorage.getItem('userRole')!="user" && localStorage.getItem('userRole')!="admin"){
            console.log(localStorage.getItem('userRole'))
            props.history.push('/auth')
        }


    }

    return (
        <div className={s.page}>
            <Header/>
            <div className={s.content}>
                <div className={s.textAbout}>
                    Спортивный центр - это современное место, где вы найдете все необходимое для занятий спортом и фитнесом. Он оборудован последними технологиями и обладает широким спектром возможностей для всех возрастов и уровней подготовки.

                    Внутри спортивного центра вы найдете просторный тренажерный зал с большим количеством оборудования для кардиотренировок и силовых упражнений. Также в центре есть несколько залов для групповых занятий, где вы сможете заняться йогой, танцами, аэробикой и многими другими видами фитнеса.

                    Для любителей активного отдыха доступны бассейн и теннисные корты. Кроме того, центр предлагает услуги индивидуальных тренеров, которые помогут вам разработать программу занятий, основанную на ваших целях и уровне подготовки.

                    В спортивном центре имеется также кафе, где вы сможете перекусить после тренировки, а также просторный паркинг для удобства посетителей. Здесь вы найдете все необходимое для здорового и активного образа жизни.
                </div>

                <Slider/>

                <button onClick={handleBooking} className={s.booking_button}>Записаться!</button>
            </div>


        </div>
    );
};

export default HomePage;