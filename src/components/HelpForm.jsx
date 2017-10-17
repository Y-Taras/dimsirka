import React from 'react';
import { FormattedMessage } from 'react-intl';
import { withFormik } from 'formik';

// Our inner form component which receives our form's state and updater methods as props
const InnerForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
  <form onSubmit={handleSubmit} autoComplete="on">
    <div className="helpForm__column">
      <span className="helpForm__info">
        <FormattedMessage id="helpForm.finance.title1" />
      </span>
      <label htmlFor="name" className="helpForm__text">
        <FormattedMessage id="helpForm.name" />
      </label>
      <input
        type="text"
        name="name"
        autoComplete="given-name"
        id="name"
        onChange={handleChange}
        onBlur={handleBlur}
        required
        value={values.name}
      />
      {touched.name && errors.name && <div>{errors.name}</div>}
      <label htmlFor="surname" className="helpForm__text">
        <FormattedMessage id="helpForm.surname" />
      </label>
      <input
        type="text"
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
    <div className="helpForm__column">
      <span className="helpForm__info">
        <FormattedMessage id="helpForm.finance.title2" />
      </span>
      <label htmlFor="phone" className="helpForm__text">
        <FormattedMessage id="helpForm.phoneNumber" />
      </label>
      <input
        type="phone"
        name="phone"
        autoComplete="tel"
        id="phone"
        onChange={handleChange}
        onBlur={handleBlur}
        required
        value={values.phone}
      />
      {touched.phone && errors.phone && <div>{errors.phone}</div>}
      <label htmlFor="email" className="helpForm__text">
        <FormattedMessage id="helpForm.email" />
      </label>
      <input
        type="email"
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
    <div className="helpForm__payment-details">
      <label htmlFor="purpose" className="helpForm__text">
        <FormattedMessage id="helpForm.finance.form.purpose" />
      </label>
      <input
        type="text"
        name="purpose"
        id="purpose"
        onChange={handleChange}
        onBlur={handleBlur}
        required
        value={values.purpose}
      />
      {touched.purpose && errors.purpose && <div>{errors.purpose}</div>}
    </div>
    <div className="helpForm__sum">
      <span className="helpForm__text">
        <FormattedMessage id="helpForm.finance.form.sum" />
      </span>
      <span className="helpForm__row1">
        <input
          type="radio"
          className="helpForm__radio"
          name="sum"
          checked={values.sum === '50'}
          onChange={handleChange}
          onBlur={handleBlur}
          value="50"
          id="sum1"
        />
        <label htmlFor="sum1" className="helpForm__sum-value">
          <span>50</span>
          <span>
            <FormattedMessage id="helpForm.finance.form.currency" />
          </span>
        </label>
        <input
          type="radio"
          className="helpForm__radio"
          name="sum"
          checked={values.sum === '100'}
          onChange={handleChange}
          onBlur={handleBlur}
          value="100"
          id="sum2"
        />
        <label htmlFor="sum2" className="helpForm__sum-value">
          <span>100</span>
          <span>
            <FormattedMessage id="helpForm.finance.form.currency" />
          </span>
        </label>
        <input
          type="radio"
          className="helpForm__radio"
          name="sum"
          checked={values.sum === '200'}
          onChange={handleChange}
          onBlur={handleBlur}
          value="200"
          id="sum3"
        />
        <label htmlFor="sum3" className="helpForm__sum-value">
          <span>200</span>
          <span>
            <FormattedMessage id="helpForm.finance.form.currency" />
          </span>
        </label>
      </span>
      <span className="helpForm__row2">
        <input
          type="radio"
          className="helpForm__radio"
          name="sum"
          checked={values.sum === '200'}
          onChange={handleChange}
          onBlur={handleBlur}
          value="500"
          id="sum4"
        />
        <label htmlFor="sum4" className="helpForm__sum-value">
          <span>500</span>
          <span>
            <FormattedMessage id="helpForm.finance.form.currency" />
          </span>
        </label>
        <label htmlFor="sumOther" className="helpForm__text">
          <FormattedMessage id="helpForm.finance.form.otherSum" />
        </label>
        <input
          type="number"
          className="helpForm__radio"
          min="0"
          name="sum"
          id="sumOther"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.sum}
        />
      </span>
    </div>
    <button type="submit" disabled={isSubmitting}>
      <FormattedMessage id="helpForm.finance.form.buttonLiqpay" />
    </button>
    <button type="button" disabled={isSubmitting}>
      <FormattedMessage id="helpForm.finance.form.buttonReceipt" />
    </button>
  </form>
);

// Wrap our form with the using withFormik HoC
const HelpForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ name: '', surname: '', phone: '', email: '', purpose: '', sum: 0 }),
  // Submission handler
  handleSubmit: (values, { props, setSubmitting, setErrors /* setValues, setStatus, and other goodies */ }) => {
    console.log({ props });
  }
})(InnerForm);
export default HelpForm;
