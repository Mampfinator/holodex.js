export class Comment {
  constructor(raw) {
    this.raw = raw;
  }
  /**
   * The unique key associated with the comment.
   */
  get key() {
    return this.raw.comment_key;
  }
  /**
   * The video ID the comment is linked to.
   */
  get videoId() {
    return this.raw.video_id;
  }
  /**
   * The message content of the comment. Usually contains timestamps.
   */
  get content() {
    return this.raw.message;
  }
}
//# sourceMappingURL=comment.js.map
