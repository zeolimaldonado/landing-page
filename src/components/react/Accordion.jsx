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
            <div onClick={handleClick} className="px-8 py-6 flex justify-between gap-3 items-center text-slate-300">
                <h2 className="text-xl font-bold">
                    {question}
                </h2>
                <FaAngleDown size="24" />
            </div>
            <div className={`bg-neutral-600 overflow-y-hidden ${context.item === item ? ' max-h-screen' : 'max-h-0'} transition-max-height duration-300`}>
                <p className="text-slate-300 px-8 py-6 font-medium">
                    {answer}
                </p>
            </div>
        </article>
    )
}

function AccordionWrapper () {
    const { list: faq, setItem, item } = useContext(AccordionContext);

    const handleClick = (item) => () => {
        setItem(item);
    }

    return (
        <div className="flex-1 flex flex-col gap-4">
            {
                faq.map(({ question, answer }, index) => (
                    <article key={index} className="bg-neutral-700 rounded-sm flex flex-col gap-0">
                        <div onClick={handleClick(index)} className="px-8 py-6 flex justify-between gap-3 items-center text-slate-300">
                            <h2 className="text-xl font-bold">
                                {question}
                            </h2>
                            <FaAngleDown size="24" />
                        </div>
                        <div className={`bg-neutral-600 overflow-y-hidden ${item === index ? ' max-h-screen' : 'max-h-0'} transition-max-height duration-300`}>
                            <p className="text-slate-300 px-8 py-6 font-medium">
                                {answer}
                            </p>
                        </div>
                    </article>
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