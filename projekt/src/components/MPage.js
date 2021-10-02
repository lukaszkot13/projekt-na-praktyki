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
  background-color: AliceBlue;
  height: auto;
  width: auto;
`;
const useStyles = makeStyles({
  page: {
    display: "column",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  title: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  wyszukiwarka: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
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
            className={classes.title}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
            eveniet ex magnam nihil molestiae corporis ad iusto ipsam. Officia
            aliquam unde est placeat ab repellendus perferendis quia esse ipsa.
            Necessitatibus quos tempora iste, labore, enim debitis doloremque
            qui vero aliquam sequi, reiciendis harum molestias illo nesciunt
            inventore! Distinctio nemo, suscipit expedita natus maxime
            voluptatem illo vel totam cumque quam dignissimos tenetur? Tempore
            sint eius omnis voluptatem alias possimus quibusdam incidunt neque
            eveniet quam voluptas a aspernatur odio ullam dolore ipsum, nisi
            quidem soluta dolorum similique? Iusto, harum quibusdam maxime
            repellat corrupti expedita libero quidem velit iste laboriosam
            maiores facilis laudantium. Corrupti nam ipsam ipsum nobis expedita
            vitae, est autem dolorem quaerat consectetur facilis libero cum
            iusto illo in praesentium aliquid commodi molestias, ex aliquam.
            Voluptatibus quisquam quo numquam ipsam placeat expedita incidunt,
            delectus facere aliquam odit fuga repellendus. Nobis impedit maxime
            tenetur veritatis quas a rem natus repudiandae tempora aspernatur
            obcaecati consequatur esse praesentium delectus voluptatem, officiis
            minus debitis, facere sit tempore voluptatibus omnis! Labore eveniet
            laboriosam quae. Consectetur velit nulla amet earum nesciunt! Unde
            tenetur quaerat, nisi repellendus eveniet adipisci accusamus
            reiciendis dicta sapiente voluptas ex quo a laudantium asperiores
            animi consectetur repudiandae, ducimus debitis error odit quia
            veritatis earum. Odio fugiat iusto ipsa accusantium voluptates ipsam
            molestias rerum cum. Quo maiores culpa optio obcaecati iusto ullam
            ea dignissimos earum inventore illum vitae assumenda cupiditate
            molestias exercitationem distinctio aliquid, quasi provident
            officiis perspiciatis nisi natus architecto repellat fugit possimus.
            Harum placeat accusamus ad repellat adipisci similique fuga
            reiciendis rem nisi. Voluptatem voluptatibus nesciunt dolor id
            deserunt odio eos, quasi, quos deleniti voluptate sequi vitae beatae
            consequuntur? Nisi, possimus? Vero architecto sed aut ut, voluptatem
            eveniet saepe modi corrupti quisquam hic in similique iusto!
            Molestias illum, nisi optio quaerat beatae sequi modi impedit esse
            suscipit vero expedita officia earum dolorem vel debitis, fuga
            sapiente corporis possimus nulla. Similique id nesciunt iure
            deserunt amet sed modi dolorum, error nostrum non nihil laboriosam
            molestias unde esse eum assumenda reprehenderit eos ipsa sit, vel
            quos aliquid dolore facilis! Corrupti cupiditate dignissimos neque
            mollitia accusamus fuga ipsam amet non, alias soluta consequuntur
            laboriosam, deleniti, obcaecati eos placeat natus suscipit commodi
            eligendi laborum sequi distinctio delectus. Ab consequuntur laborum
            adipisci? Error aut ducimus dolorem numquam perspiciatis sint dicta
            corrupti quidem, consectetur minima nisi vel quibusdam at pariatur
            repellat excepturi nam, tempore culpa maiores eaque ex iure sapiente
            architecto nulla? Consequatur vitae quos amet. Pariatur sapiente in
            vero delectus! Iusto error explicabo omnis tempore? Quia dolore
            deleniti harum expedita accusamus quod? Exercitationem ratione nobis
            natus, beatae impedit neque quam odit fuga ullam totam suscipit
            molestiae nesciunt quod atque, excepturi repudiandae ad eveniet
            voluptatum maiores! Tempora libero accusamus ea quia. Ab deserunt
            fuga sapiente, magnam repudiandae ullam dolores suscipit in
            quibusdam minima cumque reiciendis dolore culpa beatae rem quae,
            eius quo laborum obcaecati qui ipsum voluptas. Commodi, quos.
            Architecto tenetur libero cupiditate recusandae nobis laudantium
            voluptatibus esse mollitia explicabo perferendis nulla natus, ipsa
            in dolores adipisci ut itaque aperiam saepe eius dolorum assumenda
            eaque sunt. Aut?
          </Typography>

          <Box className={classes.wyszukiwarka}>
            <TextField
              className={classes.szukaj}
              fullWidth
              label="Wpisz co szukasz"
              id="fullWidth"
            />
            <Button className={classes.button} variant="contained">
              Szukaj
            </Button>
          </Box>
        </Typography>
      </Container>
    </div>
  );
}

export default MPage;
