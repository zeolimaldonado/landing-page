import { createContext, useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export const AccordionContext = createContext(null);

function AccordionItem ({ question, answer, item }) {
    const context = useContext(AccordionContext);

    const handleClick = () => {
        context.setItem(item);
    }

    return (
        <article className="bg-neutral-700 rounded-sm flex flex-col gap-0">
            <div onClick={handleClick} className="px-8 py-6 flex justify-between gap-3 items-center text-slate-300 cursor-pointer">
                <h2 className="text-xl font-bold">
                    {question}
                </h2>
                <div className={`${context.item === item ? 'rotate-180' : 'rotate-0'}`}>
                    <FaAngleDown size="24" />
                </div>
            </div>
            <div className={`bg-neutral-600 overflow-y-hidden ${context.item === item ? ' max-h-screen' : 'max-h-0'}`}>
                <p className="text-slate-300 px-8 py-6 font-medium">
                    {answer}
                </p>
            </div>
        </article>
    )
}

function AccordionWrapper () {
    const { list: faq } = useContext(AccordionContext);

    return (
        <div className="flex-1 flex flex-col gap-4">
            {
                faq.map(({ question, answer }, index) => (
                    <AccordionItem question={question} answer={answer} item={index} key={index} />
                ))
            }
        </div>
    )
}

export default function Accordion ({ faq }) {
    const [item, setItem] = useState(0)

    return (
        <AccordionContext.Provider value={{
            list: faq,
            item: item,
            setItem: setItem
        }}>
            <AccordionWrapper />
        </AccordionContext.Provider>
    )
}