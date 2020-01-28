import React from "react";
import { Dialog, DialogContent, TextField, Button } from "@material-ui/core";
import CustomButton from "../components/cbutton";

export default function ButtonScreen(props) {
  const [open, setOpen] = React.useState(false);
  const buttons = require("..//assets/buttons.json");

  const handleChange = evt => {
    const value = evt.target.value;
    props = {
      ...props,
      [evt.target.name]: value
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    window.location.assign(
      `${buttons.url[0]}?key01lg=${props.matricula}&key02cs=${props.codigo}&key03ps=99999999&oldId=mdl`
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  const screenStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3%",
    marginLeft: "10%",
    float: "left"
  };

  const calculateButtons = () => {
    let buttonComps = [];
    buttonComps.push(
      <CustomButton
        key={0}
        text={buttons.text[0]}
        onClick={() => setOpen(true)}
      ></CustomButton>
    );
  for (let i = 1; i < buttons.text.length; i++) {
      buttonComps.push(
        <CustomButton
          key={i}
          text={buttons.text[i]}
          url={buttons.url[i]}
        ></CustomButton>
      );
    }
    return buttonComps;
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            type="number"
            inputProps={{ min: "0" }}
            name="matricula"
            autoFocus
            margin="dense"
            label="Matrícula"
            fullWidth
            value={props.matricula}
            onChange={handleChange}
          />
          <TextField
            type="number"
            inputProps={{ min: "0" }}
            name="codigo"
            margin="dense"
            label="Código"
            fullWidth
            value={props.codigo}
            onChange={handleChange}
          />
          <Button fullWidth onClick={handleSubmit} color="primary">
            Entrar
          </Button>
        </DialogContent>
      </Dialog>
      <div style={screenStyle}>{calculateButtons()}</div>
    </>
  );
}
