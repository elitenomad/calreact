var AppointmentsList = React.createClass({
    render: function(){
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
});