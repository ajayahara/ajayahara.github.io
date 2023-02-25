import React from 'react'
import GitHubCalendar from "react-github-calendar"
import "../CSS/GitStats.css"
export const GitStats = () => {
  return (
    <div className='gitstats'>
      <h1 className='gitstats-name'>
        GIT STATS
      </h1>
      <div className='stats-container'>
        <div className='stat-image-container'>
          <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=ajayahara&show_icons=true&locale=en&layout=compact" alt="ajayahara" />
          <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=ajayahara&" alt="ajayahara" />
          <img align="center" src="https://github-readme-stats.vercel.app/api?username=ajayahara&show_icons=true&locale=en" alt="ajayahara" />
        </div>
        <div className='calender-container'>
          <GitHubCalendar username='ajayahara' className='github-calender' />
        </div>
      </div>
    </div>
  )
}
