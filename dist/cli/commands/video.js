import chalk from 'chalk';
import { handlerFactory, videoLink } from '../helpers';
const handler = handlerFactory({
  processor: async ({ getClient, argv }) => {
    const id = argv.id;
    const video = await getClient().getVideo(id);
    return video;
  },
  printer: (video) => {
    console.log(videoLink(video.videoId, video.title));
    console.log(chalk.gray(video.description?.slice(0, 120), '...'));
  },
});
const command = {
  command: 'video <id>',
  describe: 'Get video info',
  builder: (yargs) =>
    yargs.positional('id', {
      type: 'string',
      required: true,
      desc: 'video id',
    }),
  handler,
};
export default command;
//# sourceMappingURL=video.js.map
