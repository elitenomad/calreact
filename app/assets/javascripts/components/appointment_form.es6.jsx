class AppointmentForm extends React.Component {
    handleChange (e){
        const name = e.target.name;
        obj = {};
        obj[name] = e.target.value;
        this.props.onUserInput(obj);
    }

    onFormSubmit (e){
      e.preventDefault();
      this.props.handleSubmit();
    }

    setApptTime (e){
        const name = 'appt_time';
        const obj = {};
        if(obj[name] = e.toDate()){
            this.props.onUserInput(obj);
        }
    }

    render (){
        const inputProps = {
          name: 'appt_time'
        };
        return(
            <div>
                <h2>Make an Appointment</h2>
                <Label label='Please enter title and date for appointment' />
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <input name="title" type="text" placeholder="title"  value={this.props.title} onChange={this.handleChange.bind(this)}/>
                    <Datetime input={false} open={true} inputProps={inputProps} value={this.props.appt_time} onChange={this.setApptTime.bind(this)}/>
                    <button className="submit-button" type="submit">Book an appointment</button>
                </form>
            </div>
        )
    }
}