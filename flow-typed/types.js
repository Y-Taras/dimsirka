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
  data: {
    id: string,
    type: string,
    attributes: {
      image: Image,
      title: string,
      'short-description': string,
      description: string,
      'category-id': number
    }
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
  supports(propertyName: string, value: string) : boolean
};
