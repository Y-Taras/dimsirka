// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik } from 'formik';

const HelpFormVolunteer = () => (
  <Formik
    initialValues={{
      carHelp: false,
      physicalHelp: false,
      eventHelp: false,
      careHelp: false,
      otherHelp: false,
      name: '',
      surname: '',
      phone: '',
      email: '',
      birthdate: '',
      address: ''
    }}
    validate={values => {
      // same as above, but feel free to move this into a class method now.
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}
    onSubmit={values => {
      console.log('values', values);
    }}
    render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
      <form onSubmit={handleSubmit} autoComplete="on">
        <div className="help-form__checkboxes">
          <div className="help-form__volunteer-check-item">
            <input
              type="checkbox"
              className="help-form__volunteer-checkbox"
              id="carHelp"
              name="carHelp"
              value={values.carHelp}
            />
            <label htmlFor="carHelp" className="help-form__text">
              <FormattedMessage id="helpForm.volunteer.checklist.carHelp" />
              <br />
              <FormattedMessage id="helpForm.volunteer.checklist.carHelpText" />
            </label>
          </div>
          <div className="help-form__volunteer-check-item">
            <input
              type="checkbox"
              className="help-form__volunteer-checkbox"
              id="physHelp"
              name="physHelp"
              value={values.physicalHelp}
            />
            <label htmlFor="physHelp" className="help-form__text">
              <FormattedMessage id="helpForm.volunteer.checklist.physicalHelp" />
              <br />
              <FormattedMessage id="helpForm.volunteer.checklist.physicalHelpText" />
            </label>
          </div>
          <div className="help-form__volunteer-check-item">
            <input
              type="checkbox"
              className="help-form__volunteer-checkbox"
              id="eventHelp"
              name="eventHelp"
              value={values.eventHelp}
            />
            <label htmlFor="eventHelp" className="help-form__text">
              <FormattedMessage id="helpForm.volunteer.checklist.eventHelp" />
              <br />
              <FormattedMessage id="helpForm.volunteer.checklist.eventHelpText" />
            </label>
          </div>
          <div className="help-form__volunteer-check-item">
            <input
              type="checkbox"
              className="help-form__volunteer-checkbox"
              id="careHelp"
              name="careHelp"
              value={values.careHelp}
            />
            <label htmlFor="careHelp" className="help-form__text">
              <FormattedMessage id="helpForm.volunteer.checklist.careHelp" />
              <br />
              <FormattedMessage id="helpForm.volunteer.checklist.careHelpText" />
            </label>
          </div>
          <div className="help-form__volunteer-check-item">
            <input
              type="checkbox"
              className="help-form__volunteer-checkbox"
              id="otherHelp"
              name="otherHelp"
              value={values.otherHelp}
            />
            <label htmlFor="otherHelp" className="help-form__text">
              <FormattedMessage id="helpForm.volunteer.checklist.otherHelp" />
              <br />
              <FormattedMessage id="helpForm.volunteer.checklist.otherHelpText" />
            </label>
          </div>
        </div>
        <div className="help-form__contacts">
          <div className="help-form__volunteer-item">
            <label htmlFor="nameVolunteer" className="help-form__text">
              <FormattedMessage id="helpForm.name" />
            </label>
            <input
              type="text"
              className="help-form__input"
              name="name"
              autoComplete="given-name"
              id="nameVolunteer"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={values.name}
            />
            {touched.name && errors.name && <div>{errors.name}</div>}
          </div>
          <div className="help-form__volunteer-item">
            <label htmlFor="surnameVolunteer" className="help-form__text">
              <FormattedMessage id="helpForm.surname" />
            </label>
            <input
              type="text"
              className="help-form__input"
              name="surname"
              autoComplete="family-name"
              id="surnameVolunteer"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={values.surname}
            />
            {touched.surname && errors.surname && <div>{errors.surname}</div>}
          </div>
          <div className="help-form__volunteer-item">
            <label htmlFor="phoneVolunteer" className="help-form__text">
              <FormattedMessage id="helpForm.phoneNumber" />
            </label>
            <input
              type="phone"
              className="help-form__input"
              name="phone"
              autoComplete="tel"
              id="phoneVolunteer"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={values.phone}
            />
            {touched.phone && errors.phone && <div>{errors.phone}</div>}
          </div>
          <div className="help-form__volunteer-item">
            <label htmlFor="emailVolunteer" className="help-form__text">
              <FormattedMessage id="helpForm.email" />
            </label>
            <input
              type="email"
              className="help-form__input"
              name="email"
              autoComplete="email"
              id="emailVolunteer"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={values.email}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
          </div>
          <div className="help-form__volunteer-item">
            <label htmlFor="birthdate" className="help-form__text">
              <FormattedMessage id="helpForm.volunteer.birthdate" />
            </label>
            <input
              type="date"
              className="help-form__input"
              name="birthdate"
              autoComplete="bday"
              id="birthdate"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={values.birthdate}
            />
            {touched.phone && errors.phone && <div>{errors.birthdate}</div>}
          </div>
          <div className="help-form__volunteer-item">
            <label htmlFor="address" className="help-form__text">
              <FormattedMessage id="helpForm.volunteer.address" />
            </label>
            <input
              type="text"
              className="help-form__input"
              name="address"
              autoComplete="street-address"
              id="address"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={values.address}
            />
            {touched.address && errors.address && <div>{errors.address}</div>}
          </div>
        </div>
        <div className="help-form__volunteer-buttons">
          <button className="help-form__volunteer-button" type="submit" disabled={isSubmitting}>
            <FormattedMessage id="helpForm.volunteer.buttonCreate" />
          </button>
        </div>
      </form>
    )}
  />
);

export default HelpFormVolunteer;
