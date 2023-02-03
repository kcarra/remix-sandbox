import { useLoaderData, Form } from "@remix-run/react";
import React from "react";

export const loader = async () => {
  console.log("does this get called again");
  return fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();

  const { _action, ...values } = Object.fromEntries(formData);

  switch (_action) {
    case "add":
      // add the action
      break;
    case "delete":
      // delete the action
      break;
    default:
      break;
  }

  return { foo: "bar" };
};

export default function People() {
  const todos = useLoaderData<typeof loader>();
  // testing the rules of hooks on the server
  // this doesnt work with js disabled
  const [age, setAge] = React.useState(29);

  return (
    <div>
      <ul>
        {todos.map((todo, i) => {
          if (i % 2 > 0) {
            return (
              <li key={todo.id}>
                {i}: {todo.title}
                <Form method="post">
                  <input type="hidden" name="todo_id" value={todo.id}></input>
                  <button type="submit" name="_action" value="delete">
                    x
                  </button>
                </Form>
              </li>
            );
          }
        })}
        <li>
          <Form method="post">
            <input type="text" name="firstname"></input>
            <br />
            <input type="text" name="lastname"></input>
            <br />
            <button type="submit" name="_action" value="add">
              Add
            </button>
          </Form>
        </li>
      </ul>
      <div>
        <p>{age}</p>
        <button
          onClick={() =>
            setAge((age) => {
              return age + 1;
            })
          }
        >
          Increase age
        </button>
      </div>
    </div>
  );
}
