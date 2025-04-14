import React, {useState} from "react"; //import hooks
//add props so we can pass the to-do up to the parent component, create a new Type
type FormProps = {
    onCreate: (
        title: string, 
        description: string
        // body/mood?
    
    ) => void;
}

//copy pasta the form from page.tsx
export function NewForm({onCreate}: FormProps) {
    //create more state to hold the title, description, etc
    const [title, setTitle] = useState("");

    const [description, setDesc] = useState("");

    const [mood_state, setMood] = useState("");

    const [body_state, setBody] = useState("");

    //you don't need to define the completedAt, or completed
    //Handler function
      const handleSubmit = (e: React.FormEvent <HTMLFormElement>) => {
        // prevent the default
        e.preventDefault();

        onCreate(title, description, mood_state, body_state)
        //move setter functions back to page.tsx
        
        //use the setter functions for state
        setTitle("");
        setDesc("");
        setMood("");
        setBody("");
        //console.log(e.target, "target") //logs form success
      }

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)} />
        <br />
        <hr />
        <br />
        <label htmlFor="description">Description: </label>
        <input type="text" name="description" id="description" value={description} onChange={e => setDesc(e.target.value)} />
        <br />
        <hr />
        <br />
        <label htmlFor="mood-state">Mood: </label>
        <input type="text" name="mood-state" id="mood-state" value={mood_state} onChange={e => setMood(e.target.value)} />
        <br />
        <hr />
        <br />
        <label htmlFor="body-state">Body: </label>
        <input type="text" name="body-state" id="body-state" value={body_state} onChange={e => setBody(e.target.value)} />
        <br />
        <hr />
        <br />
        <span>
        <button type="submit">Create Entry</button>
        </span>
    </form>
    )
}