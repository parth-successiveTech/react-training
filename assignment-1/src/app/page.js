import Image from "next/image";
import Greeting from "../Question1/Greetings";
import UserCard from "../Question2/UserCard";
import Weather from "@/Question3/Weather";
import Counter from "@/Question4/Counter";
import TaskList from "@/Question5/TaskList";
import Button from "@/Question6/Button";


export default function Home() {

      const taskList=["complete time sheet","need to do assignment","need  to complete task"]
    return(
        <div>
      <h1>Styled Buttons</h1>
      <Button text="Click Me" color="blue" />
      <Button text="Delete" color="red" />
      <Button text="Submit" color="green" />
      <Button text="Cancel" color="gray" />
    </div>
      


  );
}
