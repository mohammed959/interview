
type ButtonType = {
    style:string,
    title:string
}
export const Button = ({style,title}:ButtonType):JSX.Element =>{
    return (
        <button  className={`${style}`}>{title}</button>
    )
}