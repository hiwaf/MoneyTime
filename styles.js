import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		paddingVertical: 48,
		paddingHorizontal: 18,
		backgroundColor: "#F5F8F6",
		marginTop: 24,
		alignItems: "center",
		justifyContent: "center"
	},
	title: {
		fontSize: 20,
		fontWeight: "bold"
	},
	subtitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 12
	},
	text: {
		fontSize: 16
	},
	textInput: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 4,
		padding: 8,
		width: 200,
		marginBottom: 12,
		backgroundColor: "#fff",
		marginBottom: 40
	},

	button: {
		backgroundColor: "#118C4F",
		padding: 12,
		borderRadius: 4,
		marginVertical: 12,
		width: 200
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center"
	},

	content: {
		marginTop: 12,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	}
});
