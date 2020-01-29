import React from "react";
import { Dialog, DialogContent, TextField, Button } from "@material-ui/core";
import Keyboard from "react-simple-keyboard";
import CustomButton from "../components/cbutton";
import "react-simple-keyboard/build/css/index.css";
export default function ButtonScreen(props) {
  const [open, setOpen] = React.useState(false);
  const [focused, setFocus] = React.useState("");
  const [form, setForm] = React.useState({
    matricula: "",
    codigo: ""
  });
  const buttons = require("..//assets/buttons.json");

  const handleChange = evt => {
    const value = evt.target.value;
    setForm({ ...form, [evt.target.name]: value });
  };

  const onChangeKeyboard = keyPress => {
    console.log(focused);
    setForm({
      ...form,
      [focused]: keyPress
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    window.location.assign(
      `${buttons.url[0]}?key01lg=${form.matricula}&key02cs=${form.codigo}&key03ps=99999999&oldId=mdl`
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
            value={form.matricula}
            onChange={handleChange}
            onClick={() => {
              setFocus("matricula");
            }}
            onBlur={() => {
              setTimeout(() => {
                setFocus("matricula");
              }, 10);
            }}
          />
          <TextField
            type="number"
            inputProps={{ min: "0" }}
            name="codigo"
            margin="dense"
            label="Código"
            fullWidth
            value={form.codigo}
            onChange={handleChange}
            onClick={() => {
              setFocus("codigo");
            }}
            onBlur={() => {
              console.log("cod");
              setTimeout(() => {
                setFocus("codigo");
              }, 10);
            }}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            color="primary"
          >
            Entrar
          </Button>
        </DialogContent>
        <Keyboard
          layout={{
            default: ["1 2 3 4 5 6 7 8 9 0 {bksp}"]
          }}
          onChange={keyPress => onChangeKeyboard(keyPress)}
        ></Keyboard>
      </Dialog>
      <div style={screenStyle}>{calculateButtons()}</div>
    </>
  );
}
