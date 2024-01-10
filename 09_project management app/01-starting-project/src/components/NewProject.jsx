import Input from "./Input"
import { useRef } from "react"
import Modal from "./Modal";

export default function NewProject({ onAddProject, onCancelProject }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const modal = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // validation...
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }
    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-xl text-stone-700 mt-4 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field</p>
            </Modal>

            <div className="w-[35rem] mt-16">
                <menu className="flex justify-end items-center gap-4 my-4">
                    <li><button
                        className="text-stone-800 hover:text-stone-950 font-semibold"
                        onClick={onCancelProject}
                    >Cancel</button></li>

                    <li><button
                        className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
                        onClick={handleSave}
                    >Save</button></li>
                </menu>

                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" isTextarea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    )
}
