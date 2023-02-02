export default function ModulTitle({name,modulChange}) {
    return(
        <nav>
            <h1>{name}</h1>
            <button
                onClick={()=> modulChange(name)}
            />
        </nav>
    )
}