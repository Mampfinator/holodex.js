import { SongRaw } from './raw/song-raw';
export declare class Song {
  private raw;
  /**
   * The URL of the cover art.
   */
  get artUrl(): string;
  /**
   * The name of the song.
   */
  get name(): string;
  /**
   * The time in the associated {@link Video} where the song began.
   */
  get startTime(): number;
  /**
   * The time in the associated {@link Video} where the song ended.
   */
  get endTime(): number;
  /**
   * The unique ID of the song on iTunes, if it is on iTunes.
   */
  get iTunesId(): number;
  /**
   * The original artist who created/sang the song.
   */
  get artist(): string;
  constructor(raw: SongRaw);
}
