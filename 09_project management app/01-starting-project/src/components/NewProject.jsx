import Input from "./Input"


export default function NewProject() {
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex justify-end items-center gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950 font-semibold">Cancel</button></li>
                <li><button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">Save</button></li>
            </menu>
            <div>
                <Input label="Title" />
                <Input label="Description" isTextarea />
                <Input label="Due Date" />
            </div>
        </div>
    )
}