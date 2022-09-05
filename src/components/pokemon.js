import React, { useState } from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '5px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  media: {
    width: '200px',
  },
  mediaModal: {
    border: '1px solid #000',
    borderRadius: '10px'
  }
};


const Pokemon = (props) => {
  const { pokemon } = props;

  // estado del modal
  const [open, setOpen] = useState(false)

  // manejadores del modal
  const handleClickOpen = () => setOpen(true)
  const handleClickClose = () => setOpen(false)


  return (
    <div className="poke-card">
      <Card
        className="card"
        variant="outlined"
        sx={{ maxWidth: 200, borderRadius: '10px' }}
        key={pokemon.id}
        onClick={handleClickOpen}
      >
        <CardMedia
          component="img"
          image={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="card-image"
          style={style.media}
        />

        <CardContent className="card-content">
          <Typography
            gutterBottom variant={"h6"}
            fontWeight={"bold"}
          >
            #{pokemon.id} {pokemon.name}
          </Typography>

          <Typography
            component={"span"}
            variant={"body2"}
            color={"text.secondary"}
            sx={{ display: 'flex' }}
          >
            {pokemon.types.map((type, index) => {
              return <span key={index} className="card-desc">{ type.type.name.toUpperCase() }</span>
            })}
          </Typography>
        </CardContent>

      </Card>

      <Modal
        open={open}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        onClose={handleClickClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Card
            sx={style}
            className="card-modal"
            variant="outlined"
            key={pokemon.id}
          >

            <CardMedia
              component="img"
              image={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="card-image"
              style={style.mediaModal}
            />

            <CardContent className="card-content">

              <Typography
                gutterBottom
                variant={"h6"}
                fontWeight={"bold"}
              >
                #{pokemon.id} {pokemon.name}
              </Typography>

              <Typography
                component={"span"}
                variant={"body2"}
                color={"text.secondary"}
              >
                <span style={{ fontWeight: 'bold' }}>
                  HEIGHT:
                </span>
                <span className="card-desc">
                  {pokemon.height}
                </span>

                <span style={{ fontWeight: 'bold' }}>
                  WEIGHT:
                </span>
                <span className="card-desc">
                  {pokemon.weight}
                </span>
              </Typography>

              <Typography
                component={"span"}
                variant={"body2"}
                color={"text.secondary"}
                sx={{ display: 'flex', marginTop: '10px' }}
              >
                <span style={{ fontWeight: 'bold' }} >ABILITIES:</span>
              </Typography>

              <Typography
                component={"span"}
                variant={"body2"}
                color={"text.secondary"}
                sx={{ display: 'flex' }}
              >
                {pokemon.abilities.map((abilities, index) => {
                  return <span key={index} className="card-desc">{abilities.ability.name.toUpperCase()}</span>
                })}
              </Typography>

            </CardContent>

          </Card>
        </Fade>
      </Modal>
    </div>
  )
}

export default Pokemon;