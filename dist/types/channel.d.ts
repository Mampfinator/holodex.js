import { ChannelType } from './enums/channel-type';
import { ChannelRaw } from './raw/channel-raw';
export declare class Channel {
  private raw;
  toRaw(): ChannelRaw;
  /**
   * The unique ID of the channel.
   */
  get channelId(): string;
  /**
   * The channel's name.
   */
  get name(): string;
  /**
   * The channel's name in English, if it has one.
   */
  get englishName(): string;
  /**
   * The type of the channel, either vtuber or subber.
   */
  get channelType(): ChannelType;
  /**
   * The channel's organization. Mainly used for VTubers only.
   */
  get organization(): string;
  /**
   * The channel's group/suborganization. Mainly used for VTubers only, that allows them to be sorted internally.
   */
  get group(): string;
  get sortKey(): string;
  /**
   * The internal URL of the channel's profile picture.
   */
  get avatarUrl(): string;
  /**
   * The internal URL of the channel's channel banner.
   */
  get bannerUrl(): string;
  /**
   * The channel's Twitter handle, if they have one.
   */
  get twitterName(): string;
  /**
   * The number of videos the channel has uploaded.
   */
  get videoCount(): number;
  /**
   * The estimated amount of subscribers the channel has.
   */
  get subscriberCount(): number;
  /**
   * The total number of views the channel has.
   */
  get viewCount(): number;
  /**
   * The total number of clips associated with this channel. Mainly used for VTubers only.
   */
  get clipCount(): number;
  /**
   * The language of the channel. Mainly used for Subbers only.
   */
  get language(): string;
  /**
   * The date this channel was created.
   */
  get createdAt(): Date;
  /**
   * Whether or not the channel has been marked as inactive.
   */
  get isInactive(): boolean;
  /**
   * The channel's description on YouTube.
   */
  get description(): string;
  constructor(raw: ChannelRaw);
}
