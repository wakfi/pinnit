module.exports = {
	name: 'pin',
	description: 'Pin a message',
	category: 'actions',
	permLevel: 'User',
	guildOnly: false,
	dmOnly: false,
	args: false,
	noArgs: false,
	async execute(message, args) {
		const [reaction, user] = args;
		if(reaction.count == 1)
		{
			reaction.message.pin().catch(console.error);
		}
	},
};
