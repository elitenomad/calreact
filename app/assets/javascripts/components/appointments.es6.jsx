class Appointments extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            appointments: this.props.appointments,
            title: '',
            appt_time: ''
        }
    }
    handleUserInput (obj){
      this.setState(obj);
    }

    addNewAppointment (appointment){
        var appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
        this.setState({appointments: appointments.sort(function(a,b){
            return new Date(a.appt_time) - new Date(b.appt_time);
        })});
    }

    handleOnSubmit (e){
        var appointment = {title: this.state.title, appt_time: this.state.appt_time};
        var $this = this;
        $.post('/appointments', {appointment: appointment}).done(function(data){
            $this.addNewAppointment(data);
        });
    }

    render (){
        return(
            <div>
                <AppointmentForm title={this.state.title} appt_time={this.state.appt_time} onUserInput={this.handleUserInput.bind(this)}  handleSubmit={this.handleOnSubmit.bind(this)} />
                <AppointmentsList appointments={this.state.appointments} onUserInput={this.handleUserInput} />
            </div>
        )
    }
}