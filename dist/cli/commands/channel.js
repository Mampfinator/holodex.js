import chalk from 'chalk';
import { channelLink, handlerFactory } from '../helpers';
const handler = handlerFactory({
  processor: async ({ getClient, argv }) => {
    const id = argv.id;
    const channel = await getClient().getChannel(id);
    return channel;
  },
  printer: (channel) => {
    console.log(channelLink(channel.channelId, channel.name));
    console.log(chalk.gray(channel.description?.slice(0, 120), '...'));
  },
});
const command = {
  command: 'channel <id>',
  describe: 'Get channel info',
  builder: (yargs) =>
    yargs.positional('id', {
      type: 'string',
      required: true,
      desc: 'Channel id',
    }),
  handler,
};
export default command;
//# sourceMappingURL=channel.js.map
