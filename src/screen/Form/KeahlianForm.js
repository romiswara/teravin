import { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const KeahlianForm = ({ submitData }) => {
    const [error, setError] = useState([false])
    const [keahlian, setKeahlian] = useState([
        {
            skill: ''
        }
    ])
    const changeValue = (index, value) => {
        var temp = [...keahlian]
        temp[index].skill = value
        setKeahlian(temp)
    }

    const addSkill = () => {
        var temp = [...keahlian]
        temp.push({
            skill: ''
        })
        setKeahlian(temp)
    }

    const next = () => {
        var hasError =false
        var errorList = [...error]
        for (let a = 0; a < keahlian.length; a++) {
            if(keahlian[a].skill ==""){
                hasError=true
                errorList[a]=true
            } else {
                errorList[a]=false
            }
        }
        setError(errorList)
        if(!hasError){
            submitData(keahlian)
        } 
    }
    return (
        <>
            <div className="container colom">
                <div className="flex1">
                    {keahlian && keahlian.map((ahli, index) => {
                        return <div>
                            <div className="dpflex mt2">
                                <div className="flex3">
                                    <input type="text" className="input" value={ahli.skill} onChange={($e) => changeValue(index, $e.target.value)} />
                                    {error[index]==true && <p className="alert">Skill tidak boleh kosong</p>}
                                    </div>
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
            <button style={{ float: 'right' }} className="mt2 btn" onClick={() => next()}>Submit</button>
        </>
    )
}

export default KeahlianForm