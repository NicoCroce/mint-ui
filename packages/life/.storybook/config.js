import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import '@storybook/addon-console';
import { withConsole } from '@storybook/addon-console';
import requireContext from 'require-context.macro';
import StoryBookWrapper from "../src/storybook.setup";

addParameters({
  options: {
    name: "TM Life",
    url: "https://mint-ui.netlify.com",
    showAddonPanel:false
  }
})

addDecorator(withA11y);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// automatically import all files ending in *.stories.tsx
const req = requireContext('../src/', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);