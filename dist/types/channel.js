export class Channel {
  constructor(raw) {
    this.raw = raw;
  }
  toRaw() {
    return this.raw;
  }
  /**
   * The unique ID of the channel.
   */
  get channelId() {
    return this.raw.id;
  }
  /**
   * The channel's name.
   */
  get name() {
    return this.raw.name;
  }
  /**
   * The channel's name in English, if it has one.
   */
  get englishName() {
    return this.raw.english_name;
  }
  /**
   * The type of the channel, either vtuber or subber.
   */
  get channelType() {
    return this.raw.type;
  }
  /**
   * The channel's organization. Mainly used for VTubers only.
   */
  get organization() {
    return this.raw.org;
  }
  /**
   * The channel's group/suborganization. Mainly used for VTubers only, that allows them to be sorted internally.
   */
  get group() {
    return this.raw.group ?? this.raw.suborg?.substr(2);
  }
  get sortKey() {
    return this.raw.suborg ?? this.group ?? this.organization ?? this.name;
  }
  /**
   * The internal URL of the channel's profile picture.
   */
  get avatarUrl() {
    return this.raw.photo;
  }
  /**
   * The internal URL of the channel's channel banner.
   */
  get bannerUrl() {
    return this.raw.banner;
  }
  /**
   * The channel's Twitter handle, if they have one.
   */
  get twitterName() {
    return this.raw.twitter;
  }
  /**
   * The number of videos the channel has uploaded.
   */
  get videoCount() {
    return typeof this.raw.video_count === 'string'
      ? Number(this.raw.video_count)
      : this.raw.video_count;
  }
  /**
   * The estimated amount of subscribers the channel has.
   */
  get subscriberCount() {
    return typeof this.raw.subscriber_count === 'string'
      ? Number(this.raw.subscriber_count)
      : this.raw.subscriber_count;
  }
  /**
   * The total number of views the channel has.
   */
  get viewCount() {
    return typeof this.raw.view_count === 'string'
      ? Number(this.raw.view_count)
      : this.raw.view_count;
  }
  /**
   * The total number of clips associated with this channel. Mainly used for VTubers only.
   */
  get clipCount() {
    return typeof this.raw.clip_count === 'string'
      ? Number(this.raw.clip_count)
      : this.raw.clip_count;
  }
  /**
   * The language of the channel. Mainly used for Subbers only.
   */
  get language() {
    return this.raw.lang;
  }
  /**
   * The date this channel was created.
   */
  get createdAt() {
    return typeof this.raw.published_at === 'string'
      ? new Date(this.raw.published_at)
      : undefined;
  }
  /**
   * Whether or not the channel has been marked as inactive.
   */
  get isInactive() {
    return this.raw.inactive;
  }
  /**
   * The channel's description on YouTube.
   */
  get description() {
    return this.raw.description;
  }
}
//# sourceMappingURL=channel.js.map
