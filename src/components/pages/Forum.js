import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {QuestionService} from '../ApiCalls/Questions'

const Forum = () => {
  const [value, setValue] = React.useState('Controlled');
  const [questions, setQuestions] = useState([]);
  const questionService = new QuestionService();


  useEffect(() => {
    questionService.getQuestions().then((data) => setQuestions(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const saveReply = () =>{
    //questionService.editReply(questions[]._id)
    //console.log(questions[0]._id)
  }
  const onInputChange = (e, name) => {
    console.log(e.target.value)
    console.log(name)
    
    // const val = (e.target && e.target.value) || "";
    // let _product = { ...product };
    // _product[`${name}`] = val;
    // setProduct(_product);
  };

  return (
    <Card sx={{ maxWidth: "65%", margin: "0 auto"}}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="440"
      image="https://agfundernews.com/wp-content/uploads/2019/06/iStock-958399840.jpg"
    />
     {questions.map((text, index)=>(  
      <CardContent key={index} >
      <Typography gutterBottom variant="h5" component="div">
         {text.Question}
      </Typography>
      <Typography variant="body2" color="text.secondary" component="div">
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {width: '100%'},
       
      }}
      noValidate
      autoComplete="off"
    >  
      <div>
        <TextField
          id="filled-multiline-static"
          label="Reply"
          multiline
          rows={4}
          variant="filled"
          onChange={(e) => onInputChange(e, text.Replies)}
        />
      </div>
    </Box>
      </Typography>
    </CardContent>

    ))} 
    <CardActions>
      <Button size="small" onClick={saveReply}>Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
    </Card>
  );
}
export default Forum;