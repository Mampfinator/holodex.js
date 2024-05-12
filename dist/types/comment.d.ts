import { CommentRaw } from './raw/comment-raw';
export declare class Comment {
  private raw;
  /**
   * The unique key associated with the comment.
   */
  get key(): string;
  /**
   * The video ID the comment is linked to.
   */
  get videoId(): string;
  /**
   * The message content of the comment. Usually contains timestamps.
   */
  get content(): string;
  constructor(raw: CommentRaw);
}
