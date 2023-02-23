import React from 'react';
import "./style/categories.css";
import Bounce from 'react-reveal/Bounce';

function CardContainer() {
    return (
        <div style={{ textAlign: "center", marginBottom: "90px" }} dir="rtl">
            <img className='diamond' src="/images/Diamond.png" />
            <h1 className='categ' style={{ fontWeight: "400" }} dir='rtl'>
                הקטגוריות שלנו:
            </h1>
            <br />
            <Bounce bottom>
                <div className='categories'>
                    <div className='category'>
                        <img src='/images/tzmidim.jpeg' />
                        <div className='card-cont'>
                            <h2>צמידים</h2>
                        </div>
                    </div>
                    <div className='category'>
                        <img src='/images/nineteenhundred.jpeg' />
                        <div className='card-cont'>
                            <h2>תכשיטים עד 1900₪</h2>
                        </div>
                    </div>
                    <div className='category'>
                        <img src='/images/engage.jpeg' />
                        <div className='card-cont'>
                            <h2>טבעות אירוסין</h2>
                        </div>
                    </div>
                </div>
            </Bounce>
            <Bounce bottom>
                <div className='categories'>
                    <div className='category'>
                        <img src='/images/talionim.jpeg' />
                        <div className='card-cont'>
                            <h2>תליונים</h2>
                        </div>
                    </div>
                    <div className='category'>
                        <img src='/images/specear.jpeg' />
                        <div className='card-cont'>
                            <h2>טבעות מיוחדות</h2>
                        </div>
                    </div>
                    <div className='category'>
                        <img src='/images/earing.jpeg' />
                        <div className='card-cont'>
                            <h2>עגילים</h2>
                        </div>
                    </div>
                </div>
            </Bounce>
            <Bounce bottom>
                <div className='categories'>
                    <div className='category'>
                        <img src='/images/spectach.jpeg' />
                        <div className='card-cont'>
                            <h2>תכשיטים מיוחדים</h2>
                        </div>
                    </div>
                </div>
            </Bounce>
        </div>

    );
}

export default CardContainer;