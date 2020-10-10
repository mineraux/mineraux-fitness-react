import React, { FunctionComponent } from 'react';
import moment from 'moment'
import Classnames from 'classnames'
import '../../assets/styles/calendar.css'

/**
 * NOTE Calendar:
 * Quand on selectionne un jour, le panneau du détail journalier est mis à jour avec les repas de la journé
 * Inspi design : https://dribbble.com/shots/10863503-Owlschool-lessons
 *
 * Creation du calendrier
 *  - 2 btn pour naviguer dans les mois
 *  - création du mois en cours on change select mout
 */

const Calendar: FunctionComponent = () => {
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  const currentMonthName = moment.months(currentMonth)

  const getDaysByMonth = (year: number, month: number) => {
    const daysInMonth = moment().year(year).month(month).daysInMonth()

    return Array.from({length: daysInMonth}, (v, k) => k + 1)
  };

  const daysNumberInMonth = getDaysByMonth(currentYear, currentMonth)

  const dateInMonth = daysNumberInMonth.map(index => {
    return moment().year(currentYear).month(currentMonth).date(index)
  })

  const onClickDay = (day: moment.Moment) => {
    console.log(day)
  }

  return (
    <div>
      <span className="block text-gray-700 text-sm mb-1">
        Current month : {currentMonthName}
      </span>

      <div className="calendar__day-list flex flex-col max-w-sm overflow-y-scroll my-10">
        {
          dateInMonth.map((day, index) => {

            return (
              <div key={index} className={Classnames(index % 2 === 0 ? 'bg-gray-100': '', 'flex py-5 px-5 rounded-lg cursor-pointer')}
                onClick={() => onClickDay(day)}>
                <div className="flex justify-center w-20">
                  <div className="flex flex-col text-center">
                    <span className="text-gray-600 text-xs">{day.format('ddd')}</span>
                    <span className="text-gray-700 text-2xl font-bold">{day.format('DD')}</span>
                  </div>
                </div>
                <div className="flex flex-col pl-6 border-l border-gray-400 justify-center">
                  <span>3 meal</span>
                  <span className="text-gray-600 text-xs">Total calories : 2500</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Calendar