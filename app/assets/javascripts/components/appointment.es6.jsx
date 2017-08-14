const Appointment =  (props) => {
    return(
        <div className="appointment">
            <h3>{props.appointment.title}</h3>
            <p>{ moment(props.appointment.appt_time).format('MMM DD YYYY, h:mm:ss a') }</p>
        </div>
    )
};