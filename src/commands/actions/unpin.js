module.exports = {
	name: 'unpin',
	description: 'Unpin a message',
	category: 'actions',
	permLevel: 'User',
	guildOnly: false,
	dmOnly: false,
	args: false,
	noArgs: false,
	async execute(message, args) {
		const [reaction, user] = args;
		if(reaction.count == 0)
		{
			reaction.message.unpin().catch(console.error);
		}
	},
};
