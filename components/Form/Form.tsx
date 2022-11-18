export default function Form({Method, Action, children}) {
    return (
        <form method={Method} action={Action}>
            {children}
        </form>
    )
}
