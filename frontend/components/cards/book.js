export default function Book({
    id,
    title,
    description,
    img
}){
    return (
        <div className="w-full">
            <a href={`/notebook/${id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                </div>
            </a>
        </div>
    )
}