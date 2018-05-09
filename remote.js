const commandName = process.argv[2] ? process.argv[2] : 'help';
const firstArg = process.argv[3];
const secondArg = process.argv[4];

const remote = {
    commands: {
        help: {
            description: 'Shows this help message. Same as typing npm remote',
            action: function() {
				console.log('\n*****************************************************************************************\nRemote commands can be run by typing the following in the console:\nnpm remote DESIRED_COMMAND_NAME \n');
				console.log('Example: npm remote L649ToBasket');
				console.log('\nSome commands require additional arguments to run. For example: npm remote login 1111 2222');
				console.log('\nLIST OF AVAILABLE COMMANDS:\n');
                for (var prop in remote.commands) {
                    console.log(prop + " - " + remote.commands[prop].description);
                }
				console.log('*****************************************************************************************');
            }
        },

        login: {
            description: 'Triggers clerk login. Must pass arguments for clerkId and password respectively',
            action: function() {
                console.log('I am logging you in...');
            }
        }
    }
};

const selectedCommand = remote.commands[commandName];


selectedCommand ? selectedCommand.action() : console.log('Unable to find scenario with given name - ' + commandName);