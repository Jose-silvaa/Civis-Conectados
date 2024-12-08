export default function MessageFeedback({message}){

    return (
        <>
            {message && <p className="text-green-500 text-left mb-4">{message}</p>}
        </>
    )
}         

