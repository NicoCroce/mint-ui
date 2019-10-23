import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./index";

import { StoryWrapper } from "../storybook.setup";

const stories = storiesOf("Input", module);

stories.add("empty input", () => (
	<StoryWrapper>
		<Input
			type="text"
			placeholder="Enter text"
			value=""
		/>
	</StoryWrapper>
));

stories.add("text", () => (
	<StoryWrapper>
		<Input
			type="text"
			placeholder="Enter text"
			value="some value"
		/>
	</StoryWrapper>
));

stories.add("password", () => (
	<StoryWrapper>
		<Input
			type="password"
			placeholder="Enter password"
			value="Test value"
		/>
	</StoryWrapper>
));

stories.add("number", () => (
	<StoryWrapper>
		<Input
			type="number"
			value={10}
		/>
	</StoryWrapper>
));
