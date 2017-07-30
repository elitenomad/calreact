class AppointmentsList extends React.Component {
    render (){
        return(
            <div>
                {this.props.appointments.map(function(appointment, i){
                    return(
                        <Appointment appointment={appointment} key={i}/>
                    )
                })}
            </div>
        )
    }
}