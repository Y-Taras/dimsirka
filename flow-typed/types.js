// @flow

type Image = {
  id: number,
  imageable_type: string,
  imageable_id: number,
  file: {
    url: string,
    thumb: {
      url: string
    }
  },
  hint: string | null,
  alt: string | null,
  created_at: string,
  updated_at: string,
  primary: boolean
};

export type Content = {
  id: number,
  type: string,
  attributes: {
    image: Image,
    title: string,
    'short-description': string,
    description: string,
    'category-id': number
  },
  urlPrefix?: string
};

type Posts = Array<Content>;

export type PostListData = {
  data: Posts,
  links: {
    self: string,
    next: string,
    last: string
  }
};

export type Post = {
  id: string,
  type: string,
  attributes: {
    image: Image,
    title: string,
    'short-description': string,
    description: string,
    'category-id': number
  }
};

export type RandomAnimal = {
  id: string,
  type: string,
  attributes: {
    name: string,
    images: Image[],
    statuses: any[],
    amount: string,
    age: string,
    gender: string,
    sterilization: string,
    breed: string
  }
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare type ActionType = 'ADD_POST_DATA' | 'ADD_POSTLIST_DATA';

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action = ActionT<'ADD_POST_DATA', Post> | ActionT<'ADD_POSTLIST_DATA', Array<Post>>;

declare var CSS: {
  supports(propertyName: string, value: string): boolean
};

export type InnerFromProps = {
  dirty: boolean,
  isValid: boolean,
  // Formik state and state helpers
  values: Values,
  setValues: (values: Values) => void,
  setFieldValue: <K: $Keys<Values>>(field: K, value: any) => void,

  errors: $ObjMap<Values, <K>(k: K) => ?string>,
  setErrors: (errors: { [key: $Keys<Values>]: string }) => void,
  setFieldError: <K: $Keys<Values>>(field: K, message: string) => void,

  touched: $ObjMap<Values, <K>(k: K) => boolean | void>,
  setTouched: (touched: { [key: $Keys<Values>]: boolean }) => void,
  setFieldTouched: <K: $Keys<Values>>(field: K, isTouched?: boolean) => void,

  isSubmitting: boolean,
  setSubmitting: (isSubmitting: boolean) => void,

  status?: any,
  setStatus: (status: any) => void,

  resetForm: (nextProps?: Enhanced) => void,
  submitForm: () => void,

  // FormikHandlers

  handleSubmit: (e: SyntheticEvent<EventTarget>) => void,
  handleChange: (e: SyntheticEvent<EventTarget>) => void,
  handleChangeValue: (name: string, value: any) => void,
  handleBlur: (e: SyntheticEvent<EventTarget>) => void,
  handleReset: () => void
};
