import chalk from 'chalk';
import { ORGS } from '../../types/org';
import { fromNow, handlerFactory, resolveOrg, videoLink } from '../helpers';
const handler = handlerFactory({
  processor: async ({ getClient, argv }) => {
    const org = resolveOrg(argv.scope);
    const videos = await getClient().getLiveVideos({ org });
    return videos;
  },
  printer: (videos) => {
    for (const video of videos) {
      console.log(videoLink(video.videoId, video.title));
      console.log(chalk.gray(fromNow(video.scheduledStart)));
    }
  },
});
const command = {
  command: 'live [scope]',
  describe: 'Get live streams',
  builder: (yargs) =>
    yargs.positional('scope', {
      type: 'string',
      default: 'all',
      desc: 'Search scope',
      choices: Object.keys(ORGS),
    }),
  handler,
};
export default command;
//# sourceMappingURL=live.js.map
