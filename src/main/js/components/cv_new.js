import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { createCV } from "../actions";

class CVNew extends Component{

    onSubmit(values) {
        this.props.createCV(values, () => {
          this.props.history.push("/cv");
        });
    }

    render(){ 
        const { handleSubmit } = this.props;

        return (
            <div className="container py-5">
                <div className="row box">
                    <div className="col-md-10 mx-auto">
                        <h1>User</h1>
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <div className="form-group row">
                                <Field
                                    name="username"
                                    label="Username"
                                    type="text"
                                    grid="6"
                                    component={renderField}
                                />
                                <Field
                                    name="password"
                                    label="Password"
                                    type="password"
                                    grid="6"
                                    component={renderField}
                                />
                            </div>
                            <div className="form-group row">
                                <Field
                                    name="firstname"
                                    label="First name"
                                    type="text"
                                    grid="6"
                                    component={renderField}
                                />
                                <Field
                                    name="lastname"
                                    label="Last name"
                                    type="text"
                                    grid="6"
                                    component={renderField}
                                />
                            </div>
                            <div className="form-group row">
                                <Field
                                    name="birthdate"
                                    label="Date of birth"
                                    type="date"
                                    grid="6"
                                    component={renderField}
                                />
                                <Field
                                    name="email"
                                    label="E-mail"
                                    type="email"
                                    grid="6"
                                    component={renderField}
                                />
                            </div>
                            <div className="form-group row">
                                <Field
                                    name="phone"
                                    label="Phone"
                                    type="text"
                                    grid="6"
                                    component={renderField}
                                />
                                <Field
                                    name="drivingLicence"
                                    label="Driving licence"
                                    type="text"
                                    grid="6"
                                    component={renderField}
                                />
                            </div>
                            <div className="form-group row">
                                <Field
                                    name="address"
                                    label="Address"
                                    type="text"
                                    grid="6"
                                    component={renderField}
                                />
                                <Field
                                    name="linkedinAccount"
                                    label="Linkedin account"
                                    type="url"
                                    grid="6"
                                    component={renderField}
                                />
                            </div>
                            <div className="form-group row">
                                <Field
                                    name="webpage"
                                    label="Webpage"
                                    type="url"
                                    grid="6"
                                    component={renderField}
                                />
                                <Field
                                    name="image"
                                    label="Imageee"
                                    type="file"
                                    grid="6"
                                    ref={input => {
                                        this.fileInput = input;
                                    }}
                                    component={renderField}
                                />
                            </div>
                            <FieldArray name="skills" component={renderSkills} />
                            <FieldArray name="education" component={renderEducation} />
                            <FieldArray name="work" component={renderWork} />
                            <FieldArray name="hobbies" component={renderHobbies} />
                            <button type="submit" className="btn btn-primary" disabled={this.props.submitting} >Submit</button>
                            <Link to="/cv" className="btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const renderField = (field) => {
    const className = `form-control ${field.meta.touched && field.meta.error ? 'is-invalid' : ''}`;
    const grid = `col-sm-${field.grid}`;

    return (
        <div className={grid}>
            <label>{field.label}</label>
            <input 
                className={className}
                type={field.type}
                placeholder={field.label}
                {...field.input}
            />
            <div className="text-danger">
                {field.meta.touched ? field.meta.error : '' }
            </div>
        </div>
    );
}

const renderSkills = ({ fields, meta: { error, submitFailed } }) => (
    <div className="box">
      <h1>Skills</h1>
        <button type="button" className="btn btn-success" onClick={() => fields.push({})}>
            Add Skill
        </button>
        {submitFailed && error && <span>{error}</span>}
      
      {fields.map((skill, index) => (
        <div className="box" key={index}>
            <div className="text-right">
                <button
                    type="button"
                    title="Remove Skill"
                    className="btn btn-link text-muted"
                    onClick={() => fields.remove(index)}
                >
                    X
                </button>
            </div>
          <h4>Skill #{index + 1}</h4>
          <div className="form-group row">
          <Field
            name={`${skill}.title`}
            type="text"
            component={renderField}
            label="Title"
            grid="12"
          />
          </div>
          <div className="form-group row">
          <Field
            name={`${skill}.note`}
            type="text"
            component={renderField}
            label="Note"
            grid="12"
          />
          </div>
          <div className="form-group row">
          <Field
            name={`${skill}.level`}
            type="number"
            component={renderField}
            label="Level"
            grid="12"
          />
          </div>
        </div>
      ))}
    </div>
  )

  const renderEducation = ({ fields, meta: { error, submitFailed } }) => (
    <div className="box">
      <h1>Education</h1>
        <button type="button" className="btn btn-success" onClick={() => fields.push({})}>
            Add Education
        </button>
        {submitFailed && error && <span>{error}</span>}
      
      {fields.map((education, index) => (
        <div className="box" key={index}>
            <div className="text-right">
                <button
                    type="button"
                    title="Remove Education"
                    className="btn btn-link text-muted"
                    onClick={() => fields.remove(index)}
                >
                    X
                </button>
            </div>
          <h4>Education #{index + 1}</h4>
          <div className="form-group row">
                <Field
                    name={`${education}.startDate`}
                    label="Start Date"
                    type="date"
                    grid="6"
                    component={renderField}
                />
                <Field
                    name={`${education}.endDate`}
                    label="End Date"
                    type="date"
                    grid="6"
                    component={renderField}
                />
            </div>
            <div className="form-group row">
          <Field
            name={`${education}.schoolName`}
            type="text"
            component={renderField}
            label="School name"
            grid="6"
          />
          <Field
            name={`${education}.faculty`}
            type="text"
            component={renderField}
            label="Faculty"
            grid="6"
          />
          </div>
          <div className="form-group row">
          <Field
            name={`${education}.major`}
            type="text"
            component={renderField}
            label="Major"
            grid="6"
          />
          <Field
            name={`${education}.degree`}
            type="text"
            component={renderField}
            label="Degree"
            grid="6"
          />
          </div>
          <div className="form-group row">
          <Field
            name={`${education}.thesis`}
            type="text"
            component={renderField}
            label="Thesis"
            grid="12"
          />
          </div>
        </div>
      ))}
    </div>
  )

  const renderWork = ({ fields, meta: { error, submitFailed } }) => (
    <div className="box">
      <h1>Work</h1>
        <button type="button" className="btn btn-success" onClick={() => fields.push({})}>
            Add Work
        </button>
        {submitFailed && error && <span>{error}</span>}
      
      {fields.map((work, index) => (
        <div className="box" key={index}>
            <div className="text-right">
                <button
                    type="button"
                    title="Remove Work"
                    className="btn btn-link text-muted"
                    onClick={() => fields.remove(index)}
                >
                    X
                </button>
            </div>
          <h4>Work #{index + 1}</h4>
          <div className="form-group row">
                <Field
                    name={`${work}.startDate`}
                    label="Start Date"
                    type="date"
                    grid="6"
                    component={renderField}
                />
                <Field
                    name={`${work}.endDate`}
                    label="End Date"
                    type="date"
                    grid="6"
                    component={renderField}
                />
            </div>
            <div className="form-group row">
                <Field
                    name={`${work}.company`}
                    label="Company"
                    type="text"
                    grid="6"
                    component={renderField}
                />
                <Field
                    name={`${work}.position`}
                    label="Position"
                    type="text"
                    grid="6"
                    component={renderField}
                />
            </div>   
            <div className="form-group row">
                <Field
                    name={`${work}.type`}
                    label="Type"
                    type="text"
                    grid="6"
                    component={renderField}
                />
                <Field
                    name={`${work}.webpage`}
                    label="Webpage"
                    type="url"
                    grid="6"
                    component={renderField}
                />
            </div>   
            <div className="form-group row">
                <Field
                    name={`${work}.address`}
                    label="Address"
                    type="text"
                    grid="12"
                    component={renderField}
                />
            </div>  
            <div className="form-group row">
                <Field
                    name={`${work}.notes`}
                    label="Notes"
                    type="text"
                    grid="12"
                    component={renderField}
                />
            </div>   
        </div>
      ))}
    </div>
  )

  const renderHobbies = ({ fields, meta: { error, submitFailed } }) => (
    <div className="box">
      <h1>Hobbies</h1>
        <button type="button" className="btn btn-success" onClick={() => fields.push({})}>
            Add Hobby
        </button>
        {submitFailed && error && <span>{error}</span>}
      
      {fields.map((hobby, index) => (
        <div className="box" key={index}>
            <div className="text-right">
                <button
                    type="button"
                    title="Remove Hobby"
                    className="btn btn-link text-muted"
                    onClick={() => fields.remove(index)}
                >
                    X
                </button>
            </div>
          <h4>Hobby #{index + 1}</h4>
          <div className="form-group row">
          <Field
            name={`${hobby}.notes`}
            type="text"
            component={renderField}
            label="Note"
            grid="12"
          />
          </div>
        </div>
      ))}
    </div>
  )

const validate = (values) => {
    const errors = {}

    if (!values.username){
        errors.username = "Required";
    }

    if (!values.password){
        errors.password = "Required";
    }

    if (!values.firstname){
        errors.firstname = "Required";
    }

    if (!values.lastname){
        errors.lastname = "Required";
    }
    return errors;
};

export default reduxForm({
    validate: validate,
    form: 'CVNewForm'
})(
    connect(null, { createCV })(CVNew)
);