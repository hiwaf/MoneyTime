import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import styles from "./styles";
import React, { useState, useEffect } from "react";
import { Timer } from "./components/Timer";

export default function App() {
	const [basicSalary, setBasicSalary] = useState("7500");
	const [dailyAllowance, setDailyAllowance] = useState("38.23");
	const [sectorPay, setSectorPay] = useState("38.23");
	const [start, setStart] = useState(false);
	const [reset, setReset] = useState(false);

	return (
		<ScrollView
			style={{
				flex: 1,
				paddingHorizontal: 20,
				backgroundColor: "#FFFFFF",
				paddingTop: 20,
				marginTop: 50
			}}
			contentContainerStyle={{ paddingBottom: 40 }}
		>
			<View>
				<Text style={styles.title}>How much money are you making?</Text>
			</View>
			<View style={styles.content}>
				<Text style={styles.subtitle}>
					What is the gracious Ryanair paying you in basic salary per
					month?
				</Text>
				<TextInput
					style={styles.textInput}
					keyboardType='numeric'
					placeholder={basicSalary}
					onChangeText={(text) => setBasicSalary(text)}
				/>

				<Text style={styles.subtitle}>
					What is the gracious Ryanair paying you in sector pay per
					hour?
				</Text>
				<TextInput
					style={styles.textInput}
					keyboardType='numeric'
					placeholder={sectorPay}
					onChangeText={(text) => setSectorPay(text)}
				/>

				<Timer
					start={start}
					stop={false}
					reset={reset}
					basicPay={basicSalary}
					sectorPay={sectorPay}
				/>

				<View
					style={{
						marginTop: 20,
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Text
						style={{
							fontSize: 16,
							color: "#666666",
							marginBottom: 20
						}}
					>
						Start the timer to see how much you are making
					</Text>
					<Pressable
						style={styles.button}
						onPress={() => {
							setStart(!start);
						}}
					>
						<Text style={styles.buttonText}>Start</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => {
							setReset(!reset);
						}}
					>
						<Text style={styles.buttonText}>Reset</Text>
					</Pressable>
				</View>
			</View>
		</ScrollView>
	);
}
