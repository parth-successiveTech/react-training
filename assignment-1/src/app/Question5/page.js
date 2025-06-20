import TaskList from "./TaskList";
export default function Home() {
    items=["assignment completion","watch movie","yoga session"];
    return(
        <div>
    <TaskList items={items}/>
    </div> 
  );
}