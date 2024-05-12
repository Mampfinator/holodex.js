import {
  Channel,
  ChannelsParam,
  ChannelVideosParam,
  Options,
  Video,
  VideoSearchType,
  VideosParam,
  Org,
} from './types';
export declare class HolodexApiClient {
  private httpClient;
  constructor(options: Options);
  /**
   * Retrieves a list of channels that match the given parameters.
   * @param params See {@link ChannelsParam}
   */
  getChannels(params?: ChannelsParam): Promise<Channel[]>;
  /**
   * Retrieves a single channel.
   * @param channelId ID of the Youtube Channel that is being queried
   */
  getChannel(channelId: string): Promise<Channel>;
  /**
   * A simplified endpoint for access channel specific data.
   * @param channelId ID of the Youtube Channel that is being queried
   * @param searchType The type of video resource to fetch. `clips` finds clip videos of a vtuber channel, `videos` finds the channelId channel's uploads, and `collabs` finds videos uploaded by other channels that mention this channelId
   * @param params See {@link ChannelVideosParam}
   */
  getVideosByChannelId(
    channelId: string,
    searchType?: VideoSearchType,
    params?: ChannelVideosParam,
  ): Promise<Video[]>;
  /**
   * Retrieves a video object.
   * @param videoId ID of a Youtube Video
   * @param includeComments if true then will reply with timestamp comments for this video
   * @param languages A comma separated list of language codes to filter channels/clips, official streams do not follow this parameter
   */
  getVideo(
    videoId: string,
    includeComments?: boolean,
    languages?: string[] | string,
  ): Promise<Video>;
  /**
   * This endpoint is similar to the /live endpoint and usually replies much faster. It is more friendly in general. The cost to execute a lookup is significantly cheaper. It's unfortunately less customizable as a result.
   *
   * We recommends using this if you have a fixed set of channel IDs to look up status for.
   *
   * @param channelIds comma separated Youtube Channel IDs
   */
  getLiveVideosByChannelId(channelIds: string | string[]): Promise<Video[]>;
  /**
   * Retrieve all live streams for the given paramaters.
   *
   * This is somewhat similar to calling `getVideos`, but this endpoint imposes default values on the query parameters.
   *
   * @param params See {@link VideosParam}
   */
  getLiveVideos(params?: VideosParam): Promise<Video[]>;
  /**
   * Retrieve videos matching the given parameters.
   *
   * @param params See {@link VideosParam}
   */
  getVideos(params?: VideosParam): Promise<Video[]>;
  /**
   * Retrieve all available organizations.
   *
   * This is a **static** endpoint, and therefore doesn't need an API key.
   * This method is also available as an instance method.
   */
  static getOrgs(): Promise<Org[]>;
  /**
   * Retrieve all available organizations.
   *
   * This is a **static** endpoint, and therefore doesn't need an API key.
   * This method is also available as a static method.
   */
  getOrgs(): Promise<Org[]>;
}
