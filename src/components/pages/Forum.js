import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { QuestionService } from "../ApiCalls/Questions";

const Forum = () => {
  const [value, setValue] = React.useState("Controlled");
  const [questions, setQuestions] = useState([]);
  // this.state = {
  //   value: "Please write an essay about your favorite DOM element.",
  // };
  const questionService = new QuestionService();

  useEffect(() => {
    try {
      questionService.getQuestions().then((res) => {
        setQuestions(res);
      });
    } catch (e) {
      console.log(e);
      setQuestions([]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const saveReply = (id) => {
    console.log(id);
    questionService.editReply(id);
    //console.log(questions[0]._id)
  };
  const clearMessage = () => {
    //questionService.editReply(questions[]._id)
    //console.log(questions[0]._id)
  };
  const onInputChange = (e, name) => {
    console.log(e.target.value);
    console.log(name);

    // const val = (e.target && e.target.value) || "";
    // let _product = { ...product };
    // _product[`${name}`] = val;
    // setProduct(_product);
  };

  return (
    <Card sx={{ maxWidth: "65%", margin: "0 auto" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="440"
        image="https://agfundernews.com/wp-content/uploads/2019/06/iStock-958399840.jpg"
      />
      {questions.map((text, index) => (
        <CardContent key={text._id}>
          <h3>User-A Question</h3>
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
                text.Replies.map((text, index) => <div key={index}>{text}</div>)
              ) : (
                <div>test2</div>
              )}

              <div>
                <TextField
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
                    onClick={() => {
                      clearMessage();
                    }}
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
  );
};
export default Forum;
