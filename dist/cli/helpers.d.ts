import Conf from 'conf';
import { HolodexApiClient } from '..';
declare type ToRawable =
  | {
      toRaw: () => any;
    }
  | {
      toRaw: () => any;
    }[];
declare type Context = {
  getClient: () => HolodexApiClient;
  argv: any;
  config: Conf<Config>;
};
declare type Processor<T> = (context: Context) => Promise<T> | T;
interface Config {
  token?: string;
}
export declare function handlerFactory<
  P extends Processor<T>,
  T extends ToRawable | string,
>({
  processor,
  printer,
}: {
  processor: P;
  printer?: (response: T) => void;
}): (argv: any) => Promise<void>;
export declare function getClientFactory(
  config: Conf<Config>,
): () => HolodexApiClient;
export declare function resolveOrg(scope: string): string;
export declare function fromNow(date: Date | undefined): string;
export declare function printAsJson(obj: any): void;
export declare function videoLink(videoId: string, title: string): string;
export declare function channelLink(channelId: string, title: string): string;
export {};
