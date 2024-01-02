

export default function TabButton({ children, onSelect, isSelected }) {

    // const clickHandler = () => {
    //     console.log("Hello world");
    // }

    return (
        <li><button className={isSelected ? 'active' : null} onClick={onSelect}>{children}</button></li>
    )
}
