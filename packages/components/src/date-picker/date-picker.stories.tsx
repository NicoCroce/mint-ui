import * as React from "react";
import moment from "moment";
import { DatePicker } from "./index";
import styled from "styled-components";
import { GlobalStyles } from "../app";
import COLORS from "../__utils/colors";

export default {
	title: "DatePicker",
	component: DatePicker
};

export const Default = () => {
	let [value, updateValue] = React.useState<moment.Moment>(moment());
	return (
		<DateSelectorWrapper>
			<DatePicker
				value={value}
				onChange={(val: moment.Moment) => updateValue(val)}
			/>

			<div
				style={{
					paddingBottom: "5px",
					margin: "15px 2px",
					width: "209px",
					border: "solid 2px",
					borderColor: "transparent",
					borderBottomColor: COLORS.PRIMARY
				}}
			>
				<span>Selected Date : {value.format("DD MMM YYYY")}</span>
			</div>
		</DateSelectorWrapper>
	);
};

export const MinMax = () => {
	let [date, updateDate] = React.useState<moment.Moment>(moment());
	return (
		<DateSelectorWrapper>
			<DatePicker
				value={date}
				onChange={updateDate}
				minDate={moment().subtract(1, "year")}
				maxDate={moment().add(1, "years")}
			/>
		</DateSelectorWrapper>
	);
};

export const disabled = () => {
	return (
		<DateSelectorWrapper>
			<DatePicker value={moment()} disabled={true} />
		</DateSelectorWrapper>
	);
};

export const CustomHeaderStyle = () => {
	return (
		<DateSelectorWrapper>
			<DatePicker
				value={moment()}
				headerStyles={{
					backgroundColor: "#475577",
					color: "#475577"
				}}
				navigationStyles={{
					color: "white",
					fontSize: "13px"
				}}
			/>
		</DateSelectorWrapper>
	);
};

// Styled Wrapper
const DateSelectorWrapper = styled.div`
	${GlobalStyles};
	height: 250px;
`;
