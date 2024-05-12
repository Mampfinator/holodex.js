import { Channel } from './channel';
import { Comment } from './comment';
import { VideoRaw } from './raw/video-raw';
import { Song } from './song';
export declare class Video {
  private raw;
  toRaw(): VideoRaw;
  /**
   * The unique ID of the video.
   */
  get videoId(): string;
  /**
   * The video's title.
   */
  get title(): string;
  /**
   * The type of video, whether it is a stream or a clip.
   */
  get videoType(): import('./enums').VideoType;
  /**
   * The internal topic ID of the video. Some videos, mostly clips, may not have a topic.
   */
  get topic(): string;
  /**
   * The date the video was published at.
   */
  get publishedAt(): Date;
  /**
   * The date the video was made available. This takes on the first non-null value of {@link Video.publishedAt},
   * {@link Video.actualStart}, {@link Video.scheduledStart}, or {@link Video.actualEnd}.
   */
  get availableAt(): Date;
  /**
   * The duration of the video.
   */
  get duration(): number;
  /**
   * The current status of the video on YouTube.
   */
  get status(): import('./enums').VideoStatus;
  /**
   * The date when the stream started. Used with {@link ExtraData.LiveInfo}
   */
  get scheduledStart(): Date;
  /**
   * The date when the stream actually started. Used with {@link ExtraData.LiveInfo}
   */
  get actualStart(): Date;
  /**
   * The date when the stream ended. Used with {@link ExtraData.LiveInfo}
   */
  get actualEnd(): Date;
  /**
   * The number of people currently watching the stream. Used with {@link ExtraData.LiveInfo}
   */
  get liveViewers(): number;
  /**
   * The description of the video. Used with {@link ExtraData.Description}
   */
  get description(): string;
  /**
   * The number of tagged songs related to this video.
   */
  get songCount(): number;
  /**
   * The channel ID the video creator.
   */
  get channelId(): string;
  /**
   * The {@link Channel} object of the video creator.
   */
  readonly channel: Channel;
  /**
   * A list of comments on this video, usually with timestamps. Used when searching for a specific video.
   */
  readonly comments: Readonly<Comment[]>;
  /**
   * A list of clips related to this video. Used with {@link ExtraData.Clips}
   */
  readonly clips: Readonly<Video[]>;
  /**
   * A list of sources for videos uploaded by Subbers. Used with {@link ExtraData.Sources}. Has no effect on VTubers.
   */
  readonly sources: Readonly<Video[]>;
  /**
   * A list of videos that are referred by this video. Used with {@link ExtraData.Refers}
   */
  readonly refers: Readonly<Video[]>;
  /**
   * A list of videos that are simulcast on another channel. Used with {@link ExtraData.Simulcasts}
   */
  readonly simulcasts: Readonly<Video[]>;
  /**
   * A list of channels that are mentioned by this video. Used with {@link ExtraData.Mentions}
   */
  readonly mentions: Readonly<Channel[]>;
  /**
   * A list of songs used in this video. Used with {@link ExtraData.Songs}
   */
  readonly songs: Readonly<Song[]>;
  constructor(raw: VideoRaw);
}
