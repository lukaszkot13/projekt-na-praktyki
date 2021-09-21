import styled from "styled-components";
import {
	makeStyles,
	Typography,
	TextField,
	Box,
	Button,
} from "@material-ui/core";

import MyLogo from "../image/tlo_omnie.jpg";

const Container = styled.div`
	background-image: url(${MyLogo});
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 120vh;
	width: 100%;
`;
const useStyles = makeStyles({
	page: {
		display: "column",
		alignSelf: "center",
		// justifyContent: "center",
		// alignItems: "center",
		marginTop: "10%",
		marginLeft: "5%",
		marginRight: "5%",
	},

	szukaj: {
		width: 300,
		height: 60,
		maxWidth: "100%",
		display: "flex",
	},
	button: {
		width: 300,
		height: 50,
	},
});

function MPage() {
	const classes = useStyles();
	return (
		<div>
			<Container>
				<Typography className={classes.page}>
					<Typography
						variant="h2"
						component="div"
						gutterBottom
						color={("textSecondary", "secondary")}
					>
						To jest mój pierwszy projekt w React
					</Typography>
					<Typography
						variant="overline"
						display="block"
						gutterBottom
						color="initial"
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Laboriosam, magni quae? Provident eveniet a iste.
						Eius officia, maxime odio obcaecati aspernatur hic sint
						saepe illo aliquid molestiae laborum modi, ratione,
						totam deserunt soluta! Reprehenderit neque, libero enim
						cum dolorem illum necessitatibus quisquam reiciendis
						minus voluptas voluptates porro, dolor atque omnis quod
						odit laudantium eos aut corporis aliquam? Voluptas
						aliquid veritatis ipsam recusandae tempora rem, ut,
						neque sint atque ipsa natus in odio similique blanditiis
						magni culpa quis asperiores ex unde beatae nulla porro
						ab repellendus! Repellat assumenda odit, eius animi
						eveniet excepturi, non consectetur minus optio facere
						suscipit praesentium ut nesciunt consequatur
						repellendus, veritatis enim atque at? Harum ducimus
						laborum nemo aut blanditiis amet, repudiandae obcaecati,
						labore minima eveniet sed modi provident ipsum nostrum,
						vel veritatis ab tempora. Dicta, officia amet quisquam
						dolore doloribus deserunt iusto nostrum provident
						delectus assumenda! Laboriosam voluptatem a ad autem
						saepe iure consectetur quas quasi vero eveniet, quos
						magnam consequuntur officiis minima repellendus pariatur
						earum doloremque nam, non ullam fuga. Ex quae minus,
						modi laudantium laboriosam porro eum vero iste voluptate
						obcaecati commodi quos omnis aperiam excepturi eaque
						molestias eius et facere. Similique, veniam. Minima
						voluptatibus accusamus repellat officiis incidunt
						recusandae sit sunt sapiente quam!
					</Typography>
					<Box
						className={classes.szukaj}
						sx={{
							width: 300,
							height: 60,
							maxWidth: "100%",
						}}
					>
						<Box className={classes.szukaj}>
							<TextField
								fullWidth
								label="Wpisz co szukasz"
								id="fullWidth"
							/>
							<Button
								className={classes.button}
								variant="contained"
							>
								Szukaj
							</Button>
						</Box>
					</Box>
				</Typography>
			</Container>
		</div>
	);
}

export default MPage;
