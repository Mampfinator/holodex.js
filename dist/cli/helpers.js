import chalk from 'chalk';
import Conf from 'conf';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import terminalLink from 'terminal-link';
import { HolodexApiClient } from '..';
import { ORGS } from '../types/org';
dayjs.extend(relativeTime);
export function handlerFactory({ processor, printer = console.log }) {
  return async (argv) => {
    const formatJSON = argv.json;
    const config = new Conf({
      projectName: 'holodex',
    });
    const getClient = getClientFactory(config);
    const context = { getClient, argv, config };
    const response = await Promise.resolve(processor(context));
    if (formatJSON) {
      if (typeof response === 'string') {
        console.log(response);
      } else if (Array.isArray(response)) {
        printAsJson(response.map((r) => r.toRaw()));
      } else {
        printAsJson(response.toRaw());
      }
      return;
    }
    printer(response);
  };
}
export function getClientFactory(config) {
  return () => {
    const apiKey = process.env.HOLODEX_APIKEY || config.get('token');
    if (!apiKey) {
      console.log(chalk.red(`$ holodex config token <apiKey>`));
      process.exit(1);
    }
    return new HolodexApiClient({ apiKey });
  };
}
export function resolveOrg(scope) {
  return ORGS[scope] || ORGS['all'];
}
export function fromNow(date) {
  return dayjs(date).fromNow();
}
export function printAsJson(obj) {
  console.log(JSON.stringify(obj, null, 2));
}
export function videoLink(videoId, title) {
  const ytURL = `https://www.youtube.com/watch?v=${videoId}`;
  return terminalLink(chalk.cyan.bold(title), ytURL);
}
export function channelLink(channelId, title) {
  const ytURL = `https://www.youtube.com/channel/${channelId}`;
  return terminalLink(chalk.cyan.bold(title), ytURL);
}
//# sourceMappingURL=helpers.js.map
