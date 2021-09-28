import styled from "styled-components";
import * as React from "react";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState, useEffect } from "react";

const Header = styled.form`
	margin-top: 10%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`;
const ButtonClick = styled.form`
	margin-top: 10%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`;

function Rejestracja() {
	const [users, setUsers] = useState(null);
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3000/users").then((res) => {
			setUsers(res.data);
		});
	}, []);

	const changeName = (event) => setName(event.target.value);
	const changeSurname = (event) => setSurname(event.target.value);
	const changeEmail = (event) => setEmail(event.target.value);
	const changePassword = (event) => setPassword(event.target.value);

	const DodajOsobe = (users) => {
		const example = {
			name: name,
			surname: surname,
			email: email,
			password: password,
		};

		axios.post(`http://localhost:3000/users`, example);
	};

	return (
		<from>
			<Header>
				<Box
					component="form"
					sx={{
						"& .MuiTextField-root": { m: 1, width: "25ch" },
					}}
					noValidate
					autoComplete="off"
				>
					<div>
						<TextField
							Name
							id="Name"
							label="Name"
							onChange={changeName}
						/>
						<TextField
							secondName
							id="secondName"
							label="secondName"
							onChange={changeSurname}
						/>
						<TextField
							Password
							id="password"
							label="Password"
							type="password"
							onChange={changePassword}
						/>
						<TextField
							Email
							id="email"
							label="e-mail"
							onChange={changeEmail}
						/>
					</div>
				</Box>
			</Header>
			<ButtonClick>
				<Button
					onClick={DodajOsobe}
					variant="contained"
					disableElevation
				>
					Zarejestruj
				</Button>
			</ButtonClick>
		</from>
	);
}

export default Rejestracja;
