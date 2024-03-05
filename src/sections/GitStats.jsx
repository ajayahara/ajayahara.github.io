import GitHubCalendar from "react-github-calendar"
const GitStats = () => {
    return (
        <section className="gitstats" id="gitstats">
            <h2 className="heading">Git <span>Stats</span></h2>
            <div className='stats-container'>
                <div className='stat-image-container'>
                    <img id='github-top-langs' align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=ajayahara&show_icons=true&locale=en&layout=compact" alt="ajayahara" />
                    <img id="github-streak-stats" align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=ajayahara&" alt="ajayahara" />
                    <img id="github-stats-card" align="center" src="https://github-readme-stats.vercel.app/api?username=ajayahara&show_icons=true&locale=en" alt="ajayahara" />
                </div>
                <div className='calender-container'>
                    <GitHubCalendar username='ajayahara' className='github-calender react-activity-calendar' />
                </div>
            </div>
        </section>
    )
}

export default GitStats