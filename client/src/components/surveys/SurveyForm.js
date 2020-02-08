import React, {Component} from 'react';
import { Field , reduxForm} from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields(){
    return(
      <div>
        <Field  label="Survey Title" type="text" name="title" component={SurveyField} />
      </div>
    )
  }
  render(){
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(val => console.log(val))}>
            {this.renderFields()}
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ 
  form: 'surveyForm'
})(SurveyForm);