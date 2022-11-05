import { View, StyleSheet, AppState, Text } from "react-native";
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

// a timer that counts up when user presses start
export const Timer = ({ start, stop, reset, basicPay, sectorPay }) => {
	const [time, setTime] = useState(0);
	const [appState, setAppState] = useState(AppState.currentState);

	const formatTime = (time) => {
		const basicPayPerMillisecond =
			Number(basicPay) / 1000 / 60 / 60 / 24 / 30;
		const sectorPayPerMillisecond = Number(sectorPay) / 1000 / 60 / 60;
		const totalPayPerMillisecond =
			basicPayPerMillisecond + sectorPayPerMillisecond;
		const totalPayPerSecond = totalPayPerMillisecond * 1000;

		return `
            ${(time * totalPayPerSecond).toFixed(4)} €
        `;
	};

	useEffect(() => {
		let interval = null;
		if (start) {
			interval = setInterval(() => {
				setTime((time) => time + 0.01);
			}, 10);
		} else if (!start && time !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [start]);

	useEffect(() => {
		if (stop) {
			setTime(0);
		}
	}, [stop]);

	useEffect(() => {
		if (reset) {
			setTime(0);
		}
	}, [reset]);

	useEffect(() => {
		const handleAppStateChange = (nextAppState) => {
			if (
				appState.match(/inactive|background/) &&
				nextAppState === "active"
			) {
				console.log("App has come to the foreground!");
			}
			setAppState(nextAppState);
		};
		const subscription = AppState.addEventListener(
			"change",
			handleAppStateChange
		);
		return () => {
			subscription.remove();
		};
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{formatTime(time)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		fontSize: 48,
		fontWeight: "bold",
		color: "#118C4F"
	}
});
