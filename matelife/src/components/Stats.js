export const Stats = (props) => {
    const stats = JSON.parse(localStorage.getItem('stats'))
    function time(s) {					
            var min = s / 60;				// minuty
            var h = min / 60;	            // godziny
            var dni = h / 24			    // dni
        
            var sLeft = Math.floor(s  % 60);	// pozostało sekund		
            var minLeft = Math.floor(min % 60);	// pozostało minut
            var hLeft = Math.floor(h % 24);		// pozostało godzin	
            var dniLeft = Math.floor(dni % 7);	// pozostało godzin	

            return `${dniLeft} ${props.lang.days}, ${hLeft} ${props.lang.hours}, ${minLeft} ${props.lang.minutes}, ${sLeft} ${props.lang.seconds}`
    }
    return (
        <div className="stats_items">
            <div className="back shadow" onClick={props.back}>{props.lang.back}</div>
            <div className="stats" onClick={() => console.log(stats)}>{props.lang.statistics}</div>
            <div className="stat">{props.lang.games_playes}: {stats.games_playes != null ? stats.games_playes : 0}</div>
            <div className="stat">{props.lang.games_won}: {stats.games_won != null ? stats.games_won : 0}</div>
            <div className="stat">{props.lang.games_lost}: {stats.games_lost != null ? stats.games_lost : 0}</div>
            <div className="stat">{props.lang.correct_answers}: {stats.correct_answers != null ? stats.correct_answers : 0}</div>
            <div className="stat">{props.lang.incorrect_answers}: {stats.incorrect_answers != null ? stats.incorrect_answers : 0}</div>
            <div className="stat">{props.lang.played_time}: {time(stats.time != null ? stats.time : 0)}</div>
        </div>
    );
}