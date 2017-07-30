class Appointment extends React.Component {
    render (){
        return(
            <div className="appointment">
                <h3>{this.props.appointment.title}</h3>
                <p>{ moment(this.props.appointment.appt_time).format('MMM DD YYYY, h:mm:ss a') }</p>
            </div>
        )
    }
}