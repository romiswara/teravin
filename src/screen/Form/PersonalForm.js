import { useState } from 'react';
const PersonalForm = ({ changePage }) => {
    const [error, setError] = useState([])
    const [personal, setPersonal] = useState({
        id: "",
        nama: "",
        alamat: "",
        usia: "",
        jenis_kelamin: ""
    })
    const changeValue = (key, value) => {
        setPersonal(prev => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    const next = () => {
        console.log("personal", personal)
        if (personal.nama != "" && personal.alamat != "" && personal.usia != "" && personal.jenis_kelamin != "") {
            changePage(2)
        } else {
            var tempError = []
            if (personal.nama == "") {
                tempError.unshift("nama")
            }
            if (personal.alamat == "") {
                tempError.unshift("alamat")
            }
            if (personal.usia == "") {
                tempError.unshift("usia")
            }
            if (personal.jenis_kelamin == "") {
                tempError.unshift("jenis_kelamin")
            }
            setError(tempError)
        }
    }
    return (
        <>
            <div className="container">
                <div className="flex1">
                    <div>
                        <div className="dpflex mt1">
                            <div className="flex1">Nama Lengkap</div>
                            <div className="flex3">
                                <input type="text" className="input" value={personal.nama} onChange={($e) => changeValue("nama", $e.target.value)} />
                                {error.includes("nama") && <p className="alert">Nama tidak boleh kosong</p>}
                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="dpflex mt1">
                            <div className="flex1">Alamat</div>
                            <div className="flex3">
                                <input type="text" className="input" value={personal.alamat} onChange={($e) => changeValue("alamat", $e.target.value)} />
                                {error.includes("alamat") && <p className="alert">Alamat tidak boleh kosong</p>}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex1">
                    <div>
                        <div className="dpflex mt1">
                            <div className="flex1">Usia</div>
                            <div className="flex3">
                                <input type="text" className="input" value={personal.usia} onChange={($e) => changeValue("usia", $e.target.value)} />
                                {error.includes("usia") && <p className="alert">Usia tidak boleh kosong</p>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="dpflex mt1">
                            <div className="flex1">Jenis Kelamin</div>
                            <div className="flex3">
                                <input type="text" className="input" value={personal.jenis_kelamin} onChange={($e) => changeValue("jenis_kelamin", $e.target.value)} />
                                {error.includes("jenis_kelamin") && <p className="alert">Jenis Kelamin tidak boleh kosong</p>}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <button style={{ float: 'right' }} className="mt1" onClick={() => next()}>Next</button>
        </>
    )
}

export default PersonalForm