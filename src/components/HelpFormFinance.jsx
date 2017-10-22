// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

const HelpFormFinance = () => (
  <Formik
    initialValues={{
      name: '',
      surname: '',
      phone: '',
      email: '',
      purpose: '',
      sum: 0,
      formAgreement: false
    }}
    validate={values => {
      // same as above, but feel free to move this into a class method now.
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.formAgreement) {
        errors.formAgreement = 'Required'
      }

      return errors;
    }}
    onSubmit={values => {
      console.log('values', values);
    }}
    render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
      <form onSubmit={handleSubmit} autoComplete="on" className="help-form__finance-form">
        <div className="help-form__inputs-wrapper">
          <div className="help-form__info-wrapper">
            <span className="help-form__info">
              <FormattedMessage id="helpForm.finance.title1" />
            </span>
            <span className="help-form__info">
              <FormattedMessage id="helpForm.finance.title2" />
            </span>
          </div>
          <div className="help-form__column-wrapper">
            <div className="help-form__column">
              <label htmlFor="name" className="help-form__text">
                <FormattedMessage id="helpForm.name" />
              </label>
              <input
                type="text"
                className="help-form__input"
                name="name"
                autoComplete="given-name"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                value={values.name}
              />
              {touched.name && errors.name && <div>{errors.name}</div>}
              <label htmlFor="surname" className="help-form__text">
                <FormattedMessage id="helpForm.surname" />
              </label>
              <input
                type="text"
                className="help-form__input"
                name="surname"
                autoComplete="family-name"
                id="surname"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                value={values.surname}
              />
              {touched.surname && errors.surname && <div>{errors.surname}</div>}
            </div>
            <div className="help-form__column">
              <label htmlFor="phone" className="help-form__text">
                <FormattedMessage id="helpForm.phoneNumber" />
              </label>
              <input
                type="phone"
                className="help-form__input"
                name="phone"
                autoComplete="tel"
                id="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                value={values.phone}
              />
              {touched.phone && errors.phone && <div>{errors.phone}</div>}
              <label htmlFor="email" className="help-form__text">
                <FormattedMessage id="helpForm.email" />
              </label>
              <input
                type="email"
                className="help-form__input"
                name="email"
                autoComplete="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                required
                value={values.email}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </div>
          </div>
          <div className="help-form__payment-details">
            <label htmlFor="purpose" className="help-form__text">
              <FormattedMessage id="helpForm.finance.form.purpose" />
            </label>
            <input
              type="text"
              className="help-form__input"
              name="purpose"
              id="purpose"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              value={values.purpose}
            />
            {touched.purpose && errors.purpose && <div>{errors.purpose}</div>}
          </div>
          <div className="help-form__sum">
            <span className="help-form__text help-form__text--sum">
              <FormattedMessage id="helpForm.finance.form.sum" />
            </span>
            <div className="help-form__sum-values">
              <div className="help-form__sum-pairs">
                <span className="help-form__sum-item">
                  <input
                    type="radio"
                    className="help-form__radio"
                    name="sum"
                    checked={values.sum === '50'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="50"
                    id="sum1"
                  />
                  <label htmlFor="sum1" className="help-form__sum-value">
                    <span className="help-form__sum-number">50</span>
                    <span className="help-form__sum-currency">
                      <FormattedMessage id="helpForm.finance.form.currency" />
                    </span>
                  </label>
                </span>
                <span className="help-form__sum-item">
                  <input
                    type="radio"
                    className="help-form__radio"
                    name="sum"
                    checked={values.sum === '100'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="100"
                    id="sum2"
                  />
                  <label htmlFor="sum2" className="help-form__sum-value">
                    <span className="help-form__sum-number">100</span>
                    <span className="help-form__sum-currency">
                      <FormattedMessage id="helpForm.finance.form.currency" />
                    </span>
                  </label>
                </span>
              </div>
              <div className="help-form__sum-pairs">
                <span className="help-form__sum-item">
                  <input
                    type="radio"
                    className="help-form__radio"
                    name="sum"
                    checked={values.sum === '200'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="200"
                    id="sum3"
                  />
                  <label htmlFor="sum3" className="help-form__sum-value">
                    <span className="help-form__sum-number">200</span>
                    <span className="help-form__sum-currency">
                      <FormattedMessage id="helpForm.finance.form.currency" />
                    </span>
                  </label>
                </span>
                <span className="help-form__sum-item">
                  <input
                    type="radio"
                    className="help-form__radio"
                    name="sum"
                    checked={values.sum === '500'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="500"
                    id="sum4"
                  />
                  <label htmlFor="sum4" className="help-form__sum-value">
                    <span className="help-form__sum-number">500</span>
                    <span className="help-form__sum-currency">
                      <FormattedMessage id="helpForm.finance.form.currency" />
                    </span>
                  </label>
                </span>
              </div>
              <span className="help-form__sum-item">
                <label htmlFor="sumOther" className="help-form__text">
                  <FormattedMessage id="helpForm.finance.form.otherSum" />
                </label>
                <input
                  type="number"
                  className="help-form__input help-form__input--sum"
                  min="0"
                  name="sum"
                  id="sumOther"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.sum}
                />
                <span className="help-form__sum-currency">
                  <FormattedMessage id="helpForm.finance.form.currency" />
                </span>
              </span>
            </div>
          </div>
          <div className="help-form__agreement">
            <input type="checkbox" className="help-form__check-agreement" id="formAgreement" name="formAgreement" value={values.formAgreement} />
            <label htmlFor="formAgreement" className="help-form__text">
              <FormattedMessage id="helpForm.finance.form.agreementPart1" />
              <Link className="help-form__agreement-link" to="/agreement">
                <FormattedMessage id="helpForm.finance.form.agreementLink" />
              </Link>
              <FormattedMessage id="helpForm.finance.form.agreementPart2" />
            </label>
          </div>
        </div>
        <div className="help-form__buttons">
          <button type="submit" className="help-form__button" disabled={isSubmitting}>
            <FormattedMessage id="helpForm.finance.form.buttonLiqpay" />
          </button>
          <button type="button" className="help-form__button" disabled={isSubmitting}>
            <FormattedMessage id="helpForm.finance.form.buttonReceipt" />
          </button>
        </div>
      </form>
    )}
  />
);

export default HelpFormFinance;
