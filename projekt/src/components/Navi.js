import * as React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Mylogo from "../image/tlo.jpg";

const Logo = styled.div`
	width: 15px;
	height: 20px;
`;

// const Menu = styled.div`
// 	justify-content: flex-end;
// `;

function Navi() {
	return (
		<Box position="sticky"  sx={{ alignContent: "space-between" }}>
			<AppBar position="sticky">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 8 }}
					></IconButton>
					<div>
						<Typography>
							<Logo>
								<img src={Mylogo} className="logo" alt="logo" />
							</Logo>
						</Typography>
					</div>

					<Link to="/omnie">
						<Button color="inherit">O mnie</Button>
					</Link>
					<Link to="/stoper">
						<Button color="inherit">stoper</Button>
					</Link>
					<Link to="/licznik">
						<Button color="inherit">licznik</Button>
					</Link>
					<Link to="/listapostaci">
						<Button color="inherit">lista postaci</Button>
					</Link>
					<Link to="/rejestracja">
						<Button color="inherit">rejestrecja</Button>
					</Link>
					<Link to="/logowanie">
						<Button color="inherit">logowanie</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navi;
