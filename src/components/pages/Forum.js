import React, { useState, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { QuestionService } from "../ApiCalls/Questions";
const questionService = new QuestionService();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 610,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Forum = () => {
  const [open, setOpen] = React.useState(false);
  const [questions, setQuestions] = useState([]);
  const [TextValue, setTextFieldValue] = useState([]); //1
  const [ModalHeading, setModalHeading] = useState("");
  const [ModalPlaceholder, setModalPlaceholder] = useState("");
  const [UserId, setUserId] = useState("");

  useEffect(() => {
    try {
      questionService.getQuestions().then((res) => {
        setQuestions(res.reverse());
        console.log("res");
        //  que = "changed";
      });
    } catch (e) {
      console.log(e);
      setQuestions([]);
    }
  }, [TextValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCloseModal = () => setOpen(false);
  const handleOpenModal = (param, index, text) => {
    setOpen(true);
    param === "Reply"
      ? setModalHeading("Answer Question")
      : setModalHeading("Type Question");
    if (param === "Reply") {
      setModalPlaceholder("Answer");
      setUserId(text._id);
    } else {
      setModalPlaceholder("Question");
    }
  };

  const saveReply = (id) => {
    questionService.editReply(id, TextValue);
    try {
      questionService.getQuestions().then((res) => {
        setQuestions(res.reverse());
        setTextFieldValue("");
      });
    } catch (e) {
      console.log(e);
      setQuestions([]);
    }
  };

  const onInputText = (e) => {
    setTextFieldValue((preveState) => e.target.value); //1
  };
  const handleQuestionModal = (param) => {
    if (param === "Question") {
      questionService.postAsyncQuestion(TextValue); //
      try {
        questionService.getQuestions().then((res) => {
          setQuestions(res.reverse());
        });
      } catch (e) {
        setQuestions([]);
      }
    }
    if (param === "Answer") {
      saveReply(UserId);
    }
    handleCloseModal(); //close modal
  };
  return (
    <>
      {/* question/Reply modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" id="modal-title">
            {ModalHeading}
          </Typography>
          <TextField
            sx={{ width: "60ch", margin: "auto" }}
            id="filled-multiline-static"
            label={ModalPlaceholder}
            multiline
            rows={4}
            variant="filled"
            onChange={(e) => onInputText(e)}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button
              onClick={() => {
                handleQuestionModal(ModalPlaceholder);
              }}
            >
              Ok
            </Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </Typography>
        </Box>
      </Modal>{" "}
      {/* end of Question/Reply modal */}
      <Card sx={{ maxWidth: "65%", margin: "0 auto" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="440"
          image="https://agfundernews.com/wp-content/uploads/2019/06/iStock-958399840.jpg"
        />
        <br />
        <Button
          sx={{
            height: "20%",
            marginBottom: "30px",
            marginTop: "30px",
            marginLeft: "23px",
            fontSize: "20px",
            backgroundColor: "teal",
            color: "white",
          }}
          variant="contained"
          onClick={() => handleOpenModal("Question")}
        >
          Ask Question
        </Button>
        {questions.map((text, index) => (
          <CardContent key={text._id}>
            <Typography gutterBottom variant="h4" component="div">
              {index + 1}: {text.Question}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <CardActions>
                  <Button
                    sx={{
                      fontSize: "15px",
                      backgroundColor: "teal",
                      color: "white",
                    }}
                    variant="contained"
                    size="small"
                    onClick={() => handleOpenModal("Reply", index, text)}
                  >
                    Reply
                  </Button>
                </CardActions>

                {!(text.Replies === undefined) ? (
                  text.Replies.map((text, index) => (
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ marginLeft: "20px" }}
                      key={index}
                    >
                      {index + 1}: {text}
                    </Typography>
                  ))
                ) : (
                  <div>test2</div>
                )}
              </Box>
            </Typography>
          </CardContent>
        ))}
      </Card>
    </>
  );
};
export default Forum;
