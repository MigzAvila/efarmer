import React, { useState, useEffect } from "react";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 610,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Forum = () => {
  // const[textFieldValue, setTextFieldValue] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Controlled");
  const [questions, setQuestions] = useState([]);
  const [replySave, setSaveReply] = useState([]);
  const [questionSave, setQuestionSave] = useState("");
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  // this.state = {
  //   value: "Please write an essay about your favorite DOM element.",
  // };
  const questionService = new QuestionService();

  useEffect(() => {
    try {
      questionService.getQuestions().then((res) => {
        setQuestions(res);
        // console.log(textFieldValue[1]);
      });
      
    } catch (e) {
      console.log(e);
      setQuestions([]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const saveReply = (id) => {
    // console.log(id);
    questionService.editReply(id, replySave);
    try {
      questionService.getQuestions().then((res) => {
        setQuestions(res);
        setSaveReply("");
      });
    } catch (e) {
      console.log(e);
      setQuestions([]);
    }
  };
  const clearMessage = () => {
    setSaveReply((preveState) => "");
    //questionService.editReply(questions[]._id)
    //console.log(questions[0]._id)
  };
  const onInputChange = (e, id)  => {
    setSaveReply((preveState) => e.target.value);
    console.log(replySave);
  };
  const onInputQuestion = (e) => {
    setQuestionSave((preveState) => e.target.value);
    // console.log(e.target.value);
  };
  const handleQuestionModal = () => {
    console.log(questionSave);
    questionService.postAsyncQuestion(questionSave);
    try {
      questionService.getQuestions().then((res) => {
        setQuestions(res);
      });
    } catch (e) {
      console.log(e);
      setQuestions([]);
    }
    handleCloseModal(); //close modal
  };
  return (
    <>
      {/* question modal */}
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" id="modal-title">
            Type your question
          </Typography>
          <TextField
            sx={{ width: "60ch", margin: "auto" }}
            id="filled-multiline-static"
            label="Question"
            multiline
            rows={4}
            variant="filled"
            // value={this.state.value}
            onChange={(e) => onInputQuestion(e)}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button
              onClick={() => {
                handleQuestionModal();
              }}
            >
              Ok
            </Button>
            <Button onClick={handleCloseModal}>Cancel</Button>
          </Typography>
        </Box>
      </Modal>

      <Card sx={{ maxWidth: "65%", margin: "0 auto" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="440"
          image="https://agfundernews.com/wp-content/uploads/2019/06/iStock-958399840.jpg"
        />
        <br />
        <Button variant="contained" onClick={handleOpenModal}>
          Ask Question
        </Button>
        {questions.map((text, index) => (
          <CardContent key={text._id}>
            <Typography gutterBottom variant="h5" component="div">
              {text.Question}
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
                {!(text.Replies === undefined) ? (
                  text.Replies.map((text, index) => (
                    <div key={index}>{text}</div>
                  ))
                ) : (
                  <div>test2</div>
                )}

                <div>
                  <TextField
                    value={replySave}
                    key={text._id}
                    id="filled-multiline-static"
                    label="Reply"
                    multiline
                    rows={4}
                    variant="filled"
                    // value={this.state.value}
                    onChange={(e) => onInputChange(e, index)}
                  />
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        saveReply(text._id);
                      }}
                    >
                      Post
                    </Button>
                    <Button
                      size="small"
                      onClick={clearMessage}
                      >
                        Clear
                    </Button>
                  </CardActions>
                </div>
              </Box>
            </Typography>
          </CardContent>
        ))}
      </Card>
    </>
  );
};
export default Forum;
