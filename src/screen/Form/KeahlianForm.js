import { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const KeahlianForm = () => {
    const [keahlian, setKeahlian] = useState([
        {
            skill: ''
        }
    ])
    const changeValue = (index, value) => {
        var temp = [...keahlian]
        temp[index].skill = value
        setKeahlian(temp)
        // setPersonal(prev => {
        //     return {
        //         ...prev,
        //         [key]: value
        //     }
        // })
    }

    const addSkill = () => {
        var temp = [...keahlian]
        temp.push({
            skill: ''
        })
        setKeahlian(temp)
    }

    const next = () => {

    }
    return (
        <>
            <div className="container colom">
                <div className="flex1">
                    {keahlian && keahlian.map((ahli,index) => {
                        return <div>
                            <div className="dpflex mt2">
                                <div className="flex3"><input type="text" className="input" value={ahli.skill} onChange={($e) => changeValue(index, $e.target.value)} /></div>
                            </div>
                        </div>
                    })}

                </div>
                <div className="flex1">
                    <div onClick={addSkill}>
                        <FontAwesomeIcon icon={faPlus} />
                        Add Another Skill
                    </div>
                </div>

            </div>
            <button style={{ float: 'right' }} className="mt2" onClick={() => next()}>Submit</button>
        </>
    )
}

export default KeahlianForm