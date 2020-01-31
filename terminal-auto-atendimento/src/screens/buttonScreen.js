import React from "react";
import { Dialog, DialogContent, TextField, Button } from "@material-ui/core";
import Keyboard from "react-simple-keyboard";
import CustomButton from "../components/cbutton";
import "react-simple-keyboard/build/css/index.css";
export default function ButtonScreen(props) {
  const [open, setOpen] = React.useState(false);
  const [stage, setStage] = React.useState(0);
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
    if (stage === 0) {
      console.log(stage);
      setForm({
        ...form,
        matricula: keyPress
      });
    } else if (stage === 1) {
      setForm({
        ...form,
        codigo: keyPress
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (stage === 0) {
      setStage(1);
    } else if (stage === 1) {
      window.location.assign(
        `${buttons.url[0]}?key01lg=${form.matricula}&key02cs=${form.codigo}&key03ps=99999999&oldId=mdl`
      );
    }
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
      <Dialog open={open} onClose={handleClose} maxWidth='xl' fullWidth>
        <DialogContent>
          {stage === 0 && (
            <>
              <TextField
                type="number"
                inputProps={{ min: "0", style:{fontSize: 50}}}
                name="matricula"
                margin="dense"
                label="Matrícula"
                fullWidth
                value={form.matricula}
                onChange={handleChange}
              />
              <Keyboard
                layout={{
                  default: ["1 2 3 4 5 6 7 8 9 0 {bksp}"]
                }}
                onChange={keyPress => onChangeKeyboard(keyPress)}
              ></Keyboard>
            </>
          )}
          {stage === 1 && (
            <>
              <TextField
                type="number"
                inputProps={{ min: "0", style:{fontSize: 50}}}
                name="codigo"
                margin="dense"
                label="Código"
                fullWidth
                value={form.codigo}
                onChange={handleChange}
              />
              <Keyboard
                layout={{
                  default: ["1 2 3 4 5 6 7 8 9 0 {bksp}"]
                }}
                onChange={keyPress => onChangeKeyboard(keyPress)}
              ></Keyboard>
            </>
          )}
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            color="primary"
            size='large'
          >
            Entrar
          </Button>
        </DialogContent>
      </Dialog>
      <div style={screenStyle}>{calculateButtons()}</div>
    </>
  );
}
