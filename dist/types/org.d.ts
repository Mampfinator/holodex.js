import { OrgRaw } from './raw/org-raw';
/**
 * Derived from https://github.com/RiceCakess/Holodex
 *  MIT License
 *  Copyright (c) 2020 David Chen
 *
 * @see https://github.com/RiceCakess/Holodex/blob/8593a469593fbae45008270622e9b1bed785f47a/src/utils/consts.js#L25
 */
export declare const ORGS: Readonly<{
  all: string;
  hololive: string;
  nijisanji: string;
  'kizuna-ai': string;
  indie: string;
  vspo: string;
  vshojo: string;
  '774inc': string;
  '.live': string;
  noripro: string;
  react: string;
  voms: string;
  kamitsubaki: string;
  eilene: string;
  'hoshimeguri-gakuen': string;
  'riot-music': string;
  propro: string;
  wactor: string;
  'aogiri-highschool': string;
  masquerade: string;
  tsunderia: string;
  'yuni-create': string;
  'atelier-live': string;
  prism: string;
  'voice-ore': string;
  vivid: string;
  chukorara: string;
  'x-encount': string;
  marbl_s: string;
  iridori: string;
  'unreal-night-girls': string;
  'v-dimension.creators': string;
}>;
export declare class Org {
  private readonly raw;
  toRaw(): OrgRaw;
  get name(): string;
  get short(): string;
  get jpName(): string;
  constructor(raw: OrgRaw);
}
