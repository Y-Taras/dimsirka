// @flow

export type PostListItem = {
  articleId: string,
  author: string,
  datePublished: string,
  datemodified: string,
  headline: string,
  articleSection: string,
  image: any
};

export type Post = {
  articleId: string,
  author: string,
  datePublished: string,
  datemodified: string,
  headline: string,
  articleBody: string
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

export type Action = ActionT<'ADD_POST_DATA', Array<Post>> | ActionT<'ADD_POSTLIST_DATA', Array<PostListItem>>;
