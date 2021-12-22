import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withConsole } from '@storybook/addon-console';
import '@storybook/addon-console';

addDecorator(withKnobs);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({
	panelExclude: [],
});
