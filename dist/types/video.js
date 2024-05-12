import { Channel } from './channel';
import { Comment } from './comment';
import { Song } from './song';
export class Video {
  constructor(raw) {
    this.raw = raw;
    this.channel = new Channel(this.raw.channel);
    this.comments =
      this.raw.comments?.map((comment) => new Comment(comment)) ?? [];
    this.clips = this.raw.clips?.map((video) => new Video(video)) ?? [];
    this.sources = this.raw.sources?.map((video) => new Video(video)) ?? [];
    this.refers = this.raw.refers?.map((video) => new Video(video)) ?? [];
    this.simulcasts =
      this.raw.simulcasts?.map((video) => new Video(video)) ?? [];
    this.mentions =
      this.raw.mentions?.map((channel) => new Channel(channel)) ?? [];
    this.songs = this.raw.songs?.map((song) => new Song(song)) ?? [];
  }
  toRaw() {
    return this.raw;
  }
  /**
   * The unique ID of the video.
   */
  get videoId() {
    return this.raw.id;
  }
  /**
   * The video's title.
   */
  get title() {
    return this.raw.title;
  }
  /**
   * The type of video, whether it is a stream or a clip.
   */
  get videoType() {
    return this.raw.type;
  }
  /**
   * The internal topic ID of the video. Some videos, mostly clips, may not have a topic.
   */
  get topic() {
    return this.raw.topic_id;
  }
  /**
   * The date the video was published at.
   */
  get publishedAt() {
    return typeof this.raw.published_at === 'string'
      ? new Date(this.raw.published_at)
      : undefined;
  }
  /**
   * The date the video was made available. This takes on the first non-null value of {@link Video.publishedAt},
   * {@link Video.actualStart}, {@link Video.scheduledStart}, or {@link Video.actualEnd}.
   */
  get availableAt() {
    return typeof this.raw.available_at === 'string'
      ? new Date(this.raw.available_at)
      : undefined;
  }
  /**
   * The duration of the video.
   */
  get duration() {
    return this.raw.duration;
  }
  /**
   * The current status of the video on YouTube.
   */
  get status() {
    return this.raw.status;
  }
  /**
   * The date when the stream started. Used with {@link ExtraData.LiveInfo}
   */
  get scheduledStart() {
    return typeof this.raw.start_scheduled === 'string'
      ? new Date(this.raw.start_scheduled)
      : undefined;
  }
  /**
   * The date when the stream actually started. Used with {@link ExtraData.LiveInfo}
   */
  get actualStart() {
    return typeof this.raw.start_actual === 'string'
      ? new Date(this.raw.start_actual)
      : undefined;
  }
  /**
   * The date when the stream ended. Used with {@link ExtraData.LiveInfo}
   */
  get actualEnd() {
    return typeof this.raw.end_actual === 'string'
      ? new Date(this.raw.end_actual)
      : undefined;
  }
  /**
   * The number of people currently watching the stream. Used with {@link ExtraData.LiveInfo}
   */
  get liveViewers() {
    return this.raw.live_viewers;
  }
  /**
   * The description of the video. Used with {@link ExtraData.Description}
   */
  get description() {
    return this.raw.description;
  }
  /**
   * The number of tagged songs related to this video.
   */
  get songCount() {
    return this.raw.songcount;
  }
  /**
   * The channel ID the video creator.
   */
  get channelId() {
    return this.raw.channel_id ?? this.channel.channelId;
  }
}
//# sourceMappingURL=video.js.map
