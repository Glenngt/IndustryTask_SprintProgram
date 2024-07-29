import { useEffect, useRef } from 'react'
import './newPrompt.css'

const NewPrompt = () => {

    const endref = useRef(null)

    useEffect(() => {
        endref.current.scrollIntoView({ behavior: "smooth" })
    }, [])

    return (
        <>
            <div className="endChat" ref={endref}></div>
            <form className='newForm'>
                <label htmlFor="file">
                    <img src="/attachment.png" alt="" />
                </label>
                <input id="file" type="file" multiple={false} hidden />
                <input type="text" placeholder='Ask Anything...' />
                <button>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </>
    )
}

export default NewPrompt