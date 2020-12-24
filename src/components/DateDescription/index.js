import React from 'react';
import moment from "moment";

const DateDescription = (props) => {
    const {date} = props;
    const momentDay = moment(date, "YYYY-MM-DD");
    const momentToday = moment(new Date(), "YYYY-MM-DD");
    const dayDiff = momentToday.diff(momentDay, 'days');
    const monthDiff = momentToday.diff(momentDay, 'month');

    return (
        <div style={{
            minWidth: 100,
            alignItems:'flex-end'
        }} className="center-column">
            <p style={{color: '#aaa', margin: 0}}>
                {
                    dayDiff === 1 ?
                        `Dün`
                        :
                        dayDiff ?
                            `${monthDiff || dayDiff} ${monthDiff ? "ay" : "gün"} önce`
                            :
                            "Bugün"
                }
            </p>
            <p style={{color: '#aaa', margin: 0}}>{moment(date).format("HH:mm")}</p>
        </div>
    )
}


export default DateDescription
