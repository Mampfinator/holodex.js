export class Song {
  constructor(raw) {
    this.raw = raw;
  }
  /**
   * The URL of the cover art.
   */
  get artUrl() {
    return this.raw.art;
  }
  /**
   * The name of the song.
   */
  get name() {
    return this.raw.name;
  }
  /**
   * The time in the associated {@link Video} where the song began.
   */
  get startTime() {
    return this.raw.start;
  }
  /**
   * The time in the associated {@link Video} where the song ended.
   */
  get endTime() {
    return this.raw.end;
  }
  /**
   * The unique ID of the song on iTunes, if it is on iTunes.
   */
  get iTunesId() {
    return this.raw.itunesid;
  }
  /**
   * The original artist who created/sang the song.
   */
  get artist() {
    return this.raw.original_artist;
  }
}
//# sourceMappingURL=song.js.map
