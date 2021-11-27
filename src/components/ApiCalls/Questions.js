export class QuestionService {
  getQuestions() {
    return fetch("http://localhost:3333/efarmer/")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }

  // updating user
  async editReply(product, newReply) {
    let state = false;
    console.log(product, "iddd");

    let currentQues = await fetch(`http://localhost:3333/efarmer/${product}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    console.log(currentQues, "currentQues");

    currentQues.Replies.push(newReply);
    console.log(currentQues, "currentQues");

    try {
      await fetch(`http://localhost:3333/efarmer/${product}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username: currentQues.Username,
          Question: currentQues.Question,
          Replies: currentQues.Replies,
        }),
      })
        .then((response) => response.json())
        .then(async (json) => {
          state = true;
          json = state;
          return json;
        });
    } catch (err) {
      console.log(err);
      state = false;
    }
    console.log(state, "is true or false");
    return state;
  }
  //post async function to server to use
  async postAsyncQuestion(data){
  let state = false;
  try {
    await fetch("http://localhost:3333/efarmer/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: "",
        Question: data,
        Replies: [],
      }),
      // body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        state = true;
        json = state;
        return json;
      });
  } catch (err) {
    console.log(err);
    state = false;
  }
  console.log(state, "is true or false");
  return state;
};

//async function that handle IsLogin using put
async handleLogin(data) {
  let state = false;
  try {
    await fetch(`http://localhost:3333/efarmer/${data[0]._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: data[0].Username,
        Question: data[0].Question,
        Replies: data[0].Replies,
        Password: data[0].Password,
        IsLogin: false,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        state = true;
        json = state;
        return json;
      });
  } catch (err) {
    console.log(err);
    state = false;
  }
  console.log(state, "is true or false");
  return state;
}

}
