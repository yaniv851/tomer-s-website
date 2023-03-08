import React, { useState } from "react";
import "./styles/qa-an.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <div className="accordion" dir="rtl">
      <h1>
        שאלות ותשובות
      </h1>
      <div
        className={`accordion-item ${activeIndex === 0 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(0)}>
          איזה סוג יהלומי מעבדה יש לכם?
          <span className={`accordion-arrow ${activeIndex === 0 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>
        </div>
        <div className="accordion-item-content">
          היהלומי מעבדה שאנחנו מייצרים הם מסוג CVD, יהלום מעבדה בשיטה הכימית, בשוק ישנם יהלומי מעבדה מסוגים שונים, כמו HPHT, אך CVD הוא היחיד נכון להיום (2023) שהוא אחד לאחד זהה ליהלום טבעי        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 1 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(1)}>
          הציעו לי תכשיט דומה לשלכם אך יותר זול, זה ייתכן?
          <span className={`accordion-arrow ${activeIndex === 1 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          ככלל, לא. כיצרנים המחירים שלנו נחשבים לטובים ביותר. אם הציעו לכם תכשיט דומה במחיר מחשיד, כנראה שהאיכות שלו תהיה ירודה.
          חשוב לנו שהלקוחות שלנו יהיו מרוצים לכן אנוחנו משקיעים מאמצים רבים ביצור היהלומים ויצור התכשיט- ולא חוסכים באמצעים.
        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 2 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(2)}>
          היכן אתם מייצרים את היהלומים?
          <span className={`accordion-arrow ${activeIndex === 2 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          המעבדות שלנו נמצאות ססן פרנסיסקו שבארצות הברית לכן היהלומים שלנו נושאים את הטייטל היוקרתי של MADE IN AMERICA בשונה מרוב יהלומי המעבדה המייוצרים הסין והודו ובאיכות ירודה.
        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 3 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(3)}>
          האם אני צריכה להגיע לחנות המפעל?
          <span className={`accordion-arrow ${activeIndex === 3 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">

          ניתן להגיע לחנות המפעל, אך ישנם גם משלוחים מהירים לכל רחבי הארץ
        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 4 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(4)}>
          האם ניתן לעצב תכשיט בעיצוב אישי?
          <span className={`accordion-arrow ${activeIndex === 4 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          בהחלט כן! תשתפי אותנו מה החלום שלך ונבנה ביחד סקיצה ומודל ונייצר לך את טבעת החלומות שלך
        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 5 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(5)}>
          כיצד ניתן לשלם לכם?
          <span className={`accordion-arrow ${activeIndex === 5 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          כחברה גדולה אנחנו מקבלים אמצעי תשלום רבים אם זה מזומן\העברה בנקאית\אשראי\תשלומים
        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 6 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(6)}>
          האם יש אחריות?
          <span className={`accordion-arrow ${activeIndex === 6 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          כמותג יהלומי המעבדה המוביל בארץ אנו דואגים שכל תכשיט יצא ברמה הכי גבוהה שיש, במידה ויש בעיה בשיבוץ יש שנתיים אחריות ותיקון עלינו (לא כולל אבידה של האבן)        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 7 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(7)}>
          למה כדאי לקנות מאיתנו?
          <span className={`accordion-arrow ${activeIndex === 7 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          כחברי בורסת היהלומים אנו מחוייבים לחוקים בינלאומיים רבים ולאמינות ברמה הגבוהה ביותר, בנוסף, אתם מרוויחים מכך שאתם קונים ישירות מהיצרן        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 8 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(8)}>
          האם התכשיטים שלכם מכסף או זהב?
          <span className={`accordion-arrow ${activeIndex === 8 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          כל התכשיטים שלנו מזהב בלבד, אחנו לא משתמשים מכסף מכיוון שהוא מחליד ולא היפאלרגני, ניתן להזמין בהזמנה מיוחדת גם פלטינום או טיטניום.
        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 9 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(9)}>
          האם ניתן לשכור תכשיטים?
          <span className={`accordion-arrow ${activeIndex === 9 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          בהחלט! יהלומי מהבורסה מציעים מגוון רחב של תכשיטי יהלום להשכרה לאירועים, ניתן להשכיר בהשכרה יומית או שבועית ואף ניתן להאריך לחודש
          להשכרה ניתן להכנס לדף ההשכרות שלנו ממש <a href="#">כאן</a>

        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 10 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(10)}>
          כיצד אני יודע את מידת האצבע שלי?
          <span className={`accordion-arrow ${activeIndex === 10 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          ניתן להוריד את יישומון Ring sizer אשר זמין לכל טלפון ובחינם, אשר בתוך מספר שניות אומר לכם את מידת האצבע באמצעות טבעת שתניחו עליו, המידה הכי פופלרית היא 53
        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 11 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(11)}>
          האם אני מקבל תעודות עם התכשיט?
          <span className={`accordion-arrow ${activeIndex === 11 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          כיצרנים הגדולים ביותר של יהלומי מעבדה כיום בארץ כל היהלומים שלנו שהם מעל 1 קראט עוברים במכונים הגמולוגים המחמירים בעולם, GIA וחלק בIGI, ולא בסניפים ההודים שלהם כמו הרבה יהלומים שיש בשוק היום
        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 12 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(12)}>
          אם אני קונה יהלום מתחת ל-1 קראט?
          <span className={`accordion-arrow ${activeIndex === 12 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          גם אז ניתן להנפיק תעודה, לבקשת הלקוח, ככלל לא נהוג להוציא תעודות בגדלים האלו (כאשר רוכשים ממקום אמין בלבד)

          יש לי יהלומים טבעיים ואני מעוניינת להחליף ליהלומי מעבדה
          יהלומי מהבורסה מציעה שירות של טרייד אין, ניתן לקרוא עליו ממש <a href="#">כאן</a>


        </div>
      </div>

      <div
        className={`accordion-item ${activeIndex === 13 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(13)}>
          האם האתר מאובטח?
          <span className={`accordion-arrow ${activeIndex === 13 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          האתר עומד בדרישות הגבוהות ביותר של אבטחה ומוצפן באמצעות פרוטוקול SSL
        </div>
      </div>
      <div
        className={`accordion-item ${activeIndex === 14 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(14)}>
          מוכרים גם לעסקים?
          <span className={`accordion-arrow ${activeIndex === 14 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          בעל חברת הייטק? בעל עסק? ניתן לרכוש תכשיטים בסיטונאות בהנחה מיוחדת ביצירת קשר טלפונית איתנו לפנק את העובדים או את ההנהלה, בחשבונית מס התכשיטים יוגדרו כמתנה לעובדים לפי החוק
        </div>
      </div>
      <div
        className={`accordion-item ${activeIndex === 15 ? "accordion-item-active" : ""
          }`}
      >
        <div className="accordion-item-header" onClick={() => handleClick(15)}>
          מדוע לקנות תכשיטי יהלומים באינטרנט?
          <span className={`accordion-arrow ${activeIndex === 15 && "accordion-arrow-active"}`}>
            <KeyboardArrowDownIcon />
          </span>

        </div>
        <div className="accordion-item-content">
          בשנים האחרונות יותר ויותר אנשים מעדיפים לקנות אונליין ואכן זהו פתרון מעולה ונוח, לקנות מוצרים ישירות מהמחשב בעבודה או בבית. לא בא לך לנסוע לבורסה באמצע היום, לא בא לך לחפש חניה ובא לך לקנות באמצע הלילה. האתר שלנו יספק לך פרטים מלאים על כל התכשיטים ותוכל להזמן אותם הביתה בדרך מאובטחת
        </div>
      </div>
    </div>
  );
}
