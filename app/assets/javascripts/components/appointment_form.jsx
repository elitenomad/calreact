var AppointmentForm = React.createClass({
    handleChange: function(e){
        var name = e.target.name;
        obj = {};
        obj[name] = e.target.value;
        this.props.onUserInput(obj);
    },
    onFormSubmit: function(e){
      e.preventDefault();
      this.props.handleSubmit();
    },
    setApptTime: function(e){
        var name = 'appt_time';
        var obj = {};
        if(obj[name] = e.toDate()){
            this.props.onUserInput(obj);
        }
    },
    render: function(){
        var inputProps = {
          name: 'appt_time'
        };
        return(
            <div>
                <h2>Make an Appointment</h2>
                <form onSubmit={this.onFormSubmit}>
                    <input name="title" type="text" placeholder="title"  value={this.props.title} onChange={this.handleChange}/>
                    <Datetime input={false} open={true} inputProps={inputProps} value={this.props.appt_time} onChange={this.setApptTime}/>
                    <button className="submit-button" type="submit">Book an appointment</button>
                </form>
            </div>
        )
    }
});