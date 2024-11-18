export default function ErrorMessage({error}){

    return (
        <>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        </>
    )
}