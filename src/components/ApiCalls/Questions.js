export class QuestionService {
    getQuestions() {
      return fetch("http://localhost:3333/efarmer/")
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
    }

    // updating user
  async editReply(product) {
    let state = false;
    console.log(product, "iddd")
    try {
      await fetch(`http://localhost:3333/efarmer/${product}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
          },   
        body: JSON.stringify({
          Username: product.Username,
          Question: product.Question,
          Replies: product.Replies,
        })
      })
      .then(response => response.json())
      .then(async (json) => {
        state = true
        json = state
        return json
      });
    } catch (err) {
      console.log(err);
      state = false;
    }
    console.log(state, "is true or false")
    return state;
  }
}